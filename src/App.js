import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import { Route, Routes } from "react-router-dom";
import WebsiteLayout from "./layouts/WebsiteLayout";
import Homepage from "./pages/client/Homepage";
import Product from "./pages/client/Product";
import ProductDetail from "./pages/client/ProductDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<Homepage />} />
          <Route path="/products" element={<Product />} />
          <Route path="/productsd" element={<ProductDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
