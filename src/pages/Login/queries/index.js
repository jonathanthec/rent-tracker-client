import gql from 'graphql-tag';

export const USER_LOGIN = gql`
    mutation Login(
        $username: String!
        $password: String!
    ) {
        login(
            username: $username
            password: $password
        ) {
            user {
                id
                username
                usertype
                firstname
                lastname
            }
            token
        }
    }
`