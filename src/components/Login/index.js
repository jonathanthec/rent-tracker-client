import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-apollo';
import { USER_LOGIN } from './queries';
import { Link, useHistory } from 'react-router-dom';

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
    }

    return (
        <div>
            <h4>Log In</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    name="username"
                    ref={register({
                        required: 'You must provide an username'
                    })}
                    placeholder="Username"
                />
                {errors.username && errors.username.message}
                <input
                    name="password"
                    type="password"
                    ref={register({
                        required: 'You must provide a password'
                    })}
                    placeholder="Password"
                />
                {errors.password && errors.password.message}
                <div>
                    <button type="submit">Submit</button>
                    <Link to="/"><button>Go Back Home</button></Link>
                </div>
            </form>
        </div>
    )
}

export default Login;