import React, { useState, useEffect } from "react";
import { Row, Col } from 'reactstrap';
import { animateScroll as scroll } from "react-scroll";
import logo from '../../assets/color.svg';
import Link from "../link";

// const text1 = "ANTLIA is interoperable, Scalable Blockchain for decentralised finance."
// const text2 = "ANTLIA is interoperable, Scalable Blockchain for decentralised finance. It is a truly Decentralized Interoperable Blockchain Protocol for exchange of assets and data. Transactions fees are lower than existing Fiat solutions. Transaction settlement time is less than 1 seconds. Antlia trusted smart contract based on web assembly provide liberty of language restriction to write smart contracts secure and scalable."

const Footer = (props) => {
  // const [show,setShow] = useState(false)
  const [path, setPath] = useState("")
  // const changeShow = () => {
  //   setShow(!show)
  // }
  useEffect(() => {
    setPath(props.props)
  }, [props])

  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  // const { show } = this.state

  return (
    <section id="footer">
      {/* Footer section */}

      <div className="container">
        {/* <Row>
                <Col lg={12}>
                  <div className="extra-content">
                    {
                      show ? <span>{text2}</span> : <span>{text1}</span>
                    }
                    <button className="showBtn" onClick={this.changeShow}>{show ? 'Show Less' : 'Show More'}</button>
                  </div>
                </Col>
              </Row> */}
        <Row>
          <Col lg={3} md={12} sm={12}>
            <div className="copyright">
              <img src={logo} alt="Antlia" />
              <p>Antlia develop with love by <a href="https://www.rnssol.com/" target="_blank" rel="noopener noreferrer">RNS Solutions</a> Labs.</p>
            </div>
          </Col>
          <Col lg={9} md={12} sm={12}>
            <div className="footer-col">
              {/* <div className="footer-item">
                      <h4>Company</h4>
                      <ul>
                        <li><NavLink link="#" spy={"true"} smooth={"true"} duration={500}>Team</NavLink></li>
                        <li><Link link="#">Advisors</Link></li>
                        <li><a href="https://www.rnssol.com/careers" target="_blank" rel="noopener noreferrer">Careers</a></li>
                        <li><Link link="/">Privacy Policy</Link></li>
                      </ul>
                    </div> */}

              <div className="footer-item">
                <h4>About</h4>
                <ul>
                  <li><a href="https://docs.antlia.io/antlia-litepaper" target="_blank" rel="noopener noreferrer">Litepaper</a></li>
                  {/* <li><a href="https://medium.com/@rnssol" target="_blank" rel="noopener noreferrer" >Blogs</a></li> */}
                  {/* <li><a href="https://antliablockchain.medium.com/" target="_blank" rel="noopener noreferrer" >Blogs</a></li> */}
                  <li><Link link="/blogs" onClick={scrollToTop} spy={"true"} smooth={"true"} duration={500}>Blogs</Link></li>
                  <li><Link link="/events" onClick={scrollToTop} spy={"true"} smooth={"true"} duration={500}>Media Kit</Link></li>
                  <li><a href="https://discord.gg/uH497RVZNA" target="_blank" rel="noopener noreferrer">Community</a></li>
                </ul>
              </div>

              <div className="footer-item">
                <h4>Technology</h4>
                <ul>
                  <li><Link link="/antlia-blockchain">Blockchain</Link></li>
                  <li><Link link="/antlia-exchange">Exchange</Link></li>
                  <li><Link link="/antlia-defi">DeFi</Link></li>
                  {/* <li><Link link="/">Roadmap</Link></li> */}
                  <li><a href="https://forms.gle/Bzp9ocmRzd4yisJC9" target="_blank" rel="noopener noreferrer">Validators</a></li>
                  {/* <li><Link link="/validator" onClick={scrollToTop} spy={"true"} smooth={"true"} duration={500}>Validators</Link></li> */}
                  {/* <li><Link link="/">Developers</Link></li> */}
                </ul>
              </div>

              <div className="footer-item">
                <h4>Follow Us</h4>
                <ul>
                  <li><a href="https://github.com/antlia-io" target="_blank" rel="noopener noreferrer">Github</a></li>
                  <li><a href="https://t.me/Antlia_Official" target="_blank" rel="noopener noreferrer">Telegram</a></li>
                  <li><a href="https://www.reddit.com/user/antlia-by-rns" target="_blank" rel="noopener noreferrer">Reddit</a></li>
                  <li><a href="https://www.linkedin.com/company/antliaofficial" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                  <li><a href="https://www.facebook.com/AntliaOfficial/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                  <li><a href="https://twitter.com/antlia_chain" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                  <li><a href="https://www.youtube.com/channel/UCRRUcJfQYXSGXwoFu72o-nw" target="_blank" rel="noopener noreferrer">YouTube</a></li>
                  <li><a href="https://www.instagram.com/antlia.protocol/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                </ul>
              </div>
              <div className="footer-item">
                <h4>Help</h4>
                <ul>
                  {/* <li><a href="https://docs.google.com/document/d/1-zP8IMKwL4SYeclRWxoNFRO2RRbdEtWm46WkF3hjCn0/edit#" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li> */}
                  {/* <li><Link link="/">Cookie Policy</Link></li> */}
                  {/* <li><Link link="/">Terms</Link></li> */}
                  {/* <li><Link link="/">Roadmap</Link></li> */}
                  {/* <li><Link link="/">Disclaimer</Link></li> */}
                  <li><Link link="/privacypolicy" onClick={scrollToTop} spy={"true"} smooth={"true"} duration={500}>Privacy Policy</Link></li>
                  <li><span>contact@antlia.io</span></li>
                </ul>
              </div>
              {/* <div className="footer-item">
                      <h4>News Feeds</h4>
                      <ul>
                        <li><a href="https://www.rnssol.com/" target="_blank" rel="noopener noreferrer">RNS Solutions</a></li>
                        <li><a href="https://raiet.rnssol.com/" target="_blank" rel="noopener noreferrer">RAIET</a></li>
                        <li><a href="https://medium.com/@rnssol" target="_blank" rel="noopener noreferrer">Blogs</a></li>
                      </ul>
                    </div> */}
            </div>
          </Col>
        </Row>
        {path === "/" ? (
          <div className="gotop vert-move">
            <Link link="/" onClick={scrollToTop}><i className="fa fa-arrow-up"></i></Link>
          </div>
        ) : null}
      </div>
    </section >
  );

}

export default Footer;
