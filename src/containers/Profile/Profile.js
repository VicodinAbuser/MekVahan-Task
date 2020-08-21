import React, { useState } from 'react';
import { Card, Layout, Menu, Avatar, Popover, Button } from 'antd';
import {  UserOutlined } from '@ant-design/icons';
import './Profile.css';

const { Header, Sider, Content } = Layout;

function Profile() {

    const [ addresses, setAddresses ] = useState([]);
    const [ address, setAddress ] = useState({
        title: '',
        address: ''
    });

    const text = (<input onChange={handleTitleChange} value={address.title} style={{width:'265px'}} type='text' placeholder='Title : Eg - Home or Office'></input>);
    const content = (
      <div >
        <textarea onChange={handleAddressChange} value={address.address} placeholder='Address' rows='6' cols='38'>{address.address}</textarea>
        <button onClick={submitAddress} style={{marginTop: '10px',marginRight: '5px', float:'right'}}>Add</button>
      </div>
    );

    const buttonWidth = 170;

    const addressCards = addresses.map((address, idx) => {
        return(
            <Card className='mh4' key={idx} title={address.title} style={{ overflowWrap: 'break-word', fontSize: '0.9rem', width: 370 }}>
              <p className='mb4' >{address.address}</p>
              <a className="f6 link dim br2 ph3 w-40 pv1 mb2 mr2 dib white bg-red b" href="#0" style={{textAlign: 'center'}}>Edit</a>
              <a className="f6 link dim br2 ph3 w-40 pv1 mb2 mr2 ml2 dib white bg-light-gray b" href="#0" style={{textAlign: 'center'}}>Delete</a>
            </Card>
        )
    })

    function handleTitleChange(event) {
        const newTitle = event.target.value;
        setAddress(prevAdd => {
            return({
                ...prevAdd,
                title: newTitle
            })
        })
    }

    function handleAddressChange(event) {
        const newAdd = event.target.value;
        setAddress(prevAdd => {
            return({
                ...prevAdd,
                address: newAdd
            })
        })
    }

    function submitAddress() {
        setAddresses(prevAddArray => {
            return([
                ...prevAddArray,
                address
            ])
        })
        setAddress({
            title: '',
            address: ''
        })
    }

    return (
      <Layout>
        <Sider style={{maxWidth: '300px', width: '300px', backgroundColor: '#EEEEEE'}} trigger={null} >
          <div className="logo" />
          <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item className=' profile-avatar' key="1">
            <div>
            <Avatar className='fl avatar' size={64} icon={<UserOutlined />} />
              <div><p className='mv0' style={{fontWeight: 'bold', height: '20px'}}>Hi</p>

              <p className='mv0' style={{fontWeight: 'bold', height: '20px'}}>Mekvahan!</p></div>
            </div>
            </Menu.Item>

            <Menu.Item className='' style={{fontWeight: 'bold'}} key="2">
              My Profile
            </Menu.Item>

            <Menu.Item className='' style={{fontWeight: 'bold', color: 'red'}}key="3">
              Manage Address
            </Menu.Item>

            <Menu.Item className='pb2' key="4">
              Change Password
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout  className="site-layout">
          <Header className="site-layout-background" style={{ backgroundColor: 'white', padding: 0 }}>
            <span className='fl mh3 b black'>My Adresses</span>
            <div className="demo fr mh3 black">
                <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
                  <Popover placement="bottomRight" title={text} content={content} trigger="click">
                    <Button>+ Add Address</Button>
                  </Popover>
                </div>
            </div>
          </Header>
          <Content
            className={(addresses.length !== 0) ? 'site-layout-background' : "site-layout-background main-content"}
            style={{
              margin: '24px 16px',
              padding: 24,
              height: '640px',
              display: 'flex',
              flexWrap: 'wrap',
              flexBasis: 'content',
              justifyContent: 'center',
              backgroundColor: 'white'
            }}
          >
          {addresses.length > 0 &&
              addressCards
          }
          </Content>
        </Layout>
      </Layout>
    );
  }


export default Profile;
