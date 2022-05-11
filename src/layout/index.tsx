import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import MainLayout from '../components/Layouts/MainLayout';
import Header from '../components/Navigation/Header';
import { WEAVIT_LOGIN_APP } from '../config';

import { useGlobalContext } from '../hooks/GlobalContext';

import './layout.scss';

export const ProtectedRoute = () => {
    const { token } = useGlobalContext();

    // if (token) {
        return (
            // <div className="main">
            //     <div className="content">
                    <MainLayout>
                        <Outlet />
                    </MainLayout>
            //     </div>
            // </div>
        );
    // }

    useEffect(() => {
        if (!token && !WEAVIT_LOGIN_APP.includes('localhost')) {
            window.location.href = WEAVIT_LOGIN_APP;
        }
    }, [token]);
    return <React.Fragment />;
};
