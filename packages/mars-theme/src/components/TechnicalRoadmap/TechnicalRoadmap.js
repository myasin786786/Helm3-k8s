import React from "react";
import techroadmap from '../../assets/techroadmap.png';
// import techroadmaptablet from '../../assets/roadmaptablet.png';
import techroadmapmobile from '../../assets/roadmapmobile.png';

class TechnicalRoadmap extends React.Component {
  render() {
    return (
      <section id="tech-map">
        <div className="container">
          <div className="heading">
            <div className="inner">
              <h2>Technical Roadmap</h2>
              <p>The ANA Coin is a unit of value that is native to the Antlia Blockchain. ARC based token can be generated using WASM based smart contract at Antlia Blockchain. Any asset can be used for the gas and rewards for staking. Currently,  ANA coin will be used for Gas and staking purpose  at Antlia Blockchain Network.</p>
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
}

export default TechnicalRoadmap;
