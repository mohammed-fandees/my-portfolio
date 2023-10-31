import {AnimatePresence} from 'framer-motion'
import { Home, About, Portfolio, Contact } from "../pages";
import { Routes, Route } from "react-router-dom";
import { useLocation } from 'react-router-dom';

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>      
    </AnimatePresence>
  )
}
