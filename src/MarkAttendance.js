import { Button, Input, Table } from 'antd'
import React, { useState } from 'react'

const MarkAttendance = () => {
    var value="";
    var [input,setInput] = useState([])
    function updateInput(){
        input.push(value)
        input = [...input]
        setInput(input)
    }
    function getInput(event){
        value=event.target.value;
    }
  return (
    <div>
        <Input placeholder='please enter the value' onChange={getInput}></Input>
        <Button onClick={updateInput} >Submit</Button>
        <Table dataSource={input}/>
    </div>
  )
}

export default MarkAttendance