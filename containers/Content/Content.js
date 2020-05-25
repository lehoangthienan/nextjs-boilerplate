import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd'

import './content.scss'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
}

const Content = () =>(
  <Form
    {...layout}
    name="basic"
    id="basic"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>
    
    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>
    
    <Form.Item {...tailLayout} name="remember">
      <Checkbox>Remember me</Checkbox>
    </Form.Item>
    
    <Form.Item {...tailLayout}>
      <Button type="primary" htmlType="submit">
              Submit
      </Button>
    </Form.Item>
  </Form>
)

export default Content