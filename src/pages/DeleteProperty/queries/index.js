import gql from 'graphql-tag';

export const DELETE_PROPERTY = gql`
  mutation DeleteProperty(
    $id: ID!
  ) {
    deleteProperty(
        id: $id
    ) {
      id
    }
  }
`;