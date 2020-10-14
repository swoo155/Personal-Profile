import React, { Component } from "react";
import { Container, NavbarBrand } from "react-bootstrap";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Project from "./Project";
import Home from "./Home";
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul class="header">
            <li><NavLink to="/home">H O M E</NavLink></li>
            <li><NavLink to="/project">P R O J E C T S</NavLink></li>
          </ul>
          <div class="element margin-10px">
            <div class="scroll-margin-right">
            <span>
              <a href = "mailto: woosanghee0511@gmail.com">
                E M A I L
              </a>
            </span>
            <span>
              <a href="https://www.linkedin.com/in/sangheewoo/">
                L I N K E D I N
              </a>
            </span>
            </div>
          </div>
          <div class="parent">
              <div class="col">
                <p id="jobListed"> 
                Marketing Communication 
                <br></br>Consultant
                <br></br>
                <br></br>
                Aspiring Management Consultant
                <br></br>
                <br></br>
                </p>
              </div>
              <div class="col">
                <h1 id="line">
                Hello<br></br>
                I am <br></br>
                Sanghee .</h1>
              </div>
          </div>
          <div className="content">
            <Route path = "/home" component = {Home} /> 
            <Route path = "/project" component = {Project} /> 
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;