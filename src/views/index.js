import React from "react";

// reactstrap components
// import { } from "reactstrap";
import { Container, Row, Col } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
//import VideoHeader from "components/VideoHeader.js";
import NetworkHeader from "components/NetworkHeader.js";
import HowTheApp from "components/HowTheApp.js";
import WebOfThankyous from "components/WebOfThankyous.js";
import CardAndKeys from "components/CardAndKeys.js";
import IntroRow from "components/IntroRow.js";
import PainPoints from "components/PainPoints.js";
import Governance from "components/Governance.js";
import ContactUs from "components/ContactUs.js";
import Details from "components/Details.js";
import CurrentStatus from "components/CurrentStatus.js";

function IndexPage() {
  // const [firstFocus, setFirstFocus] = React.useState(false);
  // const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <NetworkHeader />
        <IntroRow />
        <HowTheApp />
        <CurrentStatus />
        <Details />
        <PainPoints />
        <div className="cashless-features"><Container><Row><Col md="12">
              <h4 className="title">Roadmap</h4>
        </Col></Row></Container></div>
        <div className="cashless-features"><Container><Row><Col md="12">
              <h4 className="title">Governance / DAO / Business Model</h4>
              <div className="description">
                Regardless of any other payments, team members will be awarded ownership stake via the governance token.
              </div>
        </Col></Row></Container></div>
 
        <div className="cashless-features"><Container><Row><Col md="12">
              <h4 className="title">Our contributors</h4>
        </Col></Row></Container></div>

{/*        <Governance />
        <CardAndKeys />*/}
        <ContactUs />
        <DefaultFooter />
      </div>
    </>
  );
}

export default IndexPage;
