import { gql, graphql } from 'react-apollo';

export const getDataBeforeOrAfter = graphql(
  gql`
    query getData($input: CardDataInput) {
      data(input: $input) {
        id
        date
        value
        chart {
          x
          y
        }
      }
    }
  `
);
