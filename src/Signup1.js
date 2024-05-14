import {Button} from 'antd'
import axios from 'axios';
function Signup1(){
    var user = {}
    function changeName(event){
        user.name = event.target.value;
    }
    function changeEmail(event){
        user.email = event.target.value;
    }
    function changePassword(event){
        user.password = event.target.value;
    }
    function createAccount(){
        axios({
            url:"http://apibyauw.eu-4.evennode.com/api"+"/register",
            method:"post",
            data:user
        }).then((response) => {console.log("response = ",response)}, (error) => {console.log("error = ",error)})
    }
    return (<>
    username = <input type="text" onChange={changeName}/>
    Email = <input type="text" placeholder="Email" onChange={changeEmail}/>
    Password = <input type="text" placeholder="Password" onChange={changePassword}/>
    <Button type="primary" onClick={createAccount}>Sign up</Button> 
    </>);
}
export default Signup1;