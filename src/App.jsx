import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, About, Portfolio, Contact } from "./pages";
import { Footer, Header } from "./components";


export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}
