import Home from "./pages/Home";
import About from "./pages/About";
import Counter from "./pages/Counter";
import Input from "./pages/input";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import {Routes, Route, Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <nav>
        <Link to = "/">Home</Link> | <Link to = "/about">About</Link> |{" "}
        <Link to = "/counter">Counter</Link> | <Link to = "/input">Input</Link>

      </nav>
      <Routes>
        <Route path = "/" element={<Home />} />
        <Route path = "/about" element={<About />} />
        <Route path = "/counter" element={<Counter />} />
        <Route path = "/input" element={<Input />} />
      </Routes>
  */}
      <NavBar />
      <Banner />
      {/* <Skills />
      <Projects />
      <Contact />
      <Footer /> */} 
    </div>
  );
}

export default App;
