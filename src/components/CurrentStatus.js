import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

function CurrentStatus() {
  return (
    <>
      <div id="status" className="cashless-features current-status">
        <Container>
        
         <Row>
            <Col md={8}>
              <h2 className="title">Current Status</h2>
              <p>
                So far, we have:
              </p>
              <ul><li>A vision of where we're going</li>
                  <li>The key aspects of a cashless whitepaper (not yet ready for public view).</li>
                  <li>The first few ethereum <a href="https://github.com/CashlessSociety/cashless">smart contracts</a> deployed to mainnet <a href="https://etherscan.io/address/0x9c30cc03246443d6c9e211c298bbd94ef889151e#code">here</a></li>
                  <li>An early proof of concept <a href="https://startups.cashless.social">here</a> (or watch <a href="https://www.youtube.com/watch?v=E5mtmTcKU8g">this video</a> of it in action  )</li>
                  <li><a href="https://www.figma.com/file/sq4aGgw7IQAbuRkXcFTaap/Cashless?node-id=1874%3A29551">Designs for</a> and the start of a much nicer, <a href="https://github.com/CashlessSociety/cashless-ui">open source MVP</a> (<a href="https://github.com/CashlessSociety/cashless-ui/issues/120">roadmap</a> here) </li>
                  <li>Some credit network simulations</li>
                  <li>A nascent governance token on colony and an intention (formalized as an MOU for now) to create a DAO around that token. </li>
                  <li>A <a href="https://youtu.be/W1pN8GIa_XU">video from the moneylab conference</a> explaining the project more generally</li>
              </ul>
            
              <p>
                We're working on:
              </p>
              <ul>
                <li>Our founding documents and DAO structure.</li>
                <li>Designs and code for the reference implementation.</li>
                <li>The protocol details and white paper.</li>
                <li>Finding our founding team.</li>
              </ul>

              <p>
                We'd like your help! 
              </p>
              <ul>
                <li>We're looking to carefully expand our team with the right advisors and contributors. .</li>
              </ul>
      
            </Col>
            <Col md={4} className="pt-5">
              <img
                alt="working"
                src={require("assets/img/working.jpg")}
              ></img>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CurrentStatus;