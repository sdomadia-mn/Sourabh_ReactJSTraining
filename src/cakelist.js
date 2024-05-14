import { Row, Spin } from "antd"
import Cake from "./Cake"
import { useEffect, useState } from "react";
import axios from "axios";
function Cakelist() {
    var [cakes, setCakes] = useState()
    var [loading, setLoading] = useState(true)
    useEffect(() => {
        applyLoader()
        getCakelist()
    }, [])

    function applyLoader(){
        const interval = setInterval(()=>{
            setLoading(false)
        }, 2000)
    }

    function getCakelist() {
        axios({
            url: "http://apibyauw.eu-4.evennode.com/api" + "/allcakes",
            method: "get"
        }).then((response) => {
            console.log("response coming from all cakes api", response.data.data)
            setCakes(response.data.data)  // updating the state
        }, (error) => {
            console.log("Error from all cakes api", error)
        })
    }

    return (
        <>
            <Spin spinning={loading} size="large"/> 
            {(!loading) && <div>
            <h1>The CakeList</h1>
            <Row>
                {
                    cakes?.map((each, index) => {
                        return <Cake data={each}/>
                    })
                }
            </Row>
            </div>}
        </>



    )


}
export default Cakelist