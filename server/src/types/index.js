import board from './board';

const query = `
  type Query {
    # Get cards and other data for a stat board
    board(slug: String!): Board

    #get chart data, go back and forth in time
    data(input: CardDataInput): CardData
  }

  type Subscription {
    #subscribe to a stat and be notified of any new data coming in
    newData(stat_id: Int!): CardData
  }
`;

const schemaDefinition = `
  schema {
    query: Query
    subscription: Subscription
  }
`;

export default [schemaDefinition, query, board];
