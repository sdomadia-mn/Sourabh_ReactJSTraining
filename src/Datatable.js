import { Button, Table } from "antd"
import { EditFilled , DeleteFilled } from "@ant-design/icons"
import { useNavigate } from "react-router-dom"
function Datatable({ data , deleteUser }) {

    var users = data
    var totalkeys = []
    var navigate = useNavigate()

    function editUser(index){
        console.log(index);
        navigate("/editUser/"+(Number.parseInt(index)+1));
    }
    users.forEach((each) => {
        var keys = Object.keys(each)
        totalkeys.push(...keys)

    })
    console.log("total keys", totalkeys)
    var uniquekeys = new Set(totalkeys)
    var columns = []
    uniquekeys.forEach((each) => {
        columns.push({
            title: each.toUpperCase(),
            dataIndex: each,
            key: each
        })

    })
    columns.push({
        title: "Action",
        render: (text,record, index) => {
            return  <Button onClick={()=> {editUser(index)}}  type="primary"><EditFilled></EditFilled></Button>
        },
       
    })
    if(deleteUser){
        columns.push({
            title: "Action",
            render: (text,record, index) => {
                return <Button onClick={deleteUser.bind(null,index)} style={{ backgroundColor: "red" }} type="primary"><DeleteFilled></DeleteFilled></Button>
            },
           
        })
    }
   
    return (
        <>
            {/* <h1>Table data</h1> */}
            <Table dataSource={users} columns={columns} />;
        </>
    )
}

export default Datatable