import React from "react";
import AntliaChain from '../../assets/MainBanner/AntliaChain.png';
import AntliaNodes from '../../assets/MainBanner/AntliaNodes.png';

const MainBanner = () => {
  return (
    <div className="mainbanner">
      <div className="container">
        <div className="content-img">
          <div className="banner-content">
            <div>
              <h1>Beyond Interchains and Oracles</h1>
              <p>
                Antlia is a crosschain blockchain with trusted smart contract
                based oracles for seamless data and asset sharing.
              </p>
              <a href="https://docs.antlia.io/"
                target="_blank"
                rel="noopener noreferrer" className="learn-more">Read More &nbsp;
              </a>
            </div>
          </div>
          <div className="banner-image">
            <img height="100%" width="100%" src={AntliaChain} alt="Antlia Chains" className="ant-chains" />
            <img height="100%" width="100%" src={AntliaNodes} className="vert-move" alt="Antlia Nodes" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainBanner;