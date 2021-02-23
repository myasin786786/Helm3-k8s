import React from "react";
import { Row, Col } from "reactstrap";
import ConsensusEngine from '../../assets/ConsensusEngine.png';
// import centerlines from '../../assets/centerlines.png';
// import ConsensusEngineMain from '../../assets/ConsensusEngineMain.png';
// import { Link } from "react-scroll";
// import ParticleAnimation from 'react-particle-animation'

// const text1 = "Antlia has proposed an approach to consensus called Rollover Proof of Stake “rPoS” and its consensus engine is modified tendermint “PBFT”."
// const text2 = <p>
//   Antlia has proposed an approach to consensus called Rollover
//   Proof of Stake “rPoS” and its consensus engine is modified
// tendermint “PBFT”.<br />
// Antlia rPoS consensus engine selects the validator nodes
// on the basis of 10% roll over after every 5 blocks. Antlia
// Rollover PoS helps to achieve decentralisation with high
// throughput and security. rPoS eliminates PoW waste
// of computation resources and centralisation of DPoS/PoS.
// Antlia consensus provides balance between liveness and
// safety. The Antlia consensus protocol provides a high
// security level through unbiased randomness generated
// at every 05 blocks proposal.
// </p>

class Consensus extends React.Component {
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
      <section id="consensus">
          <div className="container">
            <Row>
              <Col lg={6} md={12}>
                <div className="side-img particles">
                  <img src={ConsensusEngine} alt="Consensus Engine" />
                  {/* <img src={ConsensusEngineMain} className="engine-img" alt="Consensus Engine" /> */}
                  {/* <img src={centerlines}  className="cl-img" alt="Consensus Engine" /> */}
                  {/* <div class="bubble-wrap">
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                  </div> */}
                  <div className="dot-container">
                    <div className="dot-in">
                      <div className="dot-one">
                        <div className="dot dot11" />
                      </div>
                      <div className="dot-two">
                        <div className="dot dot22" />
                      </div>
                      <div className="dot-three">
                        <div className="dot dot22" />
                      </div>
                      <div className="dot-four">
                        <div className="dot dot11" />
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={12}>
                <div className="desc">
                  <div className="content">
                    {/* <h4>Technology</h4> */}
                    <h2>Rollover PoS Consensus</h2>
                    <p>
                      Antlia has proposed an approach to consensus called Rollover
                      Proof of Stake “rPoS” and its consensus engine is modified
tendermint “PBFT”.<br />
Antlia rPoS consensus engine selects the validator nodes
on the basis of 10% roll over after every 5 blocks.
{/* Antlia rPoS consensus engine selects the validator nodes
on the basis of 10% roll over after every 5 blocks. Antlia
Rollover PoS helps to achieve decentralisation with high
throughput and security. rPoS eliminates PoW waste
of computation resources and centralisation of DPoS/PoS.
Antlia consensus provides balance between liveness and
safety. The Antlia consensus protocol provides a high
security level through unbiased randomness generated
at every 05 blocks proposal. */}
                    </p>
                    {/* {
                      show ? <p>{text2}</p> : <p>{text1}</p>
                    } */}
                    {/* <button className="showBtn" onClick={this.changeShow}>{show ? <>Show Less <i class="fa fa-angle-up" aria-hidden="true"></i></> : <>Show More <i class="fa fa-angle-down" aria-hidden="true"></i></>}</button> */}
                    {/* <Link to="#">Show Less */}
                    {/* <i className="fa fa-external-link" aria-hidden="true"></i> */}
                    {/* </Link> */}
                    <a
                      href="https://docs.antlia.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read more Rollover PoS Consensus
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </section>
    );
  }
}

export default Consensus;
