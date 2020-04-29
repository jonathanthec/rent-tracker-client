import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-apollo';
import { USER_REGISTER } from './queries';

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
        <div>
            <h4>Register</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Username</label>
                <input
                    name="username"
                    ref={register({
                        required: 'You must provide an username'
                    })}
                    placeholder="Username"
                />
                {errors.username && errors.username.message}
                <label>Password</label>
                <input
                    name="password"
                    type="password"
                    ref={register({
                        required: 'You must provide a password'
                    })}
                    placeholder="Password"
                />
                {errors.password && errors.password.message}
                <label>Email</label>
                <input
                    name="email"
                    ref={register({
                        required: 'You must provide an email'
                    })}
                    placeholder="Email"
                />
                {errors.email && errors.email.message}
                <label>User Type</label>
                <input
                    name="usertype"
                    ref={register({
                        required: 'You must provide an usertype'
                    })}
                    placeholder="User type"
                />
                {errors.usertype && errors.usertype.message}
                <label>First Name</label>
                <input
                    name="firstname"
                    ref={register({
                        required: 'You must provide first name'
                    })}
                    placeholder="First name"
                />
                {errors.firstname && errors.firstname.message}
                <label>Last Name</label>
                <input
                    name="lastname"
                    ref={register({
                        required: 'You must provide last name'
                    })}
                    placeholder="Last name"
                />
                {errors.lastname && errors.lastname.message}
                <div>
                    <button type="submit">Submit</button>
                    <Link to="/"><button>Go Back Home</button></Link>
                </div>
            </form>
        </div>
    );
}

export default RegisterPage;