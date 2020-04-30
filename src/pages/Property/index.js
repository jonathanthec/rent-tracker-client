import React from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-apollo';
import { GET_ONE_PROPERTY } from './queries';
import Navbar from '../../components/Navbar';
import Lake from './assets/Lake.jpeg';

const Property = props => {
    const id = props.match.params.id;
    const { data } = useQuery(GET_ONE_PROPERTY, {
        variables: {
            id
        }
    })
    if (data) console.log(data)

    return (
        <EverythingContainer>
            <Navbar />
        </EverythingContainer>
    )
}

export default Property;

const EverythingContainer = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background-image: url(${Lake});
    background-size: cover;
`;