import { useState } from "react";
import { BsTelephone } from "react-icons/Bs";
import { BsEnvelopeAt } from "react-icons/Bs";

const ContactForm = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    messages: "",
  });
  const [error, setError] = useState(false);
  const { name, email, messages } = contactData;

  const onChange = (e) =>
    setContactData({ ...contactData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0 || email.length === 0 || messages.length === 0) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    } else {
      setError(false);
      setTimeout(() => {
        setContactData({ name: "", email: "", messages: "" });
      }, 2000);
    }
  };

  return (
    <section
      className="section section-bg"
      id="contact-section"
    >
      <div className="container">
        {/* Section Heading */}
        <div className="m-titles">
          <h2
            className="m-title get-in-touch" data-text="GET IN TOUCH."
          >
            GET IN TOUCH.
          </h2>
        </div>
        <div className="row row-custom">
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 align-right">
            
            <div
              className="contacts-form"
            >
              <a
                className="btn"
              >
                <span>COPY&nbsp;EMAIL</span>
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactForm;
