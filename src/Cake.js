import React from 'react'
import { Card, Image } from 'antd'
import { useNavigate } from 'react-router-dom';

function Cake(props) {
    var navigate = useNavigate();
    
    function navigateToDetail(){
        navigate("/cakeDetails/"+props.data.cakeid)
    }

    return (
        <div>
            <Card style={{ width: 300, height: 400, margin: 10 }} onClick={navigateToDetail}>
                <Image  src={props.data.image}></Image>
                <p>{props.data.name}</p>
                <p>{props.data.price}</p>
            </Card>
        </div>
    )
}

export default Cake;