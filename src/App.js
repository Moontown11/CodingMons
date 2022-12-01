import GlobalStyles from "./GlobalStyles";

import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer";

import Layout from "./components/Layout/Layout";
import { Header } from "./components/Header/Header";

import Home from "./pages/Home/Home";
import Map from "./pages/Map/Map";
import Test from "./pages/Test/test";

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
          <Route path="/map" element={<Map />} />
          <Route path="/test" element={<Test />}/>
        </Routes>
      </Layout>
      <hr />
      <Footer />
    </React.Fragment>
  );
}

export default App;
