import React, { useState } from 'react'
import Datatable from './Datatable';
import {users} from './data';
import axios from 'axios';

const SignUp = () => {
    var details = {
        email: "",
        password: ""
    }
    var [allDetails,setAllDetails] = useState([{}])
    function displayDetails() {
        setAllDetails([...allDetails,details])
    }
    function saveEmail(event){
        details.email = event.target.value;
    }
    function savePass(event){
        details.password = event.target.value;
    }
    function deleteUser(index){
        allDetails.splice(index,1)
        setAllDetails([...allDetails])
    }
    function createAccount() {
        console.log("User Details", users)
        axios({
            url:"http://apibyauw.eu-4.evennode.com/api"+"/register",
            method:"post",
            data:users
        }).then((response)=> {
            console.log("Response from register api", response)
        },(error)=>{
            console.log("Error from register api is", error)
        })
    }
  return (
    <div>
        <h1>Create An Account</h1>
        <input placeholder='Enter the username' /> 
        <input onChange={savePass} placeholder='Enter the password'/>
        <input onChange={saveEmail} placeholder='Enter the email'/>
        <button onClick={createAccount}>SignUp</button> 
        <Datatable data={users} deleteUser={deleteUser}/>
    </div>
  )
}

export default SignUp