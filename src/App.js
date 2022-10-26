import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/client/Homepage";
import Product from "./pages/client/Product";
import ProductDetail from "./pages/client/ProductDetail";
import Signin from "./pages/client/Signin";
import Signup from "./pages/client/Signup";
import Booking from "./pages/client/Booking";
import AdminLayout from "./layouts/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import Aboutpage from "./pages/client/Aboutpage";
import WebsiteLayout from "./layouts/client/WebsiteLayout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<Homepage />} />
          <Route path="/products" element={<Product />} />
          <Route path="/productsd" element={<ProductDetail />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="about" element={<Aboutpage />} />
        </Route>
        <Route path="admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
