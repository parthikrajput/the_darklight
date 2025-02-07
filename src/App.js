import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/AboutPage";
import Contact from "./Pages/Contact/ContactPage";
import NotFound from "./Pages/NotFound/NotFound";
import Service from "./Pages/Service/ServicePage";
import UiUxDesigner from "./Pages/UI_UX_Designer/UI_UX_Designer";
import MobileAppDeveloment from "./Pages/Mobile_App_Development/Mobile_App_Develoment";
import WebDevelopment from "./Pages/Web Development/Web_Development";
import CMS from "./Pages/CMS/CMS";
import GraphicDesign from "./Pages/Graphic Design/GraphicDesign";
import DigitalMarketing from "./Pages/Digital Marketing/DigitalMarketing";
import TestingQa from "./Pages/Testing QA/TestingQa";
import AnimationVideo from "./Pages/AnimationVideo/AnimationVideo";
import BrandingIdentity from "./Pages/BrandingIdentity/BrandingIdentity";
import Team from "./Pages/Team/Team";

function App() {
  return (
    <Router>
      <Header />
      <main className="xl:pt-28 xlg:pt-24 pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/service" element={<Service />} />
          <Route path="/service/ui_ux_design" element={<UiUxDesigner />} />
          <Route
            path="/service/mobile_app_development"
            element={<MobileAppDeveloment />}
          />
          <Route path="/service/web_development" element={<WebDevelopment />} />
          <Route path="/service/cms" element={<CMS />} />
          <Route path="/service/graphic_design" element={<GraphicDesign />} />
          <Route
            path="/service/digital_marketing"
            element={<DigitalMarketing />}
          />
          <Route path="/service/testing_qa" element={<TestingQa />} />
          <Route
            path="/service/3d_animations_video_content"
            element={<AnimationVideo />}
          />{" "}
          <Route
            path="/service/branding_identity"
            element={<BrandingIdentity />}
          />
          <Route path="/team" element={<Team />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
