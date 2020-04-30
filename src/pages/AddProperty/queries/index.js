import gql from 'graphql-tag';

export const CREATE_PROPERTY = gql`
  mutation CreateProperty(
    $address: String!
    $city: String!
    $state: String!
    $zip: String!
  ) {
    createProperty(
        address: $address
        city: $city
        state: $state
        zip: $zip
    ) {
      id
    }
  }
`;