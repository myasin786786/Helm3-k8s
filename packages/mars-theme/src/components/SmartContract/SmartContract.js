import React from "react";
import { Row, Col } from "reactstrap";
import sccoins from '../../assets/sc-coins.png';
import scdottedline from '../../assets/sc-dotted-line.png';
import circle from '../../assets/circle.png';
// import dot from '../../assets/react.png';
import deskview from '../../assets/sc-res.png';
// import scres from '../../assets/SmartContract1.png';
// import { Link } from "react-scroll";

// const text1 = "Antlia oracles are built using web assembly based smart contracts. Antlia oracles can facilitate the transparent and trussless execution of smart contracts"
// const text2 = "Antlia oracles are built using web assembly based smart contracts. Antlia oracles can facilitate the transparent and trussless execution of smart contracts to bring data in and out of blockchain."

class SmartContract extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noitems: false,
      show: false
    };
  }

  changeShow = () => {
    this.setState({
      show: !this.state.show
    })
  }
  render() {
    // const { show } = this.state
    return (
      <section id="smart-contract">
          <div className="container">
            <Row>
              <Col lg={6} md={12}>
                <div className="desc">
                  <div className="content">
                    {/* <h4>Technology</h4> */}
                    <h2>Oracle with Trusted Smart Contract</h2>
                    {/* {
                      show ? <p>{text2}</p> : <p>{text1}</p>
                    }
                    <button className="showBtn" onClick={this.changeShow}>{show ? <>Show Less <i className="fa fa-angle-up" aria-hidden="true"></i></> : <>Show More <i className="fa fa-angle-down" aria-hidden="true"></i></>}</button> */}
                    <p>Antlia oracles are built using web assembly based smart contracts. Antlia oracles can facilitate the transparent and trussless execution of smart contracts to bring data in and out of blockchain.</p>
                    <a
                      href="https://docs.antlia.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read more Smart Contract
                    </a>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={12}>
                <div className="sc-image">
                  {/* <div className="arrow-cont"><div className="arrow"></div></div> */}
                  {/* <div id="earth"></div> */}
                  <div className="dot dot1"/>
                  <div className="dot dot2"/>
                  <div className="dot dot3"/>
                  <div className="dot dot4"/>
                  {/* <div className="vl"/> */}
                  <img
                    src={circle}
                    className="circle-move"
                    alt="Circle"
                  />
                  <div className="globe">
                    <div className="tech-slideshow">
                      <div className="mover-1"></div>
                      <div className="mover-1"></div>
                    </div>
                  </div>
                  {/* <img src={scres} alt="Smart Contract" className="res-view" /> */}
                  <img src={deskview} alt="Smart Contract" className="res-view" />
                  <img src={scdottedline} alt="Smart Contract" className="sc-dot-line" />
                  <img src={sccoins} alt="Smart Contract" className="sc-coins" />
                </div>
              </Col>
            </Row>
          </div>
        </section>
    );
  }
}

export default SmartContract;
