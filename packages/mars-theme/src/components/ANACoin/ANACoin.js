import React from "react";
import Governace from '../../assets/Government.png';
import Staking from '../../assets/Stacking.png';
import Transaction from '../../assets/Transactions.png';
import SmartContract from '../../assets/SmartContracts.png';
import Validator from '../../assets/Validator.png';

const ANACoin = () => {
  return (
    <section id="ana-coin">
      <div className="container">
        <div className="ana-coins">
          <div className="heading">
            <h2>ANA Coin The Native Coin of Antlia</h2>
            <p>The ANA Coin is a unit of value that is native to the Antlia Blockchain. ARC based token can be generated using WASM based smart contract at Antlia Blockchain. Any asset can be used for the gas and rewards for staking. Currently,  ANA coin will be used for Gas and staking purpose  at Antlia Blockchain Network.</p>
          </div>
          <div className="coin-list">
            <div className="single-item">
              <div className="img-box">
                <img height="auto" width="100%" src={Governace} alt="Governance" />
              </div>
              <p>Governance</p>
            </div>
            <div className="single-item">
              <div className="img-box">
                <img height="auto" width="100%" src={Staking} alt="Stacking" />
              </div>
              <p>Stacking</p>
            </div>
            <div className="single-item">
              <div className="img-box">
                <img height="auto" width="100%" src={Transaction} alt="Transactions" />
              </div>
              <p>Transactions</p>
            </div>
            <div className="single-item">
              <div className="img-box">
                <img height="auto" width="100%" src={SmartContract} alt="Smart Contracts" />
              </div>
              <p>Smart Contracts</p>
            </div>
            <div className="single-item">
              <div className="img-box">
                <img height="auto" width="100%" src={Validator} alt="Validator Rewards" />
              </div>
              <p>Validator Rewards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ANACoin;