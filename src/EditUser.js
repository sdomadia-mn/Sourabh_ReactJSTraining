import React from 'react'
import { useParams } from 'react-router-dom'
import {users} from './data';

const EditUser = () => {
    var params = useParams();
    var userid = params.userid;
    var user = users.filter((each) => {
        return each.id ==  Number.parseInt(userid);
    })[0]
    var keys = Object.keys(user);
    console.log(user);
  return (
    <div>
        <ul>
        {keys.map((each) => {
          return (
           <li>{each} : {user[each]}</li> )
        })}
        </ul>
    </div>
  )
}

export default EditUser