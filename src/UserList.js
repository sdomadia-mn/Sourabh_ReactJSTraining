import React from 'react'
import { Row ,Card ,Image, Carousel } from 'antd'

const UserList = () => {
    var user = [{
        name: "User_1",
        role: "Role_1",
        salary: 10000
    }, {
        name: "User_2",
        role: "Role_2"
    }, {
        name: "User_3",
        role: "Role_3",
        location: "Hyderabad",
        zip: 1005
    }]
    const contentStyle = {
        height: '100px',
        color: '#fff',
        lineHeight: '100px',
        textAlign: 'center',
        background: '#364d79'
    };
    return (
        <>
            <Carousel autoplay>
                {user.map((eachUser) => {
                    var keys = Object.keys(eachUser);
                    return (
                        <Card style = {{width: 200, height: 400}}>
                            <Image height={150} src="usericon.png"/>
                            {
                                keys.map((eachkey) => {
                                    return <p>{eachUser[eachkey]}</p>
                                })
                            }
                        </Card>
                    )
                })
                }
            </Carousel>
            <h1 style={{ textAlign: "center", padding: "10px" }}>All Users</h1>
        </>
    )
}

export default UserList