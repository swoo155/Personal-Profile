import React, { Component } from "react";
import { Container, Row, Col, Grid } from 'react-bootstrap';
import { ImgsViewer } from 'react-images-viewer';

class Home extends Component {
  render() {
    return (
      <Container>
        <div id="contents">
          <p>
            I take pride in delivering exceptional product
            life cycle journey that fulfils the organisation's 
            needs. Involvement in the discovery of actionable
            insights and delivery of use cases has initiated me
            to conduct number of projects such as, 
            IRD Foreign Tax project 2020,
            ANZ Multi policy discount projects,
            Gone no address for Life Insurance customers,
            Conduct uplift program
            as well as automating customer communication 
            deliveries using marketing automation tool, Adobe Campaign.
          </p>
          <br></br>

          <p id="subIntro">
          <p id="title">WORK EXPERIENCE</p>
          <br></br>
            Suncorp New Zealand
            <br></br>
            Marketing Communication Consultant
            <br></br>
            Dec 2019 - Present
            <br></br>
            <br></br>
            Service & Underwriting Consultant
            <br></br>
            Jan 2019 - Dec 2019
          </p>

          <br></br>
          <hr></hr>
          <br></br>

          <p id="subIntro">
          <p id="title">EDUCATION</p>
            <br></br>
            University of Auckland
            <br></br>
            Bachelor of Computer Science and Information System
            <br></br>
            2015 - 2019
            <br></br>
            <br></br>
            Auckland University of Technology
            <br></br>
            Diploma in Travel and Tourism
            <br></br>
            2011 - 2012
            <br></br>
            <br></br>
          </p>
          <hr></hr>
          <br></br>
        </div>
        <div id="footer">
          2020 Created & designed by Sanghee
        </div>
      </Container>
    );
  }
}
 
export default Home;