import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { FeedPage, SignPage, SignUpPage } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/feed" element={<FeedPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
