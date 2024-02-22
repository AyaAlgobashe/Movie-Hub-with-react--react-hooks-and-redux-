import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { getMovieList } from "../apis/movie";
import { useEffect } from "react";

import 'bootstrap-icons/font/bootstrap-icons.css';
import { Dropdown } from 'react-bootstrap'; // Correct import statement
import { languageContext } from '../context/languge';

function Header() {
  const {languge,setLanguge} =useContext(languageContext)


  
  const handleLanguageChange = (newLanguage) => {
    setLanguge(newLanguage);
  };

  useEffect(() => {
    getMovieList(languge)
      .then((res) => {
        
      })
      .catch((err) => console.log(err));
  }, [languge, setLanguge]);

  return (
    <nav style={{ backgroundColor: "rgb(221, 221, 120)" }} className="navbar navbar-expand-lg ">
      <div className="container">

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        </button>
        <div className=" navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav " style={{ padding: "10px" }}>
            <Link className="nav-link active navbar-brand " aria-current="page" to="/"><h1>Movies</h1></Link>
            <div className="" style={{ display: "flex",fontSize: "20px",marginLeft:"600px"}}>
            <Dropdown>
                <Dropdown.Toggle variant="dark" id="dropdown-basic-button" style={{marginTop:"5%"}}>
                  Language
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => handleLanguageChange("ltr")} >English</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleLanguageChange("rtl")}>Arabic</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Link className="nav-link " to="/sign-up"><h4>Sign Up</h4></Link>
             
              <Link className="nav-link " to="/fave-movie"> <h4><i className="bi bi-heart-fill" style={{ color: "black" }}></i> Favirot Movies </h4> </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
