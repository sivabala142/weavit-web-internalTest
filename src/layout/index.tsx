import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import MainLayout from '../components/Layouts/MainLayout';
import Header from '../components/Navigation/Header';
import { WEAVIT_LOGIN_APP } from '../config';

import { useGlobalContext } from '../hooks/GlobalContext';

import './layout.scss';

export const ProtectedRoute = () => {
    const token =
        'eyJhbGciOiJSUzI1NiIsImtpZCI6ImM2NzNkM2M5NDdhZWIxOGI2NGU1OGUzZWRlMzI1NWZiZjU3NTI4NWIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vd2Vhdml0LWludGVncmF0aW9uLTEiLCJhdWQiOiJ3ZWF2aXQtaW50ZWdyYXRpb24tMSIsImF1dGhfdGltZSI6MTY1MTAzODAwMiwidXNlcl9pZCI6Imdvb2dsZToxMDYyMTAyNjU1MjIzMDQ4MzA4ODIiLCJzdWIiOiJnb29nbGU6MTA2MjEwMjY1NTIyMzA0ODMwODgyIiwiaWF0IjoxNjUxMDM4MDAyLCJleHAiOjE2NTEwNDE2MDIsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnt9LCJzaWduX2luX3Byb3ZpZGVyIjoiY3VzdG9tIn19.eh2MfCY-IqYWEPDUu2zLOWyEmVI-JJtkYfjZyjs59PceePXkaGubIq4M7oXXO7mX9D9LlQG3X2Vv5TQ_Dzeb_3mhfKc-rKCqleVTHzp7NuTHzkQZb1xoEVGkVGwImt39rfWuRS4DpVH86G-zlOVHWRt0h_JCxi_hTtvKXpmwp5gBS1u6YR1LDd9ZKhRiMCUp9VjyeDMM0qzcSPtuNalZpKmUM12RIeTYDafPm5fBjOkcRSoeWNFkvuuwCfmXi0NTBs2CPAxQx9RRCdLIbw8d03AJ0JBlYpIQiyDFCIMpSGsyHYUeQxQh_2rO-PUJqkss_TOVpDQFgCbhR09U-Pt3hQ';
    // const { token } = useGlobalContext();

    if (token) {
        return (
            // <div className="main">
            //     <div className="content">
                    <MainLayout>
                        <Outlet />
                    </MainLayout>
            //     </div>
            // </div>
        );
    }

    useEffect(() => {
        if (!token && !WEAVIT_LOGIN_APP.includes('localhost')) {
            window.location.href = WEAVIT_LOGIN_APP;
        }
    }, [token]);
    return <React.Fragment />;
};
