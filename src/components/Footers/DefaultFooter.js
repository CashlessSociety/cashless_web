/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-white">
        <Container>
          <nav>
            <ul>
              <li>
                Brought to you by:
              </li>
              <li>
                <a
                  href="https://github.com/cashlesssociety"
                  target="_blank"
                >
                  Cashless Society
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
              <li>|</li>
              <li>
                <a
                  href="https://mutualaidworld.gitbook.io/cashless/
"
                  target="_blank"
                >
                  Contributor's Handbook
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
