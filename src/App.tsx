import React from 'react';
import cookies from 'js-cookie';
import fetch from 'cross-fetch';
import { Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from './layout';
import { GlobalProvider } from './hooks/GlobalContext';
import { CookiesProvider } from 'react-cookie';
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { API_BASE_URL } from './config';
import { Dashboard } from './screens/Dashboard';

import { ThemeProvider } from '@mui/material/styles';
import './components/styles/App.css';
import { theme } from './components/theme/default';
import DrawerLayout from './components/Layouts/DrawerLayout';

const httpLink = createHttpLink({
    uri: API_BASE_URL,
    fetch,
});
console.log("API_BASE_URL",API_BASE_URL);


const authLink = setContext((_, { headers }) => {
    // const token = cookies.get('access_token_weavit');
    const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImM2NzNkM2M5NDdhZWIxOGI2NGU1OGUzZWRlMzI1NWZiZjU3NTI4NWIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vd2Vhdml0LWludGVncmF0aW9uLTEiLCJhdWQiOiJ3ZWF2aXQtaW50ZWdyYXRpb24tMSIsImF1dGhfdGltZSI6MTY1MTIyMzMwMiwidXNlcl9pZCI6Imdvb2dsZToxMDkzMzk4ODgxOTU5MzU1MjY4NjgiLCJzdWIiOiJnb29nbGU6MTA5MzM5ODg4MTk1OTM1NTI2ODY4IiwiaWF0IjoxNjUxMjIzMzAyLCJleHAiOjE2NTEyMjY5MDIsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnt9LCJzaWduX2luX3Byb3ZpZGVyIjoiY3VzdG9tIn19.A-c-CMwTho_ob-zdKKVyHPARcxm_QJ2vlQqNePq-VwBlDNuK-zzwz-uarZFILbICuxFwe8-1DsP62gYGKvxH2FsdWKR-D0QsqXDLfpfFRqrwg9LQ2wwJudjLNDadLtnOSJM-xPWBNDmu97J4K6AAkDXWZ3_o8c5CvdYt7kyY7XZf7MNoW7tMOWk_rj_PpRb8ftK9r5l7BfoPn7V9kr5zRfOZIqg5RiHgBm4w5MZ5DzSONVtWWTxGvkFAAvvuR4KiU3KDPddKAV8U2rqa0Q36B2YcjvvuvriVlhPF2khxJMKBwI-zZEYH-b2WuQr4MXvcrNBxHzyZiNzpkGkaIkNdNg';
    // return the headers to the context so httpLink can read them
    
    return { 
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <ApolloProvider client={client}>
                <CookiesProvider>
                    <GlobalProvider>
                        <h1>helo</h1>
                        <Routes>
                            <Route path="/" element={<ProtectedRoute />}>
                                <Route element={<DrawerLayout />}>
                                    <Route path="/" element={<Dashboard />} />
                                </Route>
                            </Route>
                        </Routes>
                    </GlobalProvider>
                </CookiesProvider>
            </ApolloProvider>
        </ThemeProvider>
    );
}

export default App;
