import { gql, graphql } from 'react-apollo';

export default graphql(
  gql`
    query Board($slug: String!) {
      board(slug: $slug) {
        name
        cards {
          id
          name
          type
          gridArea
          data {
            id
            date
            value
            chart {
              x
              y
            }
          }
        }
      }
    }
  `,
  { options: props => ({ variables: { slug: props.match.params.board } }) }
);
