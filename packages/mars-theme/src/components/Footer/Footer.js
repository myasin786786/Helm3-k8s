import React, { useState, useEffect } from "react";
import { Row, Col } from 'reactstrap';
import { animateScroll as scroll } from "react-scroll";
import logo from '../../assets/color.svg';
import Link from "../link";

const Footer = (props) => {
  const [path, setPath] = useState("")
  useEffect(() => {
    setPath(props.props)
  }, [props])
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <section id="footer">
      <div className="container">
        <Row>
          <Col lg={3} md={12} sm={12}>
            <div className="copyright">
              <img src={logo} alt="Antlia" />
              <p>Antlia develop with love by <a href="https://www.rnssol.com/" target="_blank" rel="noopener noreferrer">RNS Solutions</a> Labs.</p>
            </div>
          </Col>
          <Col lg={9} md={12} sm={12}>
            <div className="footer-col">
              <div className="footer-item">
                <h4>About</h4>
                <ul>
                  <li><a href="https://docs.antlia.io/antlia-litepaper" target="_blank" rel="noopener noreferrer">Litepaper</a></li>
                  <li><Link link="/blog" onClick={scrollToTop} spy={"true"} smooth={"true"} duration={500}>Blogs</Link></li>
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
                  <li><a href="https://forms.gle/Bzp9ocmRzd4yisJC9" target="_blank" rel="noopener noreferrer">Validators</a></li>
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
                  <li><a href="https://www.instagram.com/antlia.blockchain/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                </ul>
              </div>
              <div className="footer-item">
                <h4>Help</h4>
                <ul>
                  <li><Link link="/privacy-policy" onClick={scrollToTop} spy={"true"} smooth={"true"} duration={500}>Privacy Policy</Link></li>
                  <li><Link link="/sitemap" onClick={scrollToTop} spy={"true"} smooth={"true"} duration={500}>Sitemap</Link></li>
                  <li><a href="mailto:contact@antlia.io">contact@antlia.io</a></li>
                </ul>
              </div>
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