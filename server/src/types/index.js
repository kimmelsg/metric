import stats from './stats';

const query = `
  type Query {
    stats(boardId: Int!): [Stat]
  }
`;

const schemaDefinition = `
  schema {
    query: Query
  }
`;

export default [schemaDefinition, query, stats];
