import './src/models';
import path from 'path';
import http from 'http';
import gql from 'graphql';
import express from 'express';
import schema from './src/schema';
import webhook from './src/webhook';
import bodyParser from 'body-parser';
import apollo from 'apollo-server-express';
import subscriptions from 'subscriptions-transport-ws';

var app = express();

app.use('/insert/:category/:slug', bodyParser.json(), webhook);
app.use('/graphql', bodyParser.json(), apollo.graphqlExpress({ schema }));
app.use(
  '/graphiql',
  apollo.graphiqlExpress({
    endpointURL: '/graphql',
    subscriptionsEndpoint: `ws://localhost:8888/subscriptions`,
  })
);

app.use(express.static(path.join('../web/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join('../web/build/index.html'));
});

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
