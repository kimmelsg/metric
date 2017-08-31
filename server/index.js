import gql from 'graphql';
import express from 'express';
import schema from './src/schema';
import http from 'http';
import bodyParser from 'body-parser';
import apollo from 'apollo-server-express';
import subscriptions from 'subscriptions-transport-ws';

var app = express();

app.use('/graphql', bodyParser.json(), apollo.graphqlExpress({ schema }));
app.use(
  '/graphiql',
  apollo.graphiqlExpress({
    endpointURL: '/graphql',
    subscriptionsEndpoint: `ws://localhost:8888/subscriptions`,
  })
);

const server = http.createServer(app);

subscriptions.SubscriptionServer.create(
  {
    schema,
    execute: gql.execute,
    subscribe: gql.subscribe,
  },
  {
    server,
    path: '/subscriptions',
  }
);

server.listen(8888);
