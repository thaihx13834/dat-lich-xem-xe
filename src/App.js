import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import { Route, Routes } from "react-router-dom";
import WebsiteLayout from "./layouts/WebsiteLayout";
import Homepage from "./pages/client/Homepage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<Homepage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
