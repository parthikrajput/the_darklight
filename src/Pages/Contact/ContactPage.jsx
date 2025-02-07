import React from "react";
import SubBanner from "../../components/SubBanner";
import contactbg from "../../img/contact.webp";
import Contact from "../../components/Contact";
import Map from "../../components/Map";

const ContactPage = () => {
  return (
    <>
      <SubBanner
        subHeading="Reach out to us today, and let’s build something great together!"
        title="We’re Here to Help You Achieve Your Digital Goals"
        description="Have a question, project, or need assistance? At TheDarkLight, we’re ready to listen and provide the right solutions. Our team is always available to help guide your business on its digital transformation journey."
        image={contactbg}
      />
      <Contact />
      <Map />
    </>
  );
};

export default ContactPage;
