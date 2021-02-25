import React from "react";
import rewards from '../../assets/coins/rewards.png';
import usdc from '../../assets/coins/usdc.png';
import bnb from '../../assets/coins/bnb.png';
import color from '../../assets/coins/color.png';
import kava from '../../assets/coins/kava.png';
import cosmos from '../../assets/coins/cosmos.png';
import eth from '../../assets/coins/eth.png';
import btc from '../../assets/coins/btc.png';
import bch from '../../assets/coins/bch.png';
import { Row, Col, Button } from "reactstrap";
// import { animateScroll as scroll } from "react-scroll";
// import { FormattedMessage } from "react-intl";

const Wallet = () => {
    const [
        show, setShow
    ] = React.useState(false)

    const changeShow = () => {
        setShow(!show)
    }
    return (
        <div style={{ width: '100%' }}>
            <div id="wallet-top">
                <div className="container">
                    <div className="totals">
                        <div className="item dB">
                            <div className="inner">
                                <h4>Rewards APY (Est)</h4>
                                <h1>0</h1>
                            </div>
                        </div>
                        <div className="item left">
                            <div>
                                <h4>Total Supplied</h4>
                                <h1>$0.00</h1>
                            </div>
                        </div>
                        <div className="item center dN">
                            <div className="inner">
                                <h4>Rewards APY (Est)</h4>
                                <h1>0</h1>
                            </div>
                        </div>
                        <div className="item right">
                            <div>
                                <h4>Total Supplied</h4>
                                <h1>$0.00</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wallet">
                <img src="https://i.imgur.com/X6BFwq5.png" alt="dots style" className="dotss" />
                <div className="market-overview">
                    <div className="container">
                        <Row>
                            <Col lg={12}>
                                <div className="table-responsive">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Asset</th>
                                                <th>Supplied</th>
                                                <th>Borrowed</th>
                                                <th>
                                                    <div className="ana-coin">
                                                        <img src={rewards} alt="Rewards" />
                                                        <span>Rewards APY (Est)</span>
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
                                                <td>$0.00</td>
                                                <td className="borrow">Coming soon</td>
                                                <td>33.00%</td>
                                                <td>
                                                    <div className="sb-bts">
                                                        <Button className="supply-btn">Supply</Button>
                                                        <Button className="borrow-btn">Withdraw</Button>
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
                                                <td>$0.00</td>
                                                <td className="borrow">Coming soon</td>
                                                <td>818.54%</td>
                                                <td>
                                                    <div className="sb-bts">
                                                        <Button className="supply-btn">Supply</Button>
                                                        <Button className="borrow-btn">Withdraw</Button>
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
                                                <td>$0.00</td>
                                                <td className="borrow">Coming soon</td>
                                                <td>29.42%</td>
                                                <td>
                                                    <div className="sb-bts">
                                                        <Button className="supply-btn">Supply</Button>
                                                        <Button className="borrow-btn">Withdraw</Button>
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
                                                <td>$0.00</td>
                                                <td className="borrow">Coming soon</td>
                                                <td>100.77%</td>
                                                <td>
                                                    <div className="sb-bts">
                                                        <Button className="supply-btn">Supply</Button>
                                                        <Button className="borrow-btn">Withdraw</Button>
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
                                                <td>$0.00</td>
                                                <td className="borrow">Coming soon</td>
                                                <td>51.94%</td>
                                                <td>
                                                    <div className="sb-bts">
                                                        <Button className="supply-btn">Supply</Button>
                                                        <Button className="borrow-btn">Withdraw</Button>
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
                                                <td>$0.00</td>
                                                <td className="borrow">Coming soon</td>
                                                <td>139.44%</td>
                                                <td>
                                                    <div className="sb-bts">
                                                        <Button className="supply-btn">Supply</Button>
                                                        <Button className="borrow-btn">Withdraw</Button>
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
                                                <td>$0.00</td>
                                                <td className="borrow">Coming soon</td>
                                                <td>139.44%</td>
                                                <td>
                                                    <div className="sb-bts">
                                                        <Button className="supply-btn">Supply</Button>
                                                        <Button className="borrow-btn">Withdraw</Button>
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
                                                <td>$0.00</td>
                                                <td className="borrow">Coming soon</td>
                                                <td>139.44%</td>
                                                <td>
                                                    <div className="sb-bts">
                                                        <Button className="supply-btn">Supply</Button>
                                                        <Button className="borrow-btn">Withdraw</Button>
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
                                                <td>$0.00</td>
                                                <td className="borrow">Coming soon</td>
                                                <td>139.44%</td>
                                                <td>
                                                    <div className="sb-bts">
                                                        <Button className="supply-btn">Supply</Button>
                                                        <Button className="borrow-btn">Withdraw</Button>
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
                <div className="rewards-info">
                    <div className="container">
                        <Row>
                            <Col lg={12}>
                                <div className="heading">
                                    <img src="https://i.imgur.com/Ql9Tpxm.png" alt="ANA Coin" />
                                    <h2>Antlia Rewards</h2>
                                </div>
                                <div className="detail-list">
                                    {
                                        show ? <>
                                            <div className="item">
                                                <div className="left">
                                                    <div className="property">
                                                        <p>Unclaimed Balance</p>
                                                    </div>
                                                    <div className="value">
                                                        <p>0.0000 ANA</p>
                                                    </div>
                                                </div>
                                                <span className="vl" />
                                                <div className="right">
                                                    <div className="property">
                                                        <p>TBD</p>
                                                    </div>
                                                    <div className="value">
                                                        <Button className="claim">Claim</Button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="left">
                                                    <div className="property">
                                                        <p>Claimed Balance</p>
                                                        <i className="fa fa-lock" />
                                                    </div>
                                                    <div className="value">
                                                        <p>0.0000 ANA</p>
                                                    </div>
                                                </div>
                                                <span className="vl" />
                                                <div className="right">
                                                    <div className="property">
                                                        <p>TBD</p>
                                                    </div>
                                                    <div className="value">
                                                        <Button className="next">Next Unlock</Button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="left">
                                                    <div className="property">
                                                        <p>Unclaimed Balance</p>
                                                    </div>
                                                    <div className="value">
                                                        <p>0.0000 ANA</p>
                                                    </div>
                                                </div>
                                                <span className="vl" />
                                                <div className="right">
                                                    <div className="property">
                                                        <p>TBD</p>
                                                    </div>
                                                    <div className="value">
                                                        <Button className="claim">Claim</Button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="left">
                                                    <div className="property">
                                                        <p>Claimed Balance</p>
                                                        <i className="fa fa-lock" />
                                                    </div>
                                                    <div className="value">
                                                        <p>0.0000 ANA</p>
                                                    </div>
                                                </div>
                                                <span className="vl" />
                                                <div className="right">
                                                    <div className="property">
                                                        <p>TBD</p>
                                                    </div>
                                                    <div className="value">
                                                        <Button className="next">Next Unlock</Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </> : <>  <div className="item">
                                            <div className="left">
                                                <div className="property">
                                                    <p>Unclaimed Balance</p>
                                                </div>
                                                <div className="value">
                                                    <p>0.0000 ANA</p>
                                                </div>
                                            </div>
                                            <span className="vl" />
                                            <div className="right">
                                                <div className="property">
                                                    <p>TBD</p>
                                                </div>
                                                <div className="value">
                                                    <Button className="claim">Claim</Button>
                                                </div>
                                            </div>
                                        </div>
                                                <div className="item">
                                                    <div className="left">
                                                        <div className="property">
                                                            <p>Claimed Balance</p>
                                                            <i className="fa fa-lock" />
                                                        </div>
                                                        <div className="value">
                                                            <p>0.0000 ANA</p>
                                                        </div>
                                                    </div>
                                                    <span className="vl" />
                                                    <div className="right">
                                                        <div className="property">
                                                            <p>TBD</p>
                                                        </div>
                                                        <div className="value">
                                                            <Button className="next">Next Unlock</Button>
                                                        </div>
                                                    </div>
                                                </div></>
                                    }
                                </div>
                                <div className="expand-btn">
                                    <button className="showBtn" onClick={changeShow}>{show ? <>Show Less <i className="fa fa-angle-up" aria-hidden="true"></i></> : <>Show More <i className="fa fa-angle-down" aria-hidden="true"></i></>}</button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Wallet;