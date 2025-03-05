import { lazy } from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./Pages/Menu";
import Project from "./Pages/Project";
import About from "./Pages/About";
const Home = lazy(() => import("./Pages/Home"));
const Loding = lazy(() => import("./Pages/Loding"));
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      <Router>
        <div className="d-flex flex-column min-vh-100 h-100 wrapper">
          <main className="flex-grow-1">
          {isLoading ? <Loding /> : 
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/projects" element={<Project />} />
              <Route path="/about" element={<About />} />
              {/* Main pages  */}
            </Routes>
          } 
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;
