import gql from 'graphql-tag';

export const GET_PROPERTIES = gql`
  query GetProperties {
    getProperties {
      id
      address
      city
      state
      zip
    }
  }
`;