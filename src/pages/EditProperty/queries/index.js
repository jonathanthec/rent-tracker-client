import gql from 'graphql-tag';

export const EDIT_PROPERTY = gql`
  mutation EditProperty(
    $id: ID!
    $address: String
    $city: String
    $state: String
    $zip: String
  ) {
    editProperty(
        id: $id
        address: $address
        city: $city
        state: $state
        zip: $zip
    ) {
      id
    }
  }
`;

export const GET_ONE_PROPERTY = gql`
    query GetOneProperty(
        $id: ID!
    ) {
        getOneProperty(
            id: $id
        ) {
            id
            address
            city
            state
            zip
        }
    }
`