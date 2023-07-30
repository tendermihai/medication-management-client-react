import React from "react";

import Home from "./components/Home/Home";
import Card from "./components/Home/Card";
import Add from "./components/Add/Add";
import Update from "./components/Update/Update";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="add-medication" element={<Add />} />
          <Route path="update-medication/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
