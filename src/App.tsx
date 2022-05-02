import React from 'react';
import cookies from 'js-cookie';
import fetch from 'cross-fetch';
import { Routes, Route , Navigator} from 'react-router-dom';
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
import Home from './components/pages/Home';

const httpLink = createHttpLink({
    uri: API_BASE_URL,
    fetch,
});
console.log("API_BASE_URL",API_BASE_URL);


const authLink = setContext((_, { headers }) => {
    // const token = cookies.get('access_token_weavit');
    const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImVmMzAxNjFhOWMyZGI3ODA5ZjQ1MTNiYjRlZDA4NzNmNDczMmY3MjEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vd2Vhdml0LWludGVncmF0aW9uLTEiLCJhdWQiOiJ3ZWF2aXQtaW50ZWdyYXRpb24tMSIsImF1dGhfdGltZSI6MTY1MTQ2Nzk4NiwidXNlcl9pZCI6Imdvb2dsZToxMTM1MzU5NjIyMzQxOTA5NjEzNDAiLCJzdWIiOiJnb29nbGU6MTEzNTM1OTYyMjM0MTkwOTYxMzQwIiwiaWF0IjoxNjUxNDY3OTg2LCJleHAiOjE2NTE0NzE1ODYsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnt9LCJzaWduX2luX3Byb3ZpZGVyIjoiY3VzdG9tIn19.OdjWcHkfj1x_h3ZWXXETo31Qqei_Kzq80R0CLXKkZTkmkiJl6XeDa4TSiosoFHK7IKAYl3PDd4irX94uJob2Ny1zgOdTNj_6HI_GPYMXbeZdNbh0dpfBHS_lZu90Pn34l3eiEVEZjLf3Ux6iU3o39MJnRhiSrdFVmmxwBj_NOJGZ46r-LGCmTPt1f4JGorPnhuFNdmEMXJcP5AAheLYakseneLj505UA74R_WbJ7N9bmvzUwgMrTv3YN8GYGnGZmxv5ii3HqcXTJ5kWoSrna0jHtWcsBcAHQJUSBdhBzW0P4sgvxAqx1I_kizQEgy6DWG7lc68iNRe_bvHDyvpjM_g';
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
                                    {/* <Route path="/" element={<Dashboard />} /> */}
                                    <Route path="/" element={<Home />} />
                                    {/* <Route path="/comp" element={<Home />} /> */}
                            </Route>
                        </Routes>
                    </GlobalProvider>
                </CookiesProvider>
            </ApolloProvider>
        </ThemeProvider>
    );
}

export default App;
