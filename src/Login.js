import { Alert, Button, Input } from 'antd'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    var navigate = useNavigate();
    var [error,setError] = useState(null);
    var email,password;
    function login() {
        console.log(email, password);
        axios({
            url:"http://apibyauw.eu-4.evennode.com/api"+"/login",
            method:"post",
            data:{email,password}
        }).then((response)=> {
            localStorage.token = response.data.token;
            navigate("/cakelist")
        },(error)=>{
            console.log("Error from register api is", error)
        })
    }
    function getEmail(event) {
        email=event.target.value;
    }
    function getPassword(event) {
        password=event.target.value;
    }
    return (
        <div>
            <h1>Login</h1>
            <label>Email:</label>
            <Input id='input-field' placeholder='Enter Email' onChange={getEmail}></Input>
            <label>Password:</label>
            <Input id='input-field' placeholder='Enter Password' onChange={getPassword}></Input>
            <Button type='primary' onClick={login}>Login</Button>
            <Link to='/forgotPass'>ForgotPassword?</Link>
            <div>
                {error && <Alert type='error' message={error}/>}
            </div>
        </div>
    )
}

export default Login