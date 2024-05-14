import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Row, Image, Col, Button } from 'antd'
import axios from 'axios'

const CakeDetails = () => {
    var param = useParams()
    var [cake,setCake] = useState();
    useEffect(()=>{
        getCakeList()
    },[])
    function getCakeList() {
        axios({
            url:"http://apibyauw.eu-4.evennode.com/api" + "/cake/"+param.cakeid,
            method: "get",
        }).then((response)=>{
            console.log(response);
            setCake(response.data.data)
        },(error)=>{})
    }

    var cartcake = {
        cakeid : cake?.cakeid , 
        name : cake?.name , 
        price : cake?.price , 
        image : cake?.image , 
        weight : cake?.weight
    }

    function addToCart(cake) {
        if(!localStorage.token){
            alert("You have not logged in, please login")
            return;
        }
        axios({
            url: "http://apibyauw.eu-4.evennode.com/api"+"/addcaketocart", 
            method: "post",
            data: cartcake,
            headers: {
                Authorization: localStorage.token
            }
        }).then((respone) => {
            alert("cake added");
            }, (error) => {
            alert("cake not added")
        })
    }
    return (
        <div>
            <Row>
                <Col>
                    <Image width="400px" height="400px" style={{ margin: 20, padding: 20 }} src={cake?.image} />
                </Col>
                <Col>
                    <div style={{ marginLeft: 70 }}>
                        <h1 >Cake Details</h1>
                        <h3 >Name: {cake?.name}</h3>
                        <h3 >Description: {cake?.description}</h3>
                        <h3 >Price:{cake?.price}</h3>
                        {cake?.rating &&<h3 >Rating:{cake?.rating}</h3>}
                        <Button onClick={addToCart} type="primary">Add To Cart</Button>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default CakeDetails