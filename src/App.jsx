import { BrowserRouter as Router } from "react-router-dom";
import { AnimatedRoutes, Footer, Header, Settings } from "./components";
import { useEffect, useState } from "react";
import { Triangle } from "react-loader-spinner";
import palestine from "./images/Animated-Flag-Palestine.gif";

export default function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

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
            <AnimatedRoutes />
          <Footer />
          <img src={palestine} className="palestine" alt="free palestine💟"/>
        </>
      )}
    </Router>
  );
}
