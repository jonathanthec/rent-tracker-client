import React from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import { useQuery } from 'react-apollo';
import { GET_PROPERTIES } from './queries';
import PropertyList from './PropertyList';
import Bridge from './assets/Bridge.jpeg';

const Dashboard = () => {
    const { data } = useQuery(GET_PROPERTIES);
    return (
        <EverythingContainer>
            <Navbar />
            <ContentContainer>
                <WelcomeContainer>
                    <h1 style={{ marginBottom: "-5px" }}>Welcome to Rent Tracker!</h1>
                    <p style={{ marginBottom: "-10px" }}>You can use Rent Tracker to keep track of your rental records.</p>
                    <p>Click the button below to add your properties!</p>
                    <Button>Add New Property</Button>
                </WelcomeContainer>
                {data ? (
                    <PropertyList
                        properties={data}
                    />
                ) : (
                        <p>Loading</p>
                    )}
            </ContentContainer>
        </EverythingContainer>
    )
}

export default Dashboard;

const EverythingContainer = styled.div`
    background-image: url(${Bridge});
    background-size: cover;
`;

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
    background-color: white;
    font-family: Arial, Helvetica, sans-serif;
    border-radius: 5px;
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