import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useMutation } from 'react-apollo';
import { DELETE_PROPERTY } from './queries';
import Navbar from '../../components/Navbar';
import styled from 'styled-components';
import Mountain from './assets/Mountain.jpeg';

function EditProperty(props) {
    const id = props.match.params.id;
    const history = useHistory();
    const [DeleteProperty, { data }] = useMutation(DELETE_PROPERTY);

    if (data) {
        history.push("/dashboard");
    }

    const deleteProp = async () => {
        await DeleteProperty({
            variables: {
                id: id,
            }
        })
    }

    return (
        <EverythingContainer>
            <Navbar />
            <h3 style={{ color: 'white' }}>Are you sure to delete this property?</h3>
            <ButtonContainer>
                <Button onClick={deleteProp}>Yes, Delete Property</Button>
                <Button><Link to={`/property/${id}`} style={{ textDecoration: 'none', color: 'white' }}>Go Back</Link></Button>
            </ButtonContainer>
        </EverythingContainer>
    );
}

export default EditProperty;

const EverythingContainer = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background-image: url(${Mountain});
    background-size: cover;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Button = styled.button`
    color: white;
    background-color: rgb(41, 172, 41);
    width: 200px;
    height: 35px;
    font-size: medium;
    font-weight: 700;
    margin-bottom: 10px;
`;