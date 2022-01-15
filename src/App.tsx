import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import {
  FeedPage,
  MapPage,
  SignPage,
  SignUpPage,
  FeedPost,
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MapPage />} />
        <Route path="/signin" element={<SignPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/feedPost" element={<FeedPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
