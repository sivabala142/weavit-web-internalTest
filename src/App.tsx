import React from 'react';
import fetch from 'cross-fetch';
import { Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from './layout';
import { GlobalProvider } from './hooks/GlobalContext';
import { CookiesProvider } from 'react-cookie';
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { API_BASE_URL } from './config';
import { ThemeProvider } from '@mui/material/styles';
import './assets/styles/App.css';
import { theme } from './components/theme/default';
import Home from './screens/Home';
import NotFound from './components/NotFound/FindSection';
import Search from './screens/Search';
import About from './screens/About';

const httpLink = createHttpLink({
    uri: API_BASE_URL,
    fetch,
});

const authLink = setContext((_, { headers }) => {
    // const token = cookies.get('access_token_weavit');
    const token =
        'eyJhbGciOiJSUzI1NiIsImtpZCI6ImJlYmYxMDBlYWRkYTMzMmVjOGZlYTU3ZjliNWJjM2E2YWIyOWY1NTUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vd2Vhdml0LWludGVncmF0aW9uLTEiLCJhdWQiOiJ3ZWF2aXQtaW50ZWdyYXRpb24tMSIsImF1dGhfdGltZSI6MTY1MjA3MDgyOCwidXNlcl9pZCI6Imdvb2dsZToxMTM1MzU5NjIyMzQxOTA5NjEzNDAiLCJzdWIiOiJnb29nbGU6MTEzNTM1OTYyMjM0MTkwOTYxMzQwIiwiaWF0IjoxNjUyMTAxMTAyLCJleHAiOjE2NTIxMDQ3MDIsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnt9LCJzaWduX2luX3Byb3ZpZGVyIjoiY3VzdG9tIn19.oY5yrJ7XiLVVs6L-c9voS6dnKjdvBXbVV_o_2oWxh5buN6JeJCCk99tV4JJ8ZcDRBM-w2QuXuekVlASQsTGscFXc3JpfL2UqygEiq_-aduPztkiA0rX9NndI0snv1iezLgbttisvcC8sKSqBwctLgRlCRM-j-90Ks7Ha36WIRHmH0EMpwK3nfJg7dDvz-Qooiw5OBCpF3SuirQGOUodNkNajTNZLCN7z_3v_BjyEYq-ZOWXXvoy6Uc1hgcURJVIkvX1QvMGfaIUWTDzMei2sn5kDHqU1xolmru1mh1mhe8rmUmekq6Df8tPl9JK1xe_K_VHv3Z506AEv4NFaJGz7tg';
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
                        <Routes>
                            <Route path="/" element={<ProtectedRoute />}>
                                <Route path="/" element={<Home />} />
                                <Route path="/search" element={<Search />} />
                                <Route path="/about" element={<About />} />
                                <Route path="*" element={<NotFound />} />
                            </Route>
                        </Routes>
                    </GlobalProvider>
                </CookiesProvider>
            </ApolloProvider>
        </ThemeProvider>
    );
}

export default App;
