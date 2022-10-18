import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import SideBar from "../../components/admin/SideBar";
//css
import "./../../asset/admin/css/lib/owl.theme.default.min.css";
import "./../../asset/admin/css/lib/menubar/sidebar.css";
import "./../../asset/admin/css/lib/bootstrap.min.css";
import "./../../asset/admin/css/lib/helper.css";
import "./../../asset/admin/css/style.css";
//js
const AdminLayout = () => {
  return (
    <Layout>
      <SideBar/>
      <div class="content-wrap">
        <div class="main">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-8 p-r-0 title-margin-right">
                        <div class="page-header">
                            <div class="page-title">
                                <h1>Hello, <span>Welcome Here</span></h1>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 p-l-0 title-margin-left">
                        <div class="page-header">
                            <div class="page-title">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
                                    <li class="breadcrumb-item active">Home</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
         
                <section id="main-content">
                 <Outlet/>
                </section>
            </div>
        </div>
    </div>
     
    </Layout>
  );
};

export default AdminLayout;
