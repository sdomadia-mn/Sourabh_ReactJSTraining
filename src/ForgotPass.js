import { Input } from 'antd'
import React from 'react'

const ForgotPass = () => {
  return (
    <div>
        <h1>Forgot Password</h1>
        <p>Enter the email address associated to your account</p>
        <Input placeholder='Email ID' />
    </div>
  )
}

export default ForgotPass