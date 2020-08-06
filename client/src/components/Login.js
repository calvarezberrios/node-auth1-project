import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import axiosWithAuth from '../utils/axiosWithAuth';

const initialValues = {
    username: "",
    password: ""
}

const Login = props => {
    const [values, setValues] = useState(initialValues);

    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    }

    const postLogin = async e => {
        e.preventDefault();

        if(values.username && values.password) {
            axiosWithAuth()
                .post("/auth/login", values)
                .then(res => {
                    console.log(res.data);
                    props.history.push("/users");
                })
                .catch(err => console.log(err.response.data.message));
        }
    }

    return (
        <form onSubmit = {postLogin}>
            <div className="input-group">
                <label htmlFor="username">Username:</label>
                <input id="username" type="text" name="username" value = {values.username} onChange = {handleChange} placeholder="Enter Username" />
            </div>

            <div className="input-group">
                <label htmlFor="password">Password:</label>
                <input id="password" type="password" name="password" value = {values.password} onChange = {handleChange} placeholder="Enter Password" />
            </div>

            <button type="submit">LOGIN</button>
            <br />
            <Link to = "/register">Don't have an account? Click Here!</Link>
        </form>
    );
};

export default Login;