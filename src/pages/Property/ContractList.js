import React from 'react';
import styled from 'styled-components';
import MaterialTale from 'material-table';
import { useMutation } from 'react-apollo';
import { CREATE_CONTRACT, UPDATE_CONTRACT, DELETE_CONTRACT } from './queries';
import PaymentList from './PaymentList';

const ContractList = props => {
    const contracts = props.contracts;
    const [CreateContract] = useMutation(CREATE_CONTRACT);
    const [UpdateContract] = useMutation(UPDATE_CONTRACT);
    const [DeleteContract] = useMutation(DELETE_CONTRACT);

    return (
        <ListContainer>
            <MaterialTale
                title="Add a contract record"
                data={contracts}
                columns={[
                    {
                        title: 'Tenant Name',
                        field: 'tenant_name',
                        editComponent: props => (
                            <input
                                type="text"
                                value={props.value}
                                onChange={e => props.onChange(e.target.value)}
                            />
                        ),
                    },
                    {
                        title: 'Tenant Phone',
                        field: 'tenant_phone',
                        editComponent: props => (
                            <input
                                type="text"
                                value={props.value}
                                onChange={e => props.onChange(e.target.value)}
                            />
                        ),
                    },
                    {
                        title: 'Tenant Email',
                        field: 'tenant_email',
                        editComponent: props => (
                            <input
                                type="text"
                                value={props.value}
                                onChange={e => props.onChange(e.target.value)}
                            />
                        ),
                    },
                    {
                        title: 'Start Date',
                        field: 'starting_date',
                        editComponent: props => (
                            <input
                                type="date"
                                value={props.value}
                                onChange={e => props.onChange(e.target.value)}
                            />
                        ),
                    },
                    {
                        title: 'End Date',
                        field: 'ending_date',
                        editComponent: props => (
                            <input
                                type="date"
                                value={props.value}
                                onChange={e => props.onChange(e.target.value)}
                            />
                        ),
                    },
                    {
                        title: 'Payment Amount',
                        field: 'pay_amount',
                        editComponent: props => (
                            <input
                                type="text"
                                value={props.value}
                                onChange={e => props.onChange(e.target.value)}
                            />
                        ),
                    },
                    {
                        title: 'Payment Frequency',
                        field: 'pay_frequency',
                        editComponent: props => (
                            <input
                                type="text"
                                value={props.value}
                                onChange={e => props.onChange(e.target.value)}
                            />
                        ),
                    },
                ]}
                editable={{
                    onRowAdd: async newData => {
                        await CreateContract({
                            variables: {
                                id: props.id,
                                tenant_name: newData.tenant_name,
                                tenant_email: newData.tenant_email,
                                tenant_phone: newData.tenant_phone,
                                starting_date: newData.starting_date,
                                ending_date: newData.ending_date,
                                pay_frequency: newData.pay_frequency,
                                pay_amount: newData.pay_amount
                            },
                        });
                        props.refetch();
                    },
                    onRowUpdate: async (newData, oldData) => {
                        await UpdateContract({
                            variables: {
                                id: oldData.id,
                                tenant_name: newData.tenant_name,
                                tenant_email: newData.tenant_email,
                                tenant_phone: newData.tenant_phone,
                                starting_date: newData.starting_date,
                                ending_date: newData.ending_date,
                                pay_frequency: newData.pay_frequency,
                                pay_amount: newData.pay_amount
                            },
                        });
                        props.refetch();
                    },
                    onRowDelete: async oldData => {
                        await DeleteContract({
                            variables: {
                                id: oldData.id,
                            },
                        });
                        props.refetch();
                    },
                }}
                detailPanel={[
                    {
                        tooltip: 'Show Payments',
                        isFreeAction: true,
                        render: rowData => {
                            return <PaymentList refetch={props.refetch} payments={rowData.payments} contract_id={rowData.id} />;
                        },
                    },
                ]}
                options={{
                    cellStyle: {
                        fontSize: '0.9rem',
                    },
                    headerStyle: {
                        fontSize: '1.1rem',
                        backgroundColor: '#3d67e3',
                        color: '#FFF',
                    },
                    rowStyle: {
                        backgroundColor: '#EEE',
                    },
                    emptyRowsWhenPaging: false,
                    toolbarButtonAlignment: 'left',
                }}
            />
        </ListContainer>
    )
}

export default ContractList;

const ListContainer = styled.div`
    width: 75%;
`;