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
        'eyJhbGciOiJSUzI1NiIsImtpZCI6ImJlYmYxMDBlYWRkYTMzMmVjOGZlYTU3ZjliNWJjM2E2YWIyOWY1NTUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vd2Vhdml0LWludGVncmF0aW9uLTEiLCJhdWQiOiJ3ZWF2aXQtaW50ZWdyYXRpb24tMSIsImF1dGhfdGltZSI6MTY1MjA3MDgyOCwidXNlcl9pZCI6Imdvb2dsZToxMTM1MzU5NjIyMzQxOTA5NjEzNDAiLCJzdWIiOiJnb29nbGU6MTEzNTM1OTYyMjM0MTkwOTYxMzQwIiwiaWF0IjoxNjUyMjYxOTUwLCJleHAiOjE2NTIyNjU1NTAsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnt9LCJzaWduX2luX3Byb3ZpZGVyIjoiY3VzdG9tIn19.Tk3JJ53drGVxMo7TmkBLK2dolYGbaEMwxJxAAqTvvWQXWLNVCYdRHpkgeW2T9oqLRHxCF7HKhlH-sIOQWGKe9iB0JjZDs0cO4Bfb_YufkrJel4VpKVJjVlnArpxBDX7RNpJN-5gvz_NjY-W-CCQ7YaomSafol-t3jBtaZKfwVobmMh9vrOhYrKo1TdmV8d9pHv-U9c3T4G-Vaxnqs5K82XYUwGsrLhz16Gx9vn0ztb-0wQNsSRnw9JtuqO5ccTKj0s0ztDl3cPjIOBB__lXcZuCyfS4B4yP_YbCgHlXPdeDTqHPzN7K-DOFU0PlXs0dfgMz5aySjWCeF1pq2bglc7g';
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
