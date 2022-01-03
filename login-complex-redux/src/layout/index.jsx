import React from 'react';
import Layout from 'antd/lib/layout/layout'; //布局
import Sider from './sider';
import Header from './header';
import Content from './context';
import RightPanel from './rightPanel';

const Index = () => {
  return (
    <Layout style={{minHeight: '100vh'}}> 
      <Sider />
      <Layout>
        <Header />
        <Content />
        <RightPanel /> 
      </Layout>
    </Layout>
  )
}

export default Index;