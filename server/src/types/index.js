import board from './board';

const query = `
  type Query {
    # Get cards and other data for a stat board
    board(slug: String!): Board
  }
`;

const schemaDefinition = `
  schema {
    query: Query
  }
`;

export default [schemaDefinition, query, board];
