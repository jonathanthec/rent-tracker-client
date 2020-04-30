import gql from 'graphql-tag';

export const GET_ONE_PROPERTY = gql`
    query GetOneProperty(
        $id: ID!
    ) {
        getOneProperty(
            id: $id
        ) {
            address
            city
            state
            zip
            owner {
                firstname
                lastname
            }
            contracts {
                tenant_name
                starting_date
                ending_date
                tenant_phone
                pay_amount
                pay_frequency
                payments {
                    for_dates
                    amount_due
                    amount_paid
                }
            }
        }
    }
`