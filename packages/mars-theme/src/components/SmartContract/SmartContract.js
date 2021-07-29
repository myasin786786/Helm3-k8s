import React from "react";
import { Row, Col } from "reactstrap";
import sccoins from '../../assets/sc-coins.png';
import scdottedline from '../../assets/sc-dotted-line.png';
import circle from '../../assets/circle.png';
import deskview from '../../assets/sc-res.png';

const SmartContract = () => {
  return (
    <section id="smart-contract">
      <div className="container">
        <Row>
          <Col lg={6} md={12}>
            <div className="desc">
              <div className="content">
                <h2>Oracle with Trusted Smart Contracts</h2>
                <p>Antlia oracles are built using web assembly based smart contracts. Antlia oracles can facilitate the transparent and trussless execution of smart contracts to bring data in and out of blockchain.</p>
                <a
                  href="https://docs.antlia.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read more Smart Contract
                </a>
              </div>
            </div>
          </Col>
          <Col lg={6} md={12}>
            <div className="sc-image">
              <div className="dot dot1" />
              <div className="dot dot2" />
              <div className="dot dot3" />
              <div className="dot dot4" />
              <img
                height="auto"
                width="100%"
                src={circle}
                className="circle-move"
                alt="Circle"
              />
              <div className="globe">
                <div className="tech-slideshow">
                  <div className="mover-1"></div>
                  <div className="mover-1"></div>
                </div>
              </div>
              <img height="auto" width="auto" src={deskview} alt="Smart Contract" className="res-view" />
              <img height="auto" width="auto" src={scdottedline} alt="Smart Contract" className="sc-dot-line" />
              <img height="auto" width="auto" src={sccoins} alt="Smart Contract" className="sc-coins" />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default SmartContract;