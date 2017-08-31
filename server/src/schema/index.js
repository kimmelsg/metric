import typeDefs from '../types';
import resolvers from '../resolvers';
import tools from 'graphql-tools';

export default tools.makeExecutableSchema({
  typeDefs,
  resolvers,
});
