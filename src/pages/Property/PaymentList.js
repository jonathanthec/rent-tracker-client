import React from 'react';
import MaterialTale from 'material-table';
import styled from 'styled-components';
import { useMutation } from 'react-apollo';
import { CREATE_PAYMENT, UPDATE_PAYMENT, DELETE_PAYMENT } from './queries';

const PaymentList = props => {
    const payments = props.payments;
    const [CreatePayment] = useMutation(CREATE_PAYMENT);
    const [UpdatePayment] = useMutation(UPDATE_PAYMENT);
    const [DeletePayment] = useMutation(DELETE_PAYMENT);

    return (
        <PaymentsContainer>
            <MaterialTale
                title="Add a Payment Record"
                data={payments}
                columns={[
                    {
                        title: 'This payment is for',
                        field: 'for_dates',
                        editComponent: props => (
                            <input
                                type="text"
                                value={props.value}
                                onChange={e => props.onChange(e.target.value)}
                            />
                        ),
                    },
                    {
                        title: 'Amount due',
                        field: 'amount_due',
                        editComponent: props => (
                            <input
                                type="text"
                                value={props.value}
                                onChange={e => props.onChange(e.target.value)}
                            />
                        ),
                    },
                    {
                        title: 'Amount paid',
                        field: 'amount_paid',
                        editComponent: props => (
                            <input
                                type="text"
                                value={props.value}
                                onChange={e => props.onChange(e.target.value)}
                            />
                        ),
                    }
                ]}
                editable={{
                    onRowAdd: async newData => {
                        await CreatePayment({
                            variables: {
                                id: props.contract_id,
                                for_dates: newData.for_dates,
                                amount_due: newData.amount_due,
                                amount_paid: newData.amount_paid
                            },
                        });
                        props.refetch();
                    },
                    onRowUpdate: async (newData, oldData) => {
                        await UpdatePayment({
                            variables: {
                                id: oldData.id,
                                for_dates: newData.for_dates,
                                amount_due: newData.amount_due,
                                amount_paid: newData.amount_paid
                            },
                        });
                        props.refetch();
                    },
                    onRowDelete: async oldData => {
                        await DeletePayment({
                            variables: {
                                id: oldData.id,
                            },
                        });
                        props.refetch();
                    },
                }}
                options={{
                    search: false,
                    paging: false,
                    cellStyle: {
                        fontSize: '0.8rem',
                    },
                    headerStyle: {
                        fontSize: '0.9rem',
                        backgroundColor: '#4690eb',
                        color: '#FFF',
                    },
                    emptyRowsWhenPaging: false,
                    toolbarButtonAlignment: 'left',
                }}
            />
        </PaymentsContainer>
    )
}

export default PaymentList;

const PaymentsContainer = styled.div`
    margin-left: 10%;
    width: 80%;
`