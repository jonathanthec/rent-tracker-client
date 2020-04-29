import React from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Navbar/index';
import { useQuery } from 'react-apollo';
import { GET_PROPERTIES } from './queries';
import PropertyList from './PropertyList';
import MaterialTable from 'material-table';

const Dashboard = () => {
    const { data, refetch } = useQuery(GET_PROPERTIES);
    if (data) console.log(data.getProperties)
    return (
        <div>
            <Navbar />
            <ContentContainer>
                <WelcomeContainer>
                    <h1 style={{ marginBottom: "-5px" }}>Welcome to Rent Tracker!</h1>
                    <p style={{ marginBottom: "-10px" }}>You can use Rent Tracker to keep track of your rental records.</p>
                    <p>Click the button below to add your properties!</p>
                    <Button>Add New Property</Button>
                </WelcomeContainer>
                {data ? (
                    <MaterialTable
                        title=""
                        data={data.getProperties}
                        columns={[
                            { title: 'Address', field: 'address' },
                            { title: 'City', field: 'city' },
                            { title: 'State', field: 'state' },
                            { title: 'Zip Code', field: 'zip' }
                        ]}
                        options={{
                            cellStyle: {
                                fontSize: '1.4rem',
                            },
                            headerStyle: {
                                fontSize: '1.4rem',
                                backgroundColor: '#4690eb',
                                color: '#FFF',
                            },
                            rowStyle: {
                                backgroundColor: '#EEE',
                            },
                            emptyRowsWhenPaging: false,
                            toolbarButtonAlignment: 'left',
                        }}
                    />
                ) : (
                        <p>Loading</p>
                    )}
            </ContentContainer>
        </div>
    )
}

export default Dashboard;

const ContentContainer = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 15%;
`;

const WelcomeContainer = styled.div`
    width: 100%;
    margin-top: 30px;
    padding: 20px 0 30px 60px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: center;
    text-align: left;
    background-color: #eee;
    font-family: Arial, Helvetica, sans-serif;
`;

const Button = styled.button`
    color: white;
    background-color: #4690eb;
    width: 200px;
    height: 40px;
    border-radius: 5px;
    font-size: medium;
    font-weight: 700;
`;