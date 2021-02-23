import React from "react";
import { Row, Col } from "reactstrap";
// import DevTool from '../../assets/DevTools.png';
// import { Link } from "react-scroll";
import DevToolTabs from '../DevToolTabs/DevToolTabs'

// const text1 = "Antlia is a turing complete blockchain embedded with a VM to write smart contracts in web assembly. Antlia VM has a series of tooling to help developers community."
// const text2 = "Antlia is a turing complete blockchain embedded with a VM to write smart contracts in web assembly. Antlia VM has a series of tooling to help developers community."

class DevTools extends React.Component {
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
      <div>
        <div id="dev-tools">
          <div className="container">
            <Row>
              <Col lg={6} md={12}>
                <div className="side-img">
                  <DevToolTabs />
                  
                  {/* <img src={DevTool} alt="Dev Tools" /> */}
                </div>
              </Col>
              <Col lg={6} md={12}>
                <div className="desc">
                  <div className="content">
                    {/* <h4>Technology</h4> */}
                    <h2>Antlia VM with developing tools</h2>
                    {/* {
                      show ? <p>{text2}</p> : <p>{text1}</p>
                    }
                    <button className="showBtn" onClick={this.changeShow}>{show ? <>Show Less <i class="fa fa-angle-up" aria-hidden="true"></i></> : <>Show More <i class="fa fa-angle-down" aria-hidden="true"></i></>}</button> */}
                    <p>Antlia is a turing complete blockchain embedded with a VM to write smart contracts in web assembly. Antlia VM has a series of tooling to help developers community.</p>
                    <a
                      href="https://docs.antlia.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read more Antlia VM with Dev tools
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default DevTools;
