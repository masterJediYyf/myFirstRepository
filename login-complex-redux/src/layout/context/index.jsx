import React from 'react';
import './index.less';
import { Layout } from 'antd';
// import DocumentTitle from 'react-document-title';
import { useTitle } from 'ahooks';
const { Content } = Layout;

const LayoutContent = () => {
  useTitle("后台首页");
  return (
    <Content style={{height: "calc(100% - 100px)"}} >
        1111
    </Content>
  )
};

export default LayoutContent;