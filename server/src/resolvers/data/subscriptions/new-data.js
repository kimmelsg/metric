import pubsub from '../../../pubsub';
import Subscriptions from 'graphql-subscriptions';

export default {
  resolve: data => {
    return data;
  },

  subscribe: Subscriptions.withFilter(
    () => pubsub.asyncIterator('newData'),
    (payload, variables) => {
      return payload.stat_id === variables.stat_id;
    }
  ),
};
