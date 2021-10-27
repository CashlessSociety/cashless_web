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
                <a
                  href="https://github.com/CashlessSociety" target="_blank"
                >
                  Cashless Source Code
                </a>
              </li>
              <li>|</li>
              <li>
                <a
                  href="https://mutualaidworld.gitbook.io/cashless/
" target="_blank"
                >
                  Contributor's Handbook
                </a>
              </li>
              <li>|</li>
              <li>
                <a
                  href="#get-involved"
                >
                  Get involved ! 
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
