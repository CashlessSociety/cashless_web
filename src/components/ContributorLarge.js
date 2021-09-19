import React from "react";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

const ContributorLarge = (props) => {
  const flipProfileUrl = props.flipProfileUrl || props.profileUrl;
  return (
    <>
      <div className="contributor-large">
        <div className="front">
          <div className="contributor-image">
            <img
              alt="contributor"
              src={props.profileUrl}
            ></img>
          </div>
          <div className="contributor-bio">
            <h6><span className="highlight-underline-primary">{props.name}</span></h6>
            {/*<div className="back"><h6>{props.title}</h6></div>*/}
            <span className="contributor-short-bio">
              {props.bio}
            </span>
          </div>
        </div>
        <div className="back">
          <div className="contributor-image">
            <img
              alt="contributor"
              src={flipProfileUrl}
            ></img>
          </div>
          <div className="contributor-bio">
            <h6 className="contributor-title">{props.title}</h6>
            <span className="contributor-long-bio">
              {props.longBio}
            </span>
            <span className="contributor-links">
              {props.bioLinks}
            </span>
          </div>
        </div>
      </div>
    </>
    )
};

 {/*bioLinks={
  <>
   <Button
    className="btn-icon btn-round"
    color="primary"
    href="https://linkedin.com/in/lokaren"
    target = "_blank" 
    rel = "noopener noreferrer"
  >
    <i className="fab fa-linkedin"></i>
  </Button>
  </>
}*/}


export default ContributorLarge;

