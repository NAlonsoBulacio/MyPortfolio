import React from "react";
import ContactForm from "../ContactForm/ContactForm";
const LetsContact = () => {
  return (
    <div id="contact" className="w-full flex flex-wrap justify-start items-center space-y-4">
      <div className="w-2/3">
        <ContactForm />
      </div>
    </div>
  );
};

export default LetsContact;
