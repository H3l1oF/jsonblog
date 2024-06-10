import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Add from "./Add";
import View from "./View";

function routes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<Add />} />
      <Route path="/view" element={<View />} />
    </Routes>
  );
}

export default routes;
