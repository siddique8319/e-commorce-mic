import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<ProductList />} />
    </Routes>
  </Router>
);

export default App;
