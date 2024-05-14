import { Button } from 'antd'
import React, { useState } from 'react'

const Meeting = () => {
    var [users,setUser] = useState(0)

    function joinMeeting(){
        setUser(++users)
    }
  return (
    <div>
        <Button onClick={joinMeeting} type='primary'>Join Meeting</Button>
        People joined:<h1 id='output'>{users}</h1>
    </div>
  )
}

export default Meeting