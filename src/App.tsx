import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./App.css";
import {
  FeedPage,
  MapPage,
  SignPage,
  SignUpPage,
  InterviewPage,
  FeedPost,
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<MapPage />} />
        <Route path="/signin" element={<SignPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/interview" element={<InterviewPage />} />
        <Route path="/feedPost" element={<FeedPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
