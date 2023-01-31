import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import GlobalStyles from './styles';
import Pages from './pages';

const client = new ApolloClient({
    uri: 'http://localhost:4000',
    /* Every instance of `ApolloClient` uses an in-memory cache to store and 
    reuse query results so it doesn't have to make as many network requests. */
    cache: new InMemoryCache(),
});

ReactDOM.render(
    /* Use React Context API to make the configured Apollo Client instance 
    available throughout a React component tree. */
    <ApolloProvider client={client}>
        <GlobalStyles />
        <Pages />
    </ApolloProvider>,
    document.getElementById('root')
);
