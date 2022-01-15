import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { SignPage } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
