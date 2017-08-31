import express from 'express';
import schema from './src/schema';
import bodyParser from 'body-parser';
import apollo from 'apollo-server-express';

var app = express();

app.use('/graphql', bodyParser.json(), apollo.graphqlExpress({ schema }));

app.listen(8888);
