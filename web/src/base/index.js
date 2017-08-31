import './app.css';
import App from './app';
import React from 'react';
import { ApolloClient, ApolloProvider } from 'react-apollo';
import { SubscriptionClient } from 'subscriptions-transport-ws';

const client = new SubscriptionClient('ws://localhost:8888/subscriptions', {
  reconnect: true,
});

const apolloClient = new ApolloClient({
  networkInterface: client,
});

export default () => (
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>
);
