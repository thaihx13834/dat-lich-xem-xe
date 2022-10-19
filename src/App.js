import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Route, Routes } from "react-router-dom";
import WebsiteLayout from "./layouts/WebsiteLayout";
import Homepage from "./pages/client/Homepage";
import AdminLayout from "./layouts/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import Aboutpage from "./pages/client/Aboutpage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<Aboutpage />} />
        </Route>
        <Route path="admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
