import React from "react";
import { Row, Col } from "reactstrap";
import DevToolTabs from '../DevToolTabs/DevToolTabs';

const DevTools = () => {
  return (
    <div id="dev-tools">
      <div className="container">
        <Row>
          <Col lg={6} md={12}>
            <div className="side-img">
              <DevToolTabs />
            </div>
          </Col>
          <Col lg={6} md={12}>
            <div className="desc">
              <div className="content">
                <h2>Antlia VM with developing tools</h2>
                <p>Antlia is a turing complete blockchain embedded with a VM to write smart contracts in web assembly. Antlia VM has a series of tooling to help developers community.</p>
                <a
                  href="https://docs.antlia.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read more Antlia VM with Dev tools
                    </a>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default DevTools;