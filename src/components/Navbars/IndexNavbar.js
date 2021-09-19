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
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
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
        setNavbarColor("navbar-transparent");
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
              href="//"
              target="_blank"
              id="navbar-brand"
              onClick={(e) => {
                e.preventDefault();
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
                  href="#pablo" onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("how-the-app").scrollIntoView();
                  }}>
                  <p>What</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#pablo" onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("why").scrollIntoView();
                  }}>
                  <p>Why</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#pablo" onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("details").scrollIntoView();
                  }}>
                  <p>Credit Cycle</p>
                </NavLink>
              </NavItem>
                <NavItem>
                <NavLink
                  href="#pablo" onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("guarantees").scrollIntoView();
                  }}>
                  <p>Guarantees</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#pablo" onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("governance").scrollIntoView();
                  }}>
                  <p>Governance </p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#pablo" onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("get-involved").scrollIntoView();
                  }}>
                  <p>Get Involved</p>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href="#pablo" onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("contributors").scrollIntoView();
                  }}>
                  <p>Contributors</p>
                </NavLink>
              </NavItem>
{/*              <NavItem>
                <NavLink
                  href="#pablo" onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("team-section").scrollIntoView();
                  }}>
                  <p>Contact</p>
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
