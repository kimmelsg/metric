import { gql, graphql } from 'react-apollo';

export default graphql(
  gql`
    query Board($slug: String!) {
      board(slug: $slug) {
        name
        cards {
          id
          stat_id
          name
          type
          gridArea
        }
      }
    }
  `,
  {
    options: props => ({ variables: { slug: props.match.params.board } }),
  }
);
