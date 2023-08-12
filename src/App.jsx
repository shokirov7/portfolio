import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
const Home = lazy(() => import("./pages/home/Home"));
import Navbar from "./components/navbar/Navbar";
const Footer = lazy(() => import("./components/footer/Footer"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Suspense fallback="Loading...">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
