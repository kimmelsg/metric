import { gql, graphql } from 'react-apollo';

export default graphql(
  gql`
    query stats($boardId: Int!) {
      stats(boardId: $boardId) {
        title
        type
        style {
          gridArea
        }
      }
    }
  `,
  { options: props => ({ variables: { boardId: 1 } }) }
);
