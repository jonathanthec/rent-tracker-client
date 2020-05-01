import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-apollo';
import { GET_ONE_PROPERTY } from './queries';
import { useMutation } from 'react-apollo';
import { EDIT_PROPERTY } from './queries';
import Navbar from '../../components/Navbar';
import styled from 'styled-components';
import Mountain from './assets/Mountain.jpeg';

function EditProperty(props) {
    const id = props.match.params.id;
    const { register, handleSubmit } = useForm();
    const history = useHistory();

    const [EditProperty, { data }] = useMutation(EDIT_PROPERTY);

    const { data: propertyData } = useQuery(GET_ONE_PROPERTY, {
        variables: {
            id
        }
    })

    const onSubmit = async values => {
        await EditProperty({
            variables: {
                id: id,
                address: values.address,
                city: values.city,
                state: values.state,
                zip: values.zip
            }
        });
    }

    if (data) {
        history.push(`/property/${data.editProperty.id}`);
    }

    return (
        <EverythingContainer>
            <Navbar />
            <h3 style={{ color: 'white' }}>Edit your property!</h3>
            {propertyData ? <form onSubmit={handleSubmit(onSubmit)}>
                <InputContainer>
                    <EntryContainer>
                        <Input
                            name="address"
                            ref={register}
                            defaultValue={propertyData.getOneProperty.address}
                        />
                    </EntryContainer>
                    <EntryContainer>
                        <Input
                            name="city"
                            ref={register}
                            defaultValue={propertyData.getOneProperty.city}
                        />
                    </EntryContainer>
                    <EntryContainer>
                        <Input
                            name="state"
                            ref={register}
                            defaultValue={propertyData.getOneProperty.state}
                        />
                    </EntryContainer>
                    <EntryContainer>
                        <Input
                            name="zip"
                            ref={register}
                            defaultValue={propertyData.getOneProperty.zip}
                        />
                    </EntryContainer>
                </InputContainer>
                <ButtonContainer>
                    <Button type="submit">Finish Editing</Button>
                    <Button><Link to={`/property/${id}`} style={{ textDecoration: 'none', color: 'white' }}>Go Back</Link></Button>
                </ButtonContainer>
            </form> : <p>Loading...</p>}
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

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Input = styled.input`
    width: 250px;
    height: 30px;
    margin-bottom: 10px;
    border-radius: 5px;
`

const EntryContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
`

const Button = styled.button`
    color: white;
    background-color: rgb(41, 172, 41);
    width: 150px;
    height: 35px;
    font-size: medium;
    font-weight: 700;
    margin-bottom: 10px;
`;