import React from "react";
import { Link } from "react-router-dom";
import FooterBg from "../../img/footer-bg.jpg";
import FLogo from "../../img/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaBehance,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
const socialLinks = [
  { href: "https://www.facebook.com/login/", icon: <FaFacebookF /> },
  { href: "https://www.instagram.com/", icon: <FaInstagram /> },
  { href: "https://www.linkedin.com/login", icon: <FaLinkedinIn /> },
  { href: "https://www.behance.net/", icon: <FaBehance /> },
];

const Footer = () => {
  return (
    <footer
      className=" bg-cover bg-center relative after:absolute after:content-[''] after:w-full after:h-full after:top-0 after:left-0 after:bg-blue-l-950 after:opacity-90 after:z-[-1] z-[1]"
      style={{ backgroundImage: `url(${FooterBg})` }}
    >
      <div className="container xl:py-20 lg:py-16 sm:py-14 py-10">
        <div className="flex flex-wrap gap-10 items-start">
          <div className="space-y-5 w-full sm:w-[calc(50%-20px)] xmd:w-full xl:w-[calc(30%-30px)]">
            <div className="logo">
              <img src={FLogo} alt="the dark light" className="max-w-[280px]" />
            </div>
            <div className="text-p space-y-3 text-black-l-200">
              <p>
                At TheDarkLight, we are committed to providing innovative
                digital solutions to help businesses thrive in a fast-paced
                digital world. With over 7 years of experience, we specialize in
                UI/UX design, mobile app development, web development, and
                digital marketing.
              </p>
            </div>
            <div className="social-icon">
              <ul className="flex items-center gap-4 flex-wrap">
                {socialLinks.map((link, index) => (
                  <li
                    key={index}
                    className="flex-none flex items-center justify-center w-[45px] h-[45px] border-2 border-solid border-blue-l-500 rounded-full bg-transparent hover:bg-blue-l-500 transition-all duration-300 ease-linear cursor-pointer"
                  >
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[18px] text-center flex items-center justify-center"
                    >
                      {link.icon}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-8 w-full sm:w-[calc(50%-20px)] xmd:w-[calc(33.33%-27px)] xl:w-[calc(20%-30px)]">
            <p className="text-h5 text-white">Our Service</p>

            <ul className="space-y-4">
              {[
                { path: "/service/ui_ux_design", label: "UI/UX Design" },
                {
                  path: "/service/mobile_app_development",
                  label: "Mobile App Development",
                },
                { path: "/service/web_development", label: "Web Development" },
                { path: "/service/cms", label: "CMS" },
                { path: "/service/graphic_design", label: "Graphic Design" },
                {
                  path: "/service/digital_marketing",
                  label: "Digital Marketing",
                },
                { path: "/service/testing_qa", label: "Testing & QA" },
                {
                  path: "/service/3d_animations_video_content",
                  label: "3D Animations & Video Content",
                },
                {
                  path: "/service/branding_identity",
                  label: "Branding & Identity",
                },
              ].map(({ path, label }) => (
                <li
                  key={path}
                  className="text-p text-white hover:text-blue-l-500 transition-all duration-300 ease-linear"
                >
                  <Link to={path} className="block">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8 w-full sm:w-[calc(50%-20px)] xmd:w-[calc(33.33%-27px)] xl:w-[calc(20%-30px)]">
            <p className="text-h5 text-white">Company</p>

            <ul className="space-y-4">
              {[
                { path: "/about", label: "About" },
                {
                  path: "/service",
                  label: "Service",
                },
                { path: "/contact", label: "Contact" },
                { path: "/team", label: "Team" },
              ].map(({ path, label }) => (
                <li
                  key={path}
                  className="text-p text-white hover:text-blue-l-500 transition-all duration-300 ease-linear"
                >
                  <Link to={path} className="block">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8 w-full sm:w-[calc(50%-20px)] xmd:w-[calc(33.33%-27px)] xl:w-[calc(30%-30px)]">
            <p className="text-h5 text-white">Contact Info</p>
            <div className="space-y-5">
              <div className="flex items-center text-p text-white">
                <FaMapMarkerAlt className="mr-2 text-lg" />
                <span>123, Main Street, City, Country</span>
              </div>
              <div className="flex items-center text-p text-white">
                <FaPhoneAlt className="mr-2 text-lg" />
                <Link to="tel:+911234567890" aria-label="">
                  +123 456 7890
                </Link>
              </div>
              <div className="flex items-center text-p text-white">
                <FaEnvelope className="mr-2 text-lg" />
                <Link to="mailto:info@example.com" aria-label="">
                  info@example.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright py-5 px-4 text-center border-t-2 border-solid border-blue-l-500">
        <p className="text-p text-white">
          &copy; {new Date().getFullYear()} TheDarkLight. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
