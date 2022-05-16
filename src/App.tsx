import React from 'react';
import fetch from 'cross-fetch';
import cookies from 'js-cookie';
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
    const token = cookies.get('access_token_weavit');  
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
