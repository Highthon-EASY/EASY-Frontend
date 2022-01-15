import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
<<<<<<< HEAD
import { FeedPage, SignPage, SignUpPage, InterviewPage } from "./components";
=======
import { FeedPage, MapPage, SignPage, SignUpPage } from "./components";
>>>>>>> main

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MapPage />} />
        <Route path="/signin" element={<SignPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/interview" element={<InterviewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
