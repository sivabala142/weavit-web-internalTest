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
import Home from './components/pages/Home';
import NotFound from './components/NotFound/FindSection';
import Search from './components/pages/Search';
import About from './components/pages/About';

const httpLink = createHttpLink({
    uri: API_BASE_URL,
    fetch,
});

const authLink = setContext((_, { headers }) => {
    // const token = cookies.get('access_token_weavit');
    const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImVmMzAxNjFhOWMyZGI3ODA5ZjQ1MTNiYjRlZDA4NzNmNDczMmY3MjEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vd2Vhdml0LWludGVncmF0aW9uLTEiLCJhdWQiOiJ3ZWF2aXQtaW50ZWdyYXRpb24tMSIsImF1dGhfdGltZSI6MTY1MTcyNjkxMSwidXNlcl9pZCI6Imdvb2dsZToxMTM1MzU5NjIyMzQxOTA5NjEzNDAiLCJzdWIiOiJnb29nbGU6MTEzNTM1OTYyMjM0MTkwOTYxMzQwIiwiaWF0IjoxNjUxNzM4NjUyLCJleHAiOjE2NTE3NDIyNTIsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnt9LCJzaWduX2luX3Byb3ZpZGVyIjoiY3VzdG9tIn19.x1J_aHzM_SJmeQ8KPfgdXknLFE7CHDtG3X-mAue54e3Bpjcf0FvAl2tf73nNjXr3wSylObYym13svHQhhSlUrxOMrKmUCzKv6YtffvnFz3UH5sK8HtEJdhRWWekajjBzq9qiL7Eea5Ymn8aITRyLz3_wTnLWCj_w6B6uOTg6lg_isxkw-01GwpQabRfYOtPSlb-49_meGU-wlKuW63gGAw3acIH_AVFc_v9aGhunxAZIEh7tEK_7TWNeNkT-IUtLEJkGEi3KGP6bMz8-_A2OXs1HPyB0z8ebho8y849e7gCdXZ0Ji4Tgx_CoO9UTgFHEpbNU764JkqjCqAUk9mXk_Q';
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
                                <Route path="/" element={<Home />} />
                                <Route path="/search" element={<Search />} />
                                <Route path="/about" element={<About />} />
                                <Route path='*' element={<NotFound />} />
                            </Route>
                        </Routes>
                    </GlobalProvider>
                </CookiesProvider>
            </ApolloProvider>
        </ThemeProvider>
    );
}

export default App;
