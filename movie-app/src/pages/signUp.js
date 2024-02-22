import React, { useState } from "react";

export default function SignUp() {
  const [signUp, setsignUp] = useState({
    name: "",
    email: "",
    pasword: "",
    userName:""
  });

  const [FormError, setFormError] = useState({
    name: null,
    email: null,
    pasword: null,
    userName:null
  });

  const handleInputChange = (e) => {
    const field_name = e.target.name;
    const field_value = e.target.value;
    if (field_name === "name1") {
      setsignUp({
        ...signUp,
        name: field_value,
      });

      setFormError({
        ...FormError,
        name:
          field_value.length === 0
            ? "This field is required"
            : field_value.length < 3
            ? "Min.length is 3"
            : null,
      });
    }
    if (field_name === "email") {
      setsignUp({
        ...signUp,
        email: field_value,

      });

    setFormError({
      ...FormError,
      email:
        field_value.length === 0
          ? "This field is required"
          : field_value.length > 25
          ? "Max length is 25"
          : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field_value)
          ? "Invalid email address"
          : null,
    });
    }

    if (field_name === "userName") {
      setsignUp({
        ...signUp,
        userName: field_value,
      });

      setFormError({
        ...FormError,
        userName:
          field_value.length === 0
            ? "This field is required"
            : field_value.length < 3
            ? "Min.length is 3"
            : null,
      });
    }
    if(field_name === "password"){
      setsignUp({
        ...signUp,
        [field_name]: field_value
      });
  
      setFormError({
        ...FormError,
        [field_name]:
          field_value.length === 0
            ? "This field is required"
            : field_name === "name"
            ? field_value.length < 3
              ? "Min.length is 3"
              : null
            : field_name === "email"
            ? field_value.length > 25
              ? "Max length is 25"
              : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field_value)
              ? "Invalid email address"
              : null
            : field_name === "userName"
            ? field_value.length < 7
              ? "Min.length is 7"
              : null
            : field_name === "password"
            ? field_value.length < 8
              ? "Min.length is 8"
              : null
            : field_name === "confirmPassword"
            ? field_value !== signUp.password
              ? "Passwords do not match"
              : null
            : null
      });



    }
  }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(signUp);
  };

  return (
    <div className="container" style={{backgroundColor:"rgb(221, 221, 120)",padding:"10px", color:"rgb(65, 65, 23)"}}>
      <h2>Sign Up</h2>
      <hr />
      <form onSubmit={handleFormSubmit} >
        <div className="mb-3">
          <label htmlFor="name1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className={`form-control ${FormError.name ? 'border-danger' : ''}`}
            id="name1"
            name="name1"
            aria-describedby="name_help"
            value={signUp.name}
            onChange={handleInputChange}
          />
          {FormError.name && (
            <div id="name_help" className="form-text text-danger">
              {FormError.name}
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="game_description" className="form-label">
            Email
          </label>
          <input
            
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={signUp.email}
            onChange={handleInputChange}
          />
          {FormError.email && (
            <div id="game_name_help" className="form-text text-danger">
              {FormError.email}
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            User Name
          </label>
          <input
            type="text"
            className="form-control"
            id="User_Name"
            aria-describedby="price_help"
            name="userName"
            value={signUp.userName}
            onChange={handleInputChange}
          />
          {FormError.userName && (
            <div id="name_help" className="form-text text-danger">
              {FormError.userName}
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            aria-describedby="price_help"
            name="password"
            value={signUp.password}
            onChange={handleInputChange}
          />
          {FormError.password && (
            <div id="name_help" className="form-text text-danger">
              {FormError.password}
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            aria-describedby="price_help"
            name="password"
            value={signUp.password}
            onChange={handleInputChange}
          />
          {FormError.password && (
            <div id="name_help" className="form-text text-danger">
              {FormError.password}
            </div>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
