import "./ContactFormStyles.css";
import React from "react";
import { useState } from "react";
import { FaRegTimesCircle} from "react-icons/fa"

const ContactForm = () => {
  const [ContactData, setContactData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (event) => {
    const {name, value} = event.target;
    setContactData({
      ...ContactData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('ContactData', JSON.stringify(ContactData));
    if(validateForm()) {
      window.alert("Submited")
    };
  };
  const [errors, setErrors] = useState({});
  const validateForm = () => {
    let errors = {};
    if (!ContactData.name) {
      errors.name = "Name is required";
    }
    if (!ContactData.email) {
      errors.email = "Email is required";
    }
    if (!ContactData.subject) {
      errors.subject = "Subject is required";
    }
    if (!ContactData.message) {
      errors.message = "Message is required";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  return (
    <div className="from-container">
      <h1>Send a message to us</h1>
      <form onSubmit = { handleSubmit } className="contactForm">
        

        <input placeholder="Name" 
          type="name"
          name="name"
          value={ContactData.name}
          onChange={handleChange} />
          {errors.name && 
            <div className="error-contact"><FaRegTimesCircle className='error-icon'/>{errors.name}
            </div>}
        
        <input placeholder="Email" 
        type="email"
          name="email"
          value={ContactData.email}
          onChange={handleChange} />
          {errors.email && 
            <div className="error-contact"><FaRegTimesCircle className='error-icon'/>{errors.email}
            </div>}
        <input placeholder="Subject" 
        type="subject"
          name="subject"
          value={ContactData.subject}
          onChange={handleChange} />
          {errors.subject && 
            <div className="error-contact"><FaRegTimesCircle className='error-icon'/>{errors.subject}
            </div>}
        <textarea placeholder="Message" rows="4"
        type="message"
          name="message"
          value={ContactData.message}
          onChange={handleChange} ></textarea>
          {errors.message && 
            <div className="error-contact"><FaRegTimesCircle className='error-icon'/>{errors.message}
            </div>}
        <button>Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm;
