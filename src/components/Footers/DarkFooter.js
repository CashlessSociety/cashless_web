/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                href="https://github.com/factn"
                target="_blank"
              >
                FACTION COOPERATIVE
              </a>
            </li>
            {/* <li>
              <a
                href="http://presentation.creative-tim.com?ref=nukr-dark-footer"
                target="_blank"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="http://blog.creative-tim.com?ref=nukr-dark-footer"
                target="_blank"
              >
                Blog
              </a>
            </li> */}
          </ul>
        </nav>
        
        <div className="copyright" id="copyright">
            © {new Date().getFullYear()}
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;