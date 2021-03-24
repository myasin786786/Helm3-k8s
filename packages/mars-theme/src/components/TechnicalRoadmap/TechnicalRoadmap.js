import React from "react";
import techroadmap from '../../assets/techroadmap.png';
import techroadmapmobile from '../../assets/roadmapmobile.png';
import { Col, Row } from "reactstrap";

const TechnicalRoadmap = () => {
  return (
    <section id="tech-map">
      <div className="container">
        <div className="heading">
          <div className="inner">
            <h2>Technical Roadmap</h2>
            <p>Antlia is all set to launch its validator staking program by the end of 2021. The detailed roadmap shows us the milestones from an alpha release through to multiple betas and a targeted mainnet release.</p>
            <Row>
              <Col lg={6} className="d-flex">
                <div className="item-box w-100">
                  <h4>Release 1:</h4>
                  <p>Antlia StakeFlow will be releasing a new open source alpha testnet built to be compatible with a new 2.0 platform that anyone can run a node in.</p>
                </div>
              </Col>
              <Col lg={6} className="d-flex">
                <div className="item-box w-100">
                  <h4>Release 2:</h4>
                  <p>Launching of the live beta of a fully functional StakeFlow Staking App 1.0 with complete UI for staking of ETH2.0, receiving Synthetic anaETH2, Synthetic Rewards, and on-chain governance.</p>
                </div>
              </Col>
              <Col lg={6} className="d-flex">
                <div className="item-box w-100">
                  <h4>Release 3:</h4>
                  <p>Following the launch of the live beta of StakeFlow Staking App, complete audits from multiple sources will be conducted and feature freeze will be implemented to check the performance of the smart contracts.</p>
                </div>
              </Col>
              <Col lg={6} className="d-flex">
                <div className="item-box w-100">
                  <h4>Release 4:</h4>
                  <p>After successful audits of StakeFlow Staking, designing of a new user interface of synthetic investment/borrowing of digital crypto assets and liquidity pools will be conducted. Addition of the DeFi features in the StakeFlow beta app.</p>
                </div>
              </Col>
              <Col lg={6} className="d-flex">
                <div className="item-box w-100">
                  <h4>Release 5:</h4>
                  <p>Launching of the live beta of StakeFlow DeFi App 2.0 with added DeFi features. The beta 2.0 provides full ability to perform transactions in multiple sections within the app. Objective to test the beta 2.0 with over 500+ node operators having more than 800,000 testnet ETH circulating around the app.</p>
                </div>
              </Col>
              <Col lg={6} className="d-flex">
                <div className="item-box w-100">
                  <h4>Release 6:</h4>
                  <p>Rigorous multiple audits of beta 2.0 will be conducted, checking the ability of the app to handle thousands of transactions. Both smart contracts and the DeFi ecosystem will be audited.</p>
                </div>
              </Col>
              <Col lg={12}>
                <div className="item-box">
                  <h4>Release 7:</h4>
                  <p>Following the successful completion of the multiple audits of beta 2.0, Antlia Stakeflow will be released to the mainnet. Users can engage in the Antlia DeFi ecosystem and perform transactions in a trustless manner.</p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div className="tech-roadmap">
        <img src={techroadmap} alt="Technical Roadmap" className="desktop" />
        <img src={techroadmapmobile} alt="Technical Roadmap" className="mobile" />
      </div>
    </section>
  );
}

export default TechnicalRoadmap;