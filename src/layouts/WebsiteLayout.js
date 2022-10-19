import React from "react";
import { Layout } from "antd";
import AppHeader from "../components/AppHeader";
import { Outlet } from "react-router-dom";
const WebsiteLayout = () => {
  const { Header, Content, Footer } = Layout;
  return (
    <Layout>
      <AppHeader />
      <Content className="">
        <Outlet />
      </Content>
      <Footer>This is Footer!</Footer>
    </Layout>
  );
};

export default WebsiteLayout;
