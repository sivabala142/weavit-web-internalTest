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
import NotFound from './components/NotFound/FindSection';
import Search from './components/pages/Search';
import About from './components/pages/About';

const httpLink = createHttpLink({
    uri: API_BASE_URL,
    fetch,
});
console.log("API_BASE_URL",API_BASE_URL);


const authLink = setContext((_, { headers }) => {
    // const token = cookies.get('access_token_weavit');
    const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImVmMzAxNjFhOWMyZGI3ODA5ZjQ1MTNiYjRlZDA4NzNmNDczMmY3MjEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vd2Vhdml0LWludGVncmF0aW9uLTEiLCJhdWQiOiJ3ZWF2aXQtaW50ZWdyYXRpb24tMSIsImF1dGhfdGltZSI6MTY1MTQ2Nzk4NiwidXNlcl9pZCI6Imdvb2dsZToxMTM1MzU5NjIyMzQxOTA5NjEzNDAiLCJzdWIiOiJnb29nbGU6MTEzNTM1OTYyMjM0MTkwOTYxMzQwIiwiaWF0IjoxNjUxNDcxNjUyLCJleHAiOjE2NTE0NzUyNTIsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnt9LCJzaWduX2luX3Byb3ZpZGVyIjoiY3VzdG9tIn19.yCBGWA_5UGOT6E6zTUvnmGU9Xq_BzWgBq6rMgWYnJkVIz3DTYjYmReSVt3vcVSGlv5HgFQAoqNzNWP3yJVtGp4tI9ll7_z_o6kIlQYPW56b8kJVCgk-ao8_y4Irf3zc5TqhXg5VFaji35S3vnhTTguK6tJSjo58rp9CYer2DcyFgoZKu-pV5hXEOf31Fx5LZkFApsMbn8J7tDQ_A4BLf8RFtAB1Rj0Ilq-k6ETA7lGSrZzBvOCkpX2qUL2p7WFxBq3CNPOUyR5atDquMwElvh4qK8mRKZ2ujMi_9OYaH0_2oNrquJCn5ycm90doKFFrtdK-tO7KhWgY3G7Q8Izx0AA';
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
