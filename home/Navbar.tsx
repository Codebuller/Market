import styles from './Navbar.module.css'
import { Inter } from 'next/font/google'
import { NextPage } from 'next'
import React from 'react'
import Link from 'next/link'
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { redirect } from 'next/dist/server/api-utils'
import { useRouter } from 'next/router'
const { Header, Content, Sider } = Layout;

const Navbar: NextPage = () => {
    
const items1: MenuProps['items'] = ['/','store', 'user', 'basket'].map((key) => (
  {
    key,
    label: key!=='/' ? `${key.toUpperCase()}` :'MAIN' ,
   
  }));
  const {push}  =useRouter();

    return (
        <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} onClick={({  key}) => {push(`${key}`)}} items={items1} />
        </Header>
      
      </Layout>
    )
}

export default Navbar;    