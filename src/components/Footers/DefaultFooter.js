/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <nav>
            <ul>
              <li>
                <a
                  href="https://cashless.social"
                >
                  Cashless
                </a>
              </li>
              <li>|</li>
              <li>
                <a
                  href="https://github.com/factn"
                  target="_blank"
                >
                  Faction Cooperative
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright" id="copyright">
            © {new Date().getFullYear()}
          </div>
        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
