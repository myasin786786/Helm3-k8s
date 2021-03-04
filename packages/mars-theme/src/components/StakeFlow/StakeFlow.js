import React from "react";
import Link from "../link";
import AntliaCoins from '../../assets/AntliaCoins.png';
import usdc from '../../assets/coins/usdc.png';
import bnb from '../../assets/coins/bnb.png';
import color from '../../assets/coins/color.png';
import kava from '../../assets/coins/kava.png';
import cosmos from '../../assets/coins/cosmos.png';
import eth from '../../assets/coins/eth.png';
import btc from '../../assets/coins/btc.png';
import bch from '../../assets/coins/bch.png';
import { Row, Col, Button } from "reactstrap";
import { animateScroll as scroll } from "react-scroll";
import { Helmet } from "react-helmet";

const StakeFlow = () => {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };
    return (
        <div style={{ width: '100%' }}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>StakeFlow</title>
                <link rel="canonical" href="https://antlia.io/antlia-defi" />
                <meta name="title" content="Incentivized multi-tier reward DeFi staking application | Stakeflow" />
                <meta name="description" content="StakeFlow is powered by interoperable and scalable Antlia blockchain. StakeFlow provides legacy stake rewards on proof of stake chains such as Ethereum and Cosmos by utilizing governance tokens and multi synthetic tokens." />
            </Helmet>
            <div id="defi">
                <div className="container">
                    <div className="content-img">
                        <div className="banner-content">
                            <div>
                                <h1>World's First Cross-chain Money Market</h1>
                                <p> Lend, borrow and earn with your crypto now. </p>
                                <Link link="/wallet" onClick={scrollToTop} spy={"true"} smooth={"true"} duration={500} className="connect-link">Connect Wallet &nbsp;
                      <i className="fa fa-arrow-right" aria-hidden="true"></i>
                                </Link>
                                <Link link="/wallet" onClick={scrollToTop} spy={"true"} smooth={"true"} duration={500} className="simple-link">Connect without Wallet &nbsp;
                      <i className="fa fa-arrow-right" aria-hidden="true"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="banner-image">
                            <div className="inner">
                                <div className="rewards">
                                    <div>
                                        <h4>Total Rewards Distributed</h4>
                                        <h1>$947,720.59</h1>
                                    </div>
                                </div>
                                <img src={AntliaCoins} alt="Antlia Coins" className="ant-chains" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="defi-content">
                <div className="container">
                    <Row>
                        <Col lg={3} md={2} />
                        <Col lg={6} md={8} sm={12}>
                            <div className="total-assets">
                                <h4>Total Asset Value</h4>
                                <h1>$9,252,845.92</h1>
                            </div>
                        </Col>
                        <Col lg={3} md={2} />
                    </Row>
                </div>
            </div>
            <div className="market-overview">
                <div className="container">
                    <Row>
                        <Col lg={12}>
                            <h4>Market Overview</h4>
                            <div className="table-responsive">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Asset</th>
                                            <th>Total Value</th>
                                            <th>Total Borrow</th>
                                            <th>
                                                <div className="ana-coin">
                                                    <img src="https://i.imgur.com/Ql9Tpxm.png" alt="ANA Coin" />
                                                    <span>ANA per day</span>
                                                </div>
                                            </th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="coin-name">
                                                    <img src={usdc} alt="USD Coin" />
                                                    <span>USDC</span>
                                                </div>
                                            </td>
                                            <td>$7,593,578.20</td>
                                            <td className="borrow">Coming soon</td>
                                            <td>26,831%</td>
                                            <td>
                                                <div className="sb-bts">
                                                    <Button className="supply-btn">Supply</Button>
                                                    <Button className="borrow-btn">Borrow</Button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="coin-name">
                                                    <img src="https://i.imgur.com/Ql9Tpxm.png" alt="ANA Coin" />
                                                    <span>ANA</span>
                                                </div>
                                            </td>
                                            <td>$68,008.14</td>
                                            <td className="borrow">Coming soon</td>
                                            <td>10,057.42%</td>
                                            <td>
                                                <div className="sb-bts">
                                                    <Button className="supply-btn">Supply</Button>
                                                    <Button className="borrow-btn">Borrow</Button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="coin-name">
                                                    <img src={bnb} alt="Binance Coin" />
                                                    <span>BNB</span>
                                                </div>
                                            </td>
                                            <td>$706,118.13</td>
                                            <td className="borrow">Coming soon</td>
                                            <td>42.64%</td>
                                            <td>
                                                <div className="sb-bts">
                                                    <Button className="supply-btn">Supply</Button>
                                                    <Button className="borrow-btn">Borrow</Button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="coin-name">
                                                    <img src={color} alt="AColor Platform Coin" />
                                                    <span>CLR</span>
                                                </div>
                                            </td>
                                            <td>$706,118.13</td>
                                            <td className="borrow">Coming soon</td>
                                            <td>$706,118.13</td>
                                            <td>
                                                <div className="sb-bts">
                                                    <Button className="supply-btn">Supply</Button>
                                                    <Button className="borrow-btn">Borrow</Button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="coin-name">
                                                    <img src={kava} alt="KAVA Coin" />
                                                    <span>KAVA</span>
                                                </div>
                                            </td>
                                            <td>$1,301,899.32</td>
                                            <td className="borrow">Coming soon</td>
                                            <td>2,190%</td>
                                            <td>
                                                <div className="sb-bts">
                                                    <Button className="supply-btn">Supply</Button>
                                                    <Button className="borrow-btn">Borrow</Button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="coin-name">
                                                    <img src={cosmos} alt="Cosmos Coin" />
                                                    <span>ATOM</span>
                                                </div>
                                            </td>
                                            <td>$706,118.13</td>
                                            <td className="borrow">Coming soon</td>
                                            <td>26,831</td>
                                            <td>
                                                <div className="sb-bts">
                                                    <Button className="supply-btn">Supply</Button>
                                                    <Button className="borrow-btn">Borrow</Button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="coin-name">
                                                    <img src={eth} alt="Ethereum Coin" />
                                                    <span>ETH</span>
                                                </div>
                                            </td>
                                            <td>$7,593,578.20</td>
                                            <td className="borrow">Coming soon</td>
                                            <td>26,831</td>
                                            <td>
                                                <div className="sb-bts">
                                                    <Button className="supply-btn">Supply</Button>
                                                    <Button className="borrow-btn">Borrow</Button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="coin-name">
                                                    <img src={btc} alt="Bitcoin Coin" />
                                                    <span>BTC</span>
                                                </div>
                                            </td>
                                            <td>$7,593,578.20</td>
                                            <td className="borrow">Coming soon</td>
                                            <td>26,831</td>
                                            <td>
                                                <div className="sb-bts">
                                                    <Button className="supply-btn">Supply</Button>
                                                    <Button className="borrow-btn">Borrow</Button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="coin-name">
                                                    <img src={bch} alt="Bitcoin Cash Coin" />
                                                    <span>BCH</span>
                                                </div>
                                            </td>
                                            <td>$7,593,578.20</td>
                                            <td className="borrow">Coming soon</td>
                                            <td>26,831</td>
                                            <td>
                                                <div className="sb-bts">
                                                    <Button className="supply-btn">Supply</Button>
                                                    <Button className="borrow-btn">Borrow</Button>
                                                </div>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <div id="backedby">
                <div className="container">
                    <Row>
                        <Col lg={12}>
                            <h1>Backed by <span>industry giants</span></h1>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default StakeFlow;
