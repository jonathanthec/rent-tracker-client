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
                id
                tenant_name
                starting_date
                ending_date
                tenant_phone
                tenant_email
                pay_amount
                pay_frequency
                payments {
                    id
                    for_dates
                    amount_due
                    amount_paid
                }
            }
        }
    }
`

export const CREATE_CONTRACT = gql`
  mutation CreateContract(
    $id: ID!
    $tenant_name: String!
    $tenant_email: String!
    $tenant_phone: String!
    $starting_date: String!
    $ending_date: String!
    $pay_frequency: String!
    $pay_amount: String!
  ) {
    createContract(
        id: $id
        tenant_name: $tenant_name
        tenant_email: $tenant_email
        tenant_phone: $tenant_phone
        starting_date: $starting_date
        ending_date: $ending_date
        pay_frequency: $pay_frequency
        pay_amount: $pay_amount
    ) {
      id
    }
  }
`;

export const UPDATE_CONTRACT = gql`
  mutation UpdateContract(
    $id: ID!
    $tenant_name: String
    $tenant_email: String
    $tenant_phone: String
    $starting_date: String
    $ending_date: String
    $pay_frequency: String
    $pay_amount: String
  ) {
    editContract(
        id: $id
        tenant_name: $tenant_name
        tenant_email: $tenant_email
        tenant_phone: $tenant_phone
        starting_date: $starting_date
        ending_date: $ending_date
        pay_frequency: $pay_frequency
        pay_amount: $pay_amount
    ) {
      id
    }
  }
`;

export const DELETE_CONTRACT = gql`
  mutation DeleteContract(
    $id: ID!
  ) {
    deleteContract(
        id: $id
    ) {
      id
    }
  }
`;

export const CREATE_PAYMENT = gql`
  mutation CreatePayment(
    $id: ID!
    $for_dates: String!
    $amount_due: String!
    $amount_paid: String!
  ) {
    createPayment(
        id: $id
        for_dates: $for_dates
        amount_due: $amount_due
        amount_paid: $amount_paid
    ) {
      id
    }
  }
`;

export const UPDATE_PAYMENT = gql`
  mutation UpdatePayment(
    $id: ID!
    $for_dates: String
    $amount_due: String
    $amount_paid: String
  ) {
    editPayment(
        id: $id
        for_dates: $for_dates
        amount_due: $amount_due
        amount_paid: $amount_paid
    ) {
      id
    }
  }
`;

export const DELETE_PAYMENT = gql`
  mutation DeletePayment(
    $id: ID!
  ) {
    deletePayment(
        id: $id
    ) {
      id
    }
  }
`;