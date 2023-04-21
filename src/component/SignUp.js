import React from 'react'
import "./SignUpStyles.css";
import { useState } from "react";

const SignUp = () => {
    const [formData, setFormData] = useState({email:''});
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value});
    };
    const handleSubmit = (event) => {
        event.preventDefault(validateForm);
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
            {errors.email && <div className="error">{errors.email}</div>}
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

