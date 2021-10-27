import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './GlobalStyle';
import client from './client';
import { ApolloProvider } from '@apollo/client';
import App from './App';

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyle />
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
