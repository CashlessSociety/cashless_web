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

const ContributorSmall = (props) => {
  return (
    <>
        <div className="contributor-small">
          <div className="contributor-image">
            <img
              className="default-image"
              alt="contributor"
              src={props.profileUrl}
            ></img>
          </div>
          <div className="contributor-bio">
            <h6><span className="highlight-underline-primary">{props.name}</span></h6>
            <span className="contributor-bio-small">
              {props.bio}
            </span>
          </div>
        </div>

    </>
    )
};


export default ContributorSmall;

