import React, { useState, useContext, useEffect } from 'react';
import jwt_decode from 'jwt-decode';

import { initializeAxios } from '../services/axios';
import { useCookies } from 'react-cookie';
import { WEAVIT_COOKIE_DOMAIN } from '../config';
import { useSearchParams } from 'react-router-dom';
import { useLazyQuery } from '@apollo/client';
import { GET_ME } from '../services/queries';
import { IUser } from '../graphql-models';

export const isValidToken = (token: string) => {
    const decodedToken = jwt_decode<JwtTokenDecoded>(token);
    const currentDate = new Date();

    // JWT exp is in seconds
    if (decodedToken.exp * 1000 < currentDate.getTime()) {
        return false;
    } else {
        return true;
    }
};

export interface JwtTokenDecoded {
    roles: string[];
    ccs: Array<{
        partner: string;
        provider: string;
        customerId: string;
    }>;
    sub: string;
    exp: number;
    iat: number;
    uid: string;
}

interface GlobalContextInterface {
    token: string;
    user: IUser | null;
}

export const defaultValues = {
    token: '',
    user: null,
};

export const GlobalCtx = React.createContext<GlobalContextInterface>(defaultValues);

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
    const queryParams = new URLSearchParams(window.location.search);
    const [searchParams, setSearchParams] = useSearchParams();

    const tokenQueryParams = queryParams.get('token') || '';
    const [cookies, setCookies, removeCookie] = useCookies(['access_token_weavit']);
    const [token, setToken] = useState<string>(cookies.access_token_weavit || tokenQueryParams);
    const [user, setUser] = useState<IUser | null>(null);

    const [getUser, { data }] = useLazyQuery(GET_ME);

    const logout = async (): Promise<void> => {
        removeCookie('access_token_weavit', { domain: WEAVIT_COOKIE_DOMAIN });
        searchParams.delete('token');
        setSearchParams(searchParams);
        setToken('');
    };

    const decodeToken = async (tokenToDecode: string) => {
        initializeAxios(logout, tokenToDecode);

        if (!cookies.access_token_weavit) {
            setCookies('access_token_weavit', tokenToDecode, { path: '/', domain: WEAVIT_COOKIE_DOMAIN });
            queryParams.delete('token');
        }

        searchParams.delete('token');
        setSearchParams(searchParams);

        return;
    };

    useEffect(() => {
        if (token && isValidToken(token)) {
            decodeToken(token);
            getUser();
        } else if (token) {
            logout();
        }
    }, [token]);

    useEffect(() => {
        if (data && !user) {
            setUser(data.me);
        }
    }, [data]);

    return <GlobalCtx.Provider value={{ token, user }}>{children}</GlobalCtx.Provider>;
};

export const useGlobalContext = () => useContext(GlobalCtx);
