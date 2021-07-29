import React from "react";
import CreativeDestructionLab from '../../assets/logos/Creative_destruction_Lab.png';
import RNS from '../../assets/logos/rns.png';
import TrustedChain from '../../assets/logos/trusted_chain.png';

const OurPartners = () => {
  return (
    <section id="ourPartners">
      <div className="container">
        <div className="ana-coins">
          <div className="heading">
            <h2>Our Partners</h2>
          </div>
          <div className="coin-list ourPartners">
            <div className="single-item">
              <div className="img-box">
                <a href="https://www.creativedestructionlab.com/" target="_blank" rel="noopener noreferrer">
                  <img height="auto" width="100%" src={CreativeDestructionLab} alt="Creative Destruction Lab" />
                </a>
              </div>
            </div>
            <div className="single-item">
              <div className="img-box">
                <a href="https://www.rnssol.com/" target="_blank" rel="noopener noreferrer">
                  <img height="auto" width="100%" src={RNS} alt="RNS Solutions" />
                </a>
              </div>
            </div>
            <div className="single-item">
              <div className="img-box">
                <a href="https://www.trustedchain.io/" target="_blank" rel="noopener noreferrer">
                  <img height="auto" width="100%" src={TrustedChain} alt="Trusted Chain" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurPartners;