import styles from './Navbar.module.css'
import { Inter } from 'next/font/google'
import { NextPage } from 'next'
import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowUpOutlined, LaptopOutlined, NotificationOutlined, ShoppingOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { redirect } from 'next/dist/server/api-utils'
import { useRouter } from 'next/router'
const { Header, Content, Sider } = Layout;
import { Button, Modal } from 'antd';

const Navbar: NextPage = ({visiable, changeVisiable,productsToBuy}) => {
    return (
        
        <Layout className={styles.heder} >
          
        <Header className="header"   >
          <div className="logo" />
          
          <Menu  theme="dark" mode="horizontal" defaultSelectedKeys={['2']}  >
          
            <Menu.Item>
              <Link href='/'>Main</Link>
            </Menu.Item>
            <Menu.Item>
              <Link href='/store'>Store</Link>
            </Menu.Item>
            <Menu.Item>
              <Link href='/user'>User</Link>
            </Menu.Item>
            <Menu.Item  onClick={()=>changeVisiable()}  style={{position:'absolute',right:'4vw'}}>
            <ShoppingOutlined style={{fontSize:'32px'}} />
            </Menu.Item>
             
          </Menu>
          <Modal closable={false} footer={null, null} mask={false} style={{position:'fixed' ,top:'64px' ,right:'0vw'}} title="Корзина" open={visiable}  >
                {productsToBuy.lenght === 0
                ?<p>No items</p>  
                :productsToBuy.map((e)=> <p>{e.id}</p>)
                }
                <ArrowUpOutlined onClick={():void=>{changeVisiable()}} style={{marginLeft:'50%',marginRight:'auto',fontSize:'2vw'}}  />
              </Modal>
        </Header>
      
      </Layout> 
     
    )
}

export default Navbar;    