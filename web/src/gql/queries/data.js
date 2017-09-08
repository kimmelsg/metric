import { gql, graphql } from 'react-apollo';

const subscription = gql`
  subscription newData($stat_id: Int!) {
    newData(stat_id: $stat_id) {
      id
      date
      value
      canGoBack
      canGoForward
      chart {
        x
        y
      }
    }
  }
`;

export const getData = graphql(
  gql`
    query getData($input: CardDataInput) {
      data(input: $input) {
        id
        date
        value
        canGoBack
        canGoForward
        chart {
          x
          y
        }
      }
    }
  `,
  {
    options: props => ({
      variables: { input: { stat_id: props.card.stat_id } },
    }),
    props: props => ({
      ...props,
      subscribeToData: stat_id =>
        props.data.subscribeToMore({
          document: subscription,
          variables: {
            stat_id,
          },
          updateQuery: (prev, { subscriptionData: { data } }) => {
            console.log('here in subscribe??', data);
            if (!data || !data.newData) return prev;
            console.log(prev, data);
            return {
              data: data.newData,
            };
          },
        }),
    }),
  }
);
