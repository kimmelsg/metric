import board from './board';

const query = `
  type Query {
    # Get cards and other data for a stat board
    board(slug: String!): Board

    #go back and forth in time for charts
    data(input: CardDataInput): CardData
  }
`;

const schemaDefinition = `
  schema {
    query: Query
  }
`;

export default [schemaDefinition, query, board];
