import React from "react";
import { Layout } from "antd";
import AppHeader from "../../components/AppHeader";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
const WebsiteLayout = () => {
  const { Header, Content } = Layout;
  return (
    <Layout>
      <AppHeader />
      <Content className="">
        <Outlet />
      </Content>
      <Footer />
    </Layout>
  );
};

export default WebsiteLayout;
