import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-apollo';
import { USER_REGISTER } from './queries';
import Navbar from '../../components/Navbar';
import styled from 'styled-components';
import Ocean from './assets/Ocean.jpeg';

function RegisterPage() {
    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();
    const [CreateUser] = useMutation(USER_REGISTER);

    const onSubmit = async values => {
        await CreateUser({
            variables: values
        });
        history.push('/login');
    }

    return (
        <EverythingContainer>
            <Navbar />
            <h3>Sign Up for Rent Tracker!</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputContainer>
                    <EntryContainer>
                        <Input
                            name="username"
                            ref={register({
                                required: 'You must provide an username'
                            })}
                            placeholder="Username"
                        />
                        {errors.username && errors.username.message}
                    </EntryContainer>
                    <EntryContainer>
                        <Input
                            name="password"
                            type="password"
                            ref={register({
                                required: 'You must provide a password'
                            })}
                            placeholder="Password"
                        />
                        {errors.password && errors.password.message}
                    </EntryContainer>
                    <EntryContainer>
                        <Input
                            name="email"
                            ref={register({
                                required: 'You must provide an email'
                            })}
                            placeholder="Email"
                        />
                        {errors.email && errors.email.message}
                    </EntryContainer>
                    <EntryContainer>
                        <Input
                            name="usertype"
                            ref={register({
                                required: 'You must provide an usertype'
                            })}
                            placeholder="User type: User"
                            value="user"
                            disabled
                        />
                        {errors.usertype && errors.usertype.message}
                    </EntryContainer>
                    <EntryContainer>
                        <Input
                            name="firstname"
                            ref={register({
                                required: 'You must provide first name'
                            })}
                            placeholder="First name"
                        />
                        {errors.firstname && errors.firstname.message}
                    </EntryContainer>
                    <EntryContainer>
                        <Input
                            name="lastname"
                            ref={register({
                                required: 'You must provide last name'
                            })}
                            placeholder="Last name"
                        />
                        {errors.lastname && errors.lastname.message}
                    </EntryContainer>
                </InputContainer>
                <ButtonContainer>
                    <Button type="submit">Sign Up</Button>
                    <Button><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Go Back Home</Link></Button>
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
    background-image: url(${Ocean});
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
    border-radius: 5px;
    font-size: medium;
    font-weight: 700;
    margin-bottom: 10px;
`;