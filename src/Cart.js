import { Card, Space, Spin } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
  var [cartCakes, setCartCakes] = useState();
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true);

    useEffect(()=>{
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 2000);

      if(!localStorage.token){
        navigate("/login");
            return;
      } 
      axios({
        url:"http://apibyauw.eu-4.evennode.com/api"+"/cakecart",
        method:"get",
        headers:{
            Authorization:localStorage.token 
        }
    }).then((response) => {
        setCartCakes(response.data.data)
        console.log(response.data);
    }, (error) => {
        console.log("error in cart");
    })
    },[])

  return (
    <>
    <Spin spinning={loading} size="large" />
    <div style={{ display: loading ? 'none' : 'block' }}></div>
    {   
        cartCakes?.map((each) => {
            return(
                <Space direction="horizontal">
                <Card>
                    <Link to={"/detail/"+each.cakeid}><img src={each.image} style={{height:150, width:150}} /></Link>
                    <p>Name : {each.name}</p>
                    <p>Price : {each.price}</p>
                </Card>
                </Space>
            );
        })
    }
    {cartCakes?.length == 0 && <h1>No items in cart</h1>}
    </>
  )
}

export default Cart