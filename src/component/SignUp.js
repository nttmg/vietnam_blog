import React from 'react'
import "./SignUpStyles.css";
import { useState } from "react";
import {FaRegTimesCircle} from "react-icons/fa";

const SignUp = () => {
    const [formData, setFormData] = useState({email:''});
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value
    });
        
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem('formData', JSON.stringify(formData));
        if(validateForm()) {
          window.alert("Subcrites successfully")
        };
    };
    const [errors, setErrors] = useState({});
    const validateForm = () => {
        let errors ={};
        if (!formData.email) {
            errors.email = "Email is required";
        }
        

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

  return (
    <div className='formContainer'>
    <form onSubmit={handleSubmit} className='signupForm'>
        <h3>Stay up to date with our latest travel news and events</h3>
        <div className='emailInput'>
            <label htmlFor="email">Email:</label>
            <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
            />
            {errors.email && 
            <div className="error"><FaRegTimesCircle className='error-icon'/>{errors.email}
            </div>}
        </div>

  {/* <div>
    <label htmlFor="password">Password:</label>
    <input
      type="password"
      name="password"
      value={formData.password}
      onChange={handleChange}
    />
    {errors.password && <div className="error">{errors.password}</div>}
  </div> */}

  <button type="submit" className='sub-btn'>Subscribe</button>
</form>
</div>
  )
}

export default SignUp;

