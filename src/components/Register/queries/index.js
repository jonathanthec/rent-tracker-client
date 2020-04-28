import gql from 'graphql-tag';

export const USER_REGISTER = gql`
    mutation CreateUser(
        $username: String!
        $password: String!
        $email: String!
        $usertype: String!
        $firstname: String!
        $lastname: String!
    ) {
        createUser(
            username: $username
            password: $password
            email: $email
            usertype: $usertype
            firstname: $firstname
            lastname: $lastname
        ) {
            user {
                username
                email
                usertype
                firstname
                lastname
            }
        }
    }
`