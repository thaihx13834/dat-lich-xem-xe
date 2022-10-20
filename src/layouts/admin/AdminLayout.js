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
      <div className="content-wrap">
        <div className="main">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8 p-r-0 title-margin-right">
                        <div className="page-header">
                            <div className="page-title">
                                <h1>Hello, <span>Welcome Here</span></h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 p-l-0 title-margin-left">
                        <div className="page-header">
                            <div className="page-title">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
                                    <li className="breadcrumb-item active">Home</li>
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
