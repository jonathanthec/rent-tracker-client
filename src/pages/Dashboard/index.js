import React from 'react';
import Navbar from '../../components/Navbar/index';
import styled from 'styled-components';

const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <ContentContainer>
                <h1>Your dashboard goes here!</h1>
            </ContentContainer>
        </div>
    )
}

export default Dashboard;

const ContentContainer = styled.div`
    width: 80%;
    margin-left: 10%;
`