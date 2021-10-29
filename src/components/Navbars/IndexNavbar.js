import React from "react";
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-at-top");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 9 ||
        document.body.scrollTop > 9
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 10 ||
        document.body.scrollTop < 100
      ) {
        setNavbarColor("navbar-at-top");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              id="navbar-brand"
              onClick={(e) => {
                document
                  .getElementById("video-header")
                  .scrollIntoView();
              }}
            >
              <img src={require("assets/img/cashless_white_sm.png")} alt="Cashless Logo" /> Cashless
            </NavbarBrand>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>

               <NavItem>
                <NavLink
                  href="#how-the-app" onClick={(e) => {
                    document.getElementById("how-the-app").scrollIntoView();
                    document.documentElement.classList.toggle("nav-open");
                  }}>
                  What
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#why" onClick={(e) => {
                    document.getElementById("why").scrollIntoView();
                    document.documentElement.classList.toggle("nav-open");
                  }}>
                  Why
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#details" onClick={(e) => {
                    document.getElementById("details").scrollIntoView();
                    document.documentElement.classList.toggle("nav-open");
                  }}>
                  How
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#governance" onClick={(e) => {
                    document.getElementById("governance").scrollIntoView();
                    document.documentElement.classList.toggle("nav-open");
                  }}>
                  Governance 
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href="#contributors" onClick={(e) => {
                    document.getElementById("contributors").scrollIntoView();
                    document.documentElement.classList.toggle("nav-open");
                  }}>
                  Contributors
                </NavLink>
              </NavItem>

               <NavItem>
                <NavLink
                  href="#status" onClick={(e) => {
                    document.getElementById("status").scrollIntoView();
                    document.documentElement.classList.toggle("nav-open");
                  }}>
                  Status
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#get-involved" onClick={(e) => {
                    document.getElementById("get-involved").scrollIntoView();
                    document.documentElement.classList.toggle("nav-open");
                  }}>
                  Get Involved
                </NavLink>
              </NavItem>
{/*              <NavItem>
                <NavLink
                  href="#team-section" onClick={(e) => {
                    document.getElementById("team-section").scrollIntoView();
                    document.documentElement.classList.toggle("nav-open");
                  }}>
                  Contact
                </NavLink>
              </NavItem>*/}
             
              <NavItem>
                <NavLink
                  href="https://twitter.com/cashless_social?ref=cashless_web"
                  target="_blank"
                  id="twitter-tooltip"
                >
                  <i className="fab fa-twitter"></i>
                  <p className="d-lg-none d-xl-none">Twitter</p>
                </NavLink>
                <UncontrolledTooltip target="#twitter-tooltip">
                  Follow us on Twitter
                </UncontrolledTooltip>
              </NavItem>
             
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
