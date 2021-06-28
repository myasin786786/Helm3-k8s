import React from "react";
import Bitcoin from '../../assets/logos/bitcoin.png';
import BusinessInsider from '../../assets/logos/Business-Insider-logo.jpg';
import CoinTelegraph from '../../assets/logos/cointelegraph.png';
import CryptoNews from '../../assets/logos/cryptonews.png';
import MarketWatch from '../../assets/logos/marketWatch.jpg';
import YahooFinance from '../../assets/logos/yahooFinance.png';

const MediaPartners = () => {
  return (
    <section id="media">
      <div className="container">
        <div className="ana-coins">
          <div className="heading">
            <h2>Media</h2>
          </div>
          <div className="coin-list">
            <div className="single-item">
              <div className="img-box">
                <a href="https://news.bitcoin.com/rns-solutions-trustedchain-are-developing-blockchain-finlit-platform-for-islamic-development-bank/" target="_blank" rel="noopener noreferrer">
                  <img src={Bitcoin} alt="Bitcoin" />
                </a>
              </div>
            </div>
            <div className="single-item">
              <div className="img-box">
                <a href="https://markets.businessinsider.com/news/stocks/rns-solutions-trustedchain-are-developing-blockchain-based-finlit-platform-for-islamic-development-bank-1030518781" target="_blank" rel="noopener noreferrer">
                  <img src={BusinessInsider} alt="Business Insider" />
                </a>
              </div>
            </div>
            <div className="single-item">
              <div className="img-box">
                <a href="https://cointelegraph.com/press-releases/rns-and-trusted-chain-develop-platform-for-islamic-development-bank" target="_blank" rel="noopener noreferrer">
                  <img src={CoinTelegraph} alt="Coin Telegraph" />
                </a>
              </div>
            </div>
            <div className="single-item">
              <div className="img-box">
                <a href="https://cryptonews.com/news/rns-solutions-trustedchain-develop-finlit-platform-for-islam-10674.htm" target="_blank" rel="noopener noreferrer">
                  <img src={CryptoNews} alt="Crypto News" />
                </a>
              </div>
            </div>
            <div className="single-item">
              <div className="img-box">
                <a href="https://www.marketwatch.com/press-release/rns-solutions-trustedchain-are-developing-blockchain-based-finlit-platform-for-islamic-development-bank-2021-06-14?tesla=y" target="_blank" rel="noopener noreferrer">
                  <img src={MarketWatch} alt="Market Watch" />
                </a>
              </div>
            </div>
            <div className="single-item">
              <div className="img-box">
                <a href="https://finance.yahoo.com/news/rns-solutions-trustedchain-developing-blockchain-074000968.html?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAGBDosY4M-7D8pMWruNO-w-4RoQR2v5bDmSMdgBVBZAi8UVmFHl_CsRG7IsbOMDDvw_4QfJKNSS21bx7GVtpBrYkOCydk5Wz-npteRm0GeN0zdgnMqQ9zdYZohkJxCl5R_dvXSh-Inlb5_BoKXXapSKneIOPIAC15dtOmiHvykPm" target="_blank" rel="noopener noreferrer">
                  <img src={YahooFinance} alt="Yahoo inance" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MediaPartners;