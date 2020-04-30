import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-apollo';
import { USER_LOGIN } from './queries';
import { Link, useHistory } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import styled from 'styled-components';
import Ocean from './assets/Ocean.jpeg';

const Login = () => {
    const history = useHistory();
    const { handleSubmit, register, errors } = useForm();
    const [Login, { data }] = useMutation(USER_LOGIN);

    const onSubmit = async values => {
        await Login({
            variables: values
        });
        history.push('/dashboard');
    }

    if (data) {
        localStorage.setItem('token', data.login.token);
        localStorage.setItem('username', data.login.user.username);
    }

    return (
        <EverythingContainer>
            <Navbar />
            <h3>Log In</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputContainer>
                    <Input
                        name="username"
                        ref={register({
                            required: 'You must provide an username'
                        })}
                        placeholder="Username"
                    />
                    {errors.username && errors.username.message}
                    <Input
                        name="password"
                        type="password"
                        ref={register({
                            required: 'You must provide a password'
                        })}
                        placeholder="Password"
                    />
                    {errors.password && errors.password.message}
                </InputContainer>
                <ButtonContainer>
                    <Button type="submit">Submit</Button>
                    <Button><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Go Back Home</Link></Button>
                </ButtonContainer>
            </form>
        </EverythingContainer>
    )
}

export default Login;

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