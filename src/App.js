import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import NotFound from "./Pages/NotFound/NotFound";
import Project from "./Pages/Project/Project";
import ProjectDetails from "./Pages/ProjectDetil/ProjectDetil";
import Service from "./Pages/Service/Service";
import ServiceDetails from "./Pages/ServiceDetil/ServiceDetil";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/service" element={<Service />} />
          <Route path="/service/:slug" element={<ServiceDetails />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
