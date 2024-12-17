import React from 'react';
import ContactBanner from './ContactBanner/ContactBanner';
import ContactDetails from './ContactDetails/ContactDetails';

const Contact = () => {

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact";

  }, [])

  return (
    <div>
      <ContactBanner />
      <ContactDetails />
    </div>
  );
};

export default Contact;