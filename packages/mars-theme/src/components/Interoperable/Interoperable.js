import React from "react";
import { Row, Col } from "reactstrap";
import Interoperables from '../../assets/Interoperable.png';
import interopeline from '../../assets/interope-lines.png';
import interopecoin from '../../assets/interope-coin.png';
// import { Link } from "react-scroll";

// const text1 = "Blockchains are not only different because of their consensus but blockchain have different architecture design, many languages and framework to program,"
// const text2 = "Blockchains are not only different because of their consensus but blockchain have different architecture design, many languages and framework to program, and different transaction structure."

class Interoperable extends React.Component {
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
      <section id="interoperable">
          <div className="container">
            <Row>
              <Col lg={6} md={12}>
                <div className="desc">
                  <div className="content">
                    {/* <h4>Technology</h4> */}
                    <h2>Interoperable</h2>
                    {/* {
                      show ? <p>{text2}</p> : <p>{text1}</p>
                    }
                    <button className="showBtn" onClick={this.changeShow}>{show ? <>Show Less <i className="fa fa-angle-up" aria-hidden="true"></i></> : <>Show More <i className="fa fa-angle-down" aria-hidden="true"></i></>}</button> */}
                    <p>Blockchains are not only different because of their consensus but blockchain have different architecture design, many languages and framework to program, and different transaction structure.</p>
                    <a
                      href="https://docs.antlia.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read more Interoperable
                    </a>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={12}>
                <div className="interope">
                  <div className="dot dot1" />
                  <div className="dot dot2" />
                  <div className="top-left">
                    <div className="dot dot3" />
                    <div className="dot dot4" />
                  </div>
                  <div className="top-right">
                    <div className="dot dot5" />
                    <div className="dot dot6" />
                  </div>
                  <img src={interopeline} className="int-dot-line" alt="Interoperable Interoperate Data interoperability Interoperability in software engineering " />
                  <img src={interopecoin} className="int-coins" alt="Database interoperability Enterprise interoperability Digital interoperability Global interoperability" />
                  <img src={Interoperables} className="res-view" alt="Interoperable Interoperate Data interoperability Interoperability in software engineering Database interoperability Enterprise interoperability Digital interoperability Global interoperability" />
                </div>
              </Col>
            </Row>
          </div>
        </section>
    );
  }
}

export default Interoperable;
