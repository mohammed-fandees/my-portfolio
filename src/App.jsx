import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, About, Portfolio, Contact } from "./pages";
import { Footer, Header, Settings } from "./components";
import { useEffect, useState } from "react";
import { Triangle } from "react-loader-spinner";

export default function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, [window.location]);

  return (
    <Router>
      {loading ? (
       <Triangle
       height="80"
       width="80"
       color="var(--main-color)"
       ariaLabel="triangle-loading"
       visible={true}
     />
      ) : (
        <>
          <Settings />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
}
