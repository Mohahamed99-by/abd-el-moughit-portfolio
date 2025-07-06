import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import PortfolioFromAPI from "./components/PortfolioFromAPI";
import FloatingSocialIcons from "./components/FloatingSocialIcons";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AdvancedStats from "./components/AdvancedStats";
import Hero from "./components/Hero";

function MainPortfolio() {
  useEffect(() => {
    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    // Observe all elements with fade-in or scale-in classes
    const animatedElements = document.querySelectorAll(".fade-in, .scale-in");
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Floating Social Icons */}
      <FloatingSocialIcons />
      
      {/* Navigation Header */}
      <Navbar />

      <Hero />

      {/* About Section */}
      <About />

      {/* Advanced Stats Section */}
      <AdvancedStats />

      {/* Portfolio Section */}
      <PortfolioFromAPI />

      {/* Pricing Section */}
      <Pricing />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<MainPortfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
