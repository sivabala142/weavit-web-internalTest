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
    const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImM2NzNkM2M5NDdhZWIxOGI2NGU1OGUzZWRlMzI1NWZiZjU3NTI4NWIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vd2Vhdml0LWludGVncmF0aW9uLTEiLCJhdWQiOiJ3ZWF2aXQtaW50ZWdyYXRpb24tMSIsImF1dGhfdGltZSI6MTY1MTI0NzIwNiwidXNlcl9pZCI6Imdvb2dsZToxMTM1MzU5NjIyMzQxOTA5NjEzNDAiLCJzdWIiOiJnb29nbGU6MTEzNTM1OTYyMjM0MTkwOTYxMzQwIiwiaWF0IjoxNjUxMjQ3MjA2LCJleHAiOjE2NTEyNTA4MDYsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnt9LCJzaWduX2luX3Byb3ZpZGVyIjoiY3VzdG9tIn19.FXK-g4dYZ7ribD9XmyTLI2J-X9WeLXhl0trV5CLJFP_5F5YLblCIkPuMrCFHSDyAGmzGZLM84gGwS_soifYsTOLKQ6fGCvLixkR8KFd8RWN_AbMH-XnSzBxd43pUik6dqHfWmHd1_FiPm5Ec_pwXpHBgckFn0xefvhkRiLaDKrCiK7SlVhl0q5JbN2h8iHdex7-LZ7T94VjrPgg5rdqcnEmMVE-2VTqFTqMqXR8Nm2MB5RGCZ56M3N8L5C4VhtnHDRcerTyCDwYahOo02dTuvjwNdoF7LeC1-wy1Vo2QpuMNKQ9WmQu_ZPBh3HJ5NM_sQWQDp9dMlHddlajuFmW3-A';
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
