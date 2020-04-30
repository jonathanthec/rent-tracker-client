import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-apollo';
import { CREATE_PROPERTY } from './queries';
import Navbar from '../../components/Navbar';
import styled from 'styled-components';
import Mountain from './assets/Mountain.jpeg';

function RegisterPage() {
    const { register, handleSubmit, errors } = useForm();
    const [CreateProperty, { data }] = useMutation(CREATE_PROPERTY);
    const history = useHistory();

    const onSubmit = async values => {
        await CreateProperty({
            variables: {
                address: values.address,
                city: values.city,
                state: values.state,
                zip: values.zip
            }
        });
    }

    if (data) {
        history.push(`/property/${data.createProperty.id}`);
    }

    return (
        <EverythingContainer>
            <Navbar />
            <h3 style={{ color: 'white' }}>Add a property here!</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputContainer>
                    <EntryContainer>
                        <Input
                            name="address"
                            ref={register({
                                required: 'You must provide an address'
                            })}
                            placeholder="Property Address"
                        />
                        {errors.address && errors.address.message}
                    </EntryContainer>
                    <EntryContainer>
                        <Input
                            name="city"
                            ref={register({
                                required: 'You must provide a city'
                            })}
                            placeholder="City"
                        />
                        {errors.city && errors.city.message}
                    </EntryContainer>
                    <EntryContainer>
                        <Input
                            name="state"
                            ref={register({
                                required: 'You must provide state'
                            })}
                            placeholder="State"
                        />
                        {errors.state && errors.state.message}
                    </EntryContainer>
                    <EntryContainer>
                        <Input
                            name="zip"
                            ref={register({
                                required: 'You must provide zip code'
                            })}
                            placeholder="Zip code"
                        />
                        {errors.zip && errors.zip.message}
                    </EntryContainer>
                </InputContainer>
                <ButtonContainer>
                    <Button type="submit">Create Property</Button>
                    <Button><Link to="/dashboard" style={{ textDecoration: 'none', color: 'white' }}>Go Back</Link></Button>
                </ButtonContainer>
            </form>
        </EverythingContainer>
    );
}

export default RegisterPage;

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