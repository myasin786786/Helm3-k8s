import React from "react";
import { Row, Col } from "reactstrap";
import Interoperables from '../../assets/Interoperable.png';
import interopeline from '../../assets/interope-lines.png';
import interopecoin from '../../assets/interope-coin.png';

const Interoperable = () => {
  return (
    <section id="interoperable">
      <div className="container">
        <Row>
          <Col lg={6} md={12}>
            <div className="desc">
              <div className="content">
                <h2>Antlia Interoperable Blockchain</h2>
                <p>Blockchains are not only different because of their consensus but blockchain have different architecture design, many languages and framework to program, and different transaction structure.</p>
                <a
                  href="https://docs.antlia.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read more Interoperable
                </a>
              </div>
            </div>
          </Col>
          <Col lg={6} md={12}>
            <div className="interope">
              <div className="dot dot1" />
              <div className="dot dot2" />
              <div className="top-left">
                <div className="dot dot3" />
                <div className="dot dot4" />
              </div>
              <div className="top-right">
                <div className="dot dot5" />
                <div className="dot dot6" />
              </div>
              <img height="auto" width="auto" src={interopeline} className="int-dot-line" alt="Interoperable Interoperate Data interoperability Interoperability in software engineering " />
              <img height="auto" width="auto" src={interopecoin} className="int-coins" alt="Database interoperability Enterprise interoperability Digital interoperability Global interoperability" />
              <img height="auto" width="auto" src={Interoperables} className="res-view" alt="Interoperable Interoperate Data interoperability Interoperability in software engineering Database interoperability Enterprise interoperability Digital interoperability Global interoperability" />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default Interoperable;