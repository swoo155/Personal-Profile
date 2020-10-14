import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Collapsible from "react-collapsible";
import { GrDown } from "react-icons/gr";
 
class Project extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 600,
      slidesToShow: 2,
      slidesToScroll: 2
    };
    return (
      <Container>
        <div id="contents">  
          <p id="title">PROJECT DESCRIPTION</p>
          <br></br>
          <br></br>
          <p id="title">IRD Foreign Tax Project (CRS Reporting)</p>
          <p id="norm">Common Reporting Standard (CRS) is a global OECD
            initiative to address offshore tax evasion. CRS requires
            customer information to be collected by financial institutions 
            around the world and reported to tax authorities. Tax 
            authorities will exchange this information to ensure
            everyone pays the right amount of tax.
          </p>  
          <Collapsible class="collapsible" trigger="&#8964;">        
            <p id="norm">
              My role in this project was to determine the information
              required for the spreadsheets and instructing the software
              engineer to provide the data extracts. With data provided,
              update any changes required and determined that only 
              customers in CRS reportable jurisdictions are included in the
              report. Lastly, I have created final customer letters 
              into PDF and forwarded to the operations consultant for the
              distribution to customers.
            </p>
          </Collapsible>
          <br></br>
          <p id="title">ANZ Multi Policy Discount</p>
          <p id="norm">
            ANZ customers are entitled to a package discount if 
            two or more eligible risked are insured. An error was
            identified where not all eligible customers have had the
            discount applied over a period of time. The project team was 
            set up to remediate customers and apply discounts correctly
            and provide customers with a refund.
          </p>
          <Collapsible class="collapsible" trigger="&#8964;"> 
          <p id="norm">
            I have assisted in creating customer communication letters 
            to outline the remediation plan, which includes a summary
            of the issue and organisation's action taken to make historical
            refund and confirm the refund value. Furthermore, communicated
            with the state-owned enterprise, NZ Post, to organise the 
            distribution of letters to customers.
          </p>
          </Collapsible>
          <br></br>
          <p id="title">Gone No Address Project</p>
          <p id="norm">
            The Gone No Address project is to implement a
            follow-up process to try and recontact clients
            that do not have a valid address listed on their 
            policy. The business has utilise the marketing
            automation platform to send out communications
            via text or email. The project involved asking 
            customers to fill in a form to update their details.
          </p>
          <Collapsible class="collapsible" trigger="&#8964;"> 
          <p id="norm">
            With a growing concern for security around personal
            data and email scams, I have drafted messages that 
            can be well understood by the recipients. 
            Furthermore, I designed the forms for Asteron 
            Life and AA Life customers to express each brand's 
            unique identity and determined data fields to be 
            used in the form.
          </p>
          </Collapsible>
          <br></br>
          <p id="title">Conduct Uplift Program</p>
          <p id="norm">
            The project aims to encourage customers to consider their 
            insurance needs across the lifecycle of the policy and
            be more aware of whether their current insurance policy is still suitable, 
            particularly where the customer's circumstances might have changed.
          </p>
          <Collapsible class="collapsible" trigger="&#8964;"> 
          <p id="norm">
            Respectively worked with the Insurance Solutions team to create a
            spreadsheet that contains the product summary in plain English.
            With the completed wordings, I have updated the communication
            templates in Adobe Campaign using HTML, CSS, and js.
          </p>
          </Collapsible>
          <br></br>
          <p id="title">Premium waivers and discounts for customers experiencing financial hardship during COVID-19 crisis</p>
          <p></p>
          <br></br>
          <hr></hr>
        </div>
        <br></br>
        <div id="footer">
          2020 Created & designed by Sanghee
        </div>
      </Container>
    );
  }
}


 
export default Project;