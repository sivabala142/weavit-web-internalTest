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
import './App.css';
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
        'eyJhbGciOiJSUzI1NiIsImtpZCI6ImJlYmYxMDBlYWRkYTMzMmVjOGZlYTU3ZjliNWJjM2E2YWIyOWY1NTUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vd2Vhdml0LWludGVncmF0aW9uLTEiLCJhdWQiOiJ3ZWF2aXQtaW50ZWdyYXRpb24tMSIsImF1dGhfdGltZSI6MTY1MjA3MDgyOCwidXNlcl9pZCI6Imdvb2dsZToxMTM1MzU5NjIyMzQxOTA5NjEzNDAiLCJzdWIiOiJnb29nbGU6MTEzNTM1OTYyMjM0MTkwOTYxMzQwIiwiaWF0IjoxNjUyMzMwODEyLCJleHAiOjE2NTIzMzQ0MTIsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnt9LCJzaWduX2luX3Byb3ZpZGVyIjoiY3VzdG9tIn19.LPJM2iqPkfKd1LqJN4C5gahY-1szpUeHLwUBozcxued6rQb6d-f8AmiCw_x2uYN5mZLBXzmaDEd51C-ywaWBYL0ghqh1F3c_Vw_7RphwkBKz-Q9bzPUBB7lbkKIOHRA8N2ZlWkNl1It0FLAoX1b8jMk8gQKBVL6a7UNEk2iDrtVaGOZHCcs2HNNE_lLS2H8lNX1Ht0jYILqHjMntpZRRq38hPPMOW5o9-UgKYWQaQouQERmvlL3aEoWq9-H84CO4ODBYXvkgA2-MkLBzBjZSbwI4aN5nBrBl1yne5kQfp_mCAVHNyVOW174m-i_U4tsil9IYRvwb8H6LtD-6JvDalw';
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
