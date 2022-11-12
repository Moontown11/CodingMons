import GlobalStyles from "./GlobalStyles";

import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import { Header } from "./components/Header/Header";

import Home from "./pages/Home/Home";
import AboutPage from "./pages/About/About";
import Map from "./pages/Map/Map";

function App() {
  const location = useLocation();

  useEffect(() => {
     window.scrollTo(0, 0);
     }, [location])

  return (
    <React.Fragment>
    <GlobalStyles />
    <Layout>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </Layout>
    </React.Fragment>
  );
}

export default App;
