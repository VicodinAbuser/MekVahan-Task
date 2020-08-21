import React from 'react';
import { Card } from 'antd';
import NormalLoginForm from '../Form/Form.js';
import carLogin from './car-login.png';
import './Login.css';

function Login () {

    return (
        <article className="br2 ba dark-gray b--black-10 mv4 width  center">
        <Card id='banner' style={{ width: 260 }}>
            <img alt='advertisement' src={carLogin} height='530px'/>
        </Card>
        <Card id='login' className='ph6 mv4' style={{ width: 500 }}>
            <NormalLoginForm />
        </Card>
      </article>
    )
}

export default Login;
