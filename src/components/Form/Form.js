import React, { useState } from 'react';
import { Form, Input, Button, Divider } from 'antd';
import { UserOutlined, LockOutlined, FacebookOutlined, GoogleOutlined } from '@ant-design/icons';
import './Form.css';
import logo from '../Login/mekvahanlogo.png';
import { navigate } from '@reach/router';


const NormalLoginForm = () => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  const [ mobile, setMobile ] = useState()

  const [ password, setPassword ] = useState()

  function handleNumberChange(event) {
      const number = event.target.value;
      setMobile(number)
  }

  function handlePasswordChange(event) {
      const password = event.target.value;
      setPassword(password)
  }

  function handleFormSubmit(event) {
      fetch('https://mekvahan.com/api/android_intern_task', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                mobile: mobile,
                password: password
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data.status) {
                navigate('/profile')
            } else {
                navigate('/error')
            }
        })
  }

  return (
    <Form name="normal_login" className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
    <div className='mb3 center'>
    <img alt='logo' src={logo} className='ml5'/>
    <span className='dark-red ml1 custom-absolute b'>MEKVAHAN</span>
    </div>
      <Form.Item
        name="Phone number"
        rules={[
          {
            required: true,
          },
        ]}
        className='mt4'
      >
        <Input onChange={handleNumberChange} value={mobile} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="10 digit mobile number" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input
          onChange={handlePasswordChange}
          value={password}
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <a className="login-form-forgot" href="#">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button onClick={handleFormSubmit} type="danger" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Don't have an account? <a href="#" id='signup'>Sign Up now!</a>
      </Form.Item>
      <Divider plain>Or</Divider>
      <Form.Item>
        <p className='center continue-with'>Continue with</p>
        <a className="login-form-forgot" href="#">
          <FacebookOutlined className='continue-with ml5 pl5' style={{color: 'blue'}}/> <GoogleOutlined className='pl3 continue-with'style={{color: 'red'}} />
        </a>
      </Form.Item>
    </Form>
  );
};

export default NormalLoginForm;
