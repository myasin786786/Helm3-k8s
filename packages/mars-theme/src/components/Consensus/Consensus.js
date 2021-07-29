import React from "react";
import { Row, Col } from "reactstrap";
import ConsensusEngine from '../../assets/ConsensusEngine.png';

const Consensus = () => {
  return (
    <section id="consensus">
      <div className="container">
        <Row>
          <Col lg={6} md={12}>
            <div className="side-img particles">
              <img height="auto" width="100%" src={ConsensusEngine} alt="Consensus Engine" />
              <div className="dot-container">
                <div className="dot-in">
                  <div className="dot-one">
                    <div className="dot dot11" />
                  </div>
                  <div className="dot-two">
                    <div className="dot dot22" />
                  </div>
                  <div className="dot-three">
                    <div className="dot dot22" />
                  </div>
                  <div className="dot-four">
                    <div className="dot dot11" />
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6} md={12}>
            <div className="desc">
              <div className="content">
                <h2>Rollover Proof Of Stake (PoS) Consensus Algorithm</h2>
                <p>
                  Antlia has proposed an approach to consensus called Rollover
                  Proof of Stake “rPoS” and its consensus engine is modified
                  tendermint “PBFT”.<br />
                  Antlia rPoS consensus engine selects the validator nodes
                  on the basis of 10% roll over after every 5 blocks.
                </p>
                <a
                  href="https://docs.antlia.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read more Rollover PoS Consensus
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default Consensus;