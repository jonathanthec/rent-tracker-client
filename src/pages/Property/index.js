import React from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-apollo';
import { GET_ONE_PROPERTY } from './queries';
import Navbar from '../../components/Navbar';
import PropertyCard from './PropertyCard';
import ContractList from './ContractList';
import Lake from './assets/Lake.jpeg';

const Property = props => {
    const id = props.match.params.id;
    const { data, refetch } = useQuery(GET_ONE_PROPERTY, {
        variables: {
            id
        }
    })

    const contracts = data?.getOneProperty?.contracts;
    console.log(contracts);

    return (
        <EverythingContainer>
            <Navbar />
            <InfoContainer>
                {data ? <PropertyCard property={data.getOneProperty} /> : <p>Loading...</p>}
                {contracts ? <ContractList id={id} contracts={contracts} refetch={refetch} /> : <p>Loading contracts...</p>}
            </InfoContainer>
        </EverythingContainer>
    )
}

export default Property;

const EverythingContainer = styled.div`
    left: 0;
    top: 0;
    width: 100%;
    height: auto;
    position: fixed;
    min-height: 100%;
    min-width: 1024px;
    background-image: url(${Lake});
`;

const InfoContainer = styled.div`
    width: 96%;
    margin-left: 2%;
    margin-top: 30px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
`