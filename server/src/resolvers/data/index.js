import dataQuery from './queries/data';
import newDataSubscription from './subscriptions/new-data';

export default {
  Query: {
    data: dataQuery,
  },
  Subscription: {
    newData: newDataSubscription,
  },
};
