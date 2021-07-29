import React from "react";
import DAppDev from '../../assets/DAppDev.png';
import Validator from '../../assets/Validator.png';
import Investor from '../../assets/Investor.png';
import Government from '../../assets/Government.png';
import Academia from '../../assets/Academia.png';

const AntliaEcosystem = () => {
  return (
    <section id="ecosystem">
      <div className="container">
        <div className="antlia-ecosystem">
          <div className="heading">
            <div>
              <h2>Antlia Ecosystem</h2>
              <span className="under-line" />
            </div>
          </div>
          <div className="system-list">
            <div className="single-item">
              <div className="img-box">
                <img height="100%" width="100%" src={DAppDev} alt="Dapp Developers" />
              </div>
              <p>Dapp Developers</p>
            </div>
            <div className="single-item">
              <div className="img-box">
                <img height="100%" width="100%" src={Validator} alt="Validator" />
              </div>
              <p>Validator</p>
            </div>
            <div className="single-item">
              <div className="img-box">
                <img height="100%" width="100%" src={Investor} alt="Investors" />
              </div> 
              <p>Investors</p>
            </div>
            <div className="single-item">
              <div className="img-box">
                <img height="100%" width="100%" src={Government} alt="Government/ Enterprises" />
              </div>
              <p>Government/ Enterprises</p>
            </div>
            <div className="single-item">
              <div className="img-box">
                <img height="100%" width="100%" src={Academia} alt="Academia" />
              </div>
              <p>Academia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AntliaEcosystem;