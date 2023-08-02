import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, About, Portfolio, Contact } from "./pages";
import { Footer, Header } from "./components";
import { useEffect, useState } from "react";
import { getPath } from "./components/Header/Header";

export default function App() {
  const currentPath = window.location.pathname;
  const [path, setPath] = useState(currentPath);

  useEffect(() => {
    setPath(getPath());
    console.log("Changed")
  }, [currentPath]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {!path === "/" ? <Footer /> : null}
    </Router>
  );
}
