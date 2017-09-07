import { gql, graphql } from 'react-apollo';

export default graphql(
  gql`
    query Board($slug: String!) {
      board(slug: $slug) {
        cards {
          title
          type
          style {
            gridArea
          }
        }
      }
    }
  `,
  { options: props => ({ variables: { slug: props.match.params.board } }) }
);
