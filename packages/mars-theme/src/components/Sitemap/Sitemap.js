import React from "react";
import Link from "../link";
import { Row, Col, Spinner } from "reactstrap";
import { Head } from "frontity";

const Sitemap = () => {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.antlia.io/sitemap/" />
      </Head>

      <div className="blogs">
      <div className="aboutbg">
                <div className="container">
                    <Row>
                        <Col lg={2} />
                        <Col lg={8} sm={12}>
                            <div className="about-desc">
                                <div>
                                    <h2>Sitemap</h2>
                                </div>
                            </div>
                        </Col>
                        <Col lg={2} />
                    </Row>
                </div>
            </div>
      </div>

      <div className="container">
        <div className="banner">
          <div className="row">
            <div className="col-md-12">
              <div className="bannerCont">
                <h6 className="sitemap-head">Home</h6>
                <ul className="sitemap-list">
                  <li><Link link="/">Technology</Link></li>
                  <li><Link link="antlia-defi">StakeFlow</Link></li>
                  <li><Link link="/investment/">Investment</Link></li>
                  <li><Link link="/about-us">About Us</Link></li>
                  <li><Link link="/antlia-faucet">Antlia Faucet</Link></li>
                  <li><Link link="/antlia-wallet">Antlia Wallet</Link></li>
                  <li><Link link="/antlia-explorer">Antlia Explorer</Link></li>
                </ul>
                  <h6 className="sitemap-head"><Link link="/blog">Blogs</Link></h6>
                  <h6 className="sitemap-head"><Link link="/events">Events</Link></h6>
                  <h6 className="sitemap-head"><Link link="/antlia-defi">Antlia DeFi</Link></h6>                  
                  <h6 className="sitemap-head"><Link link="/privacy-policy">Privacy Policy</Link></h6>
                  <h6 className="sitemap-head"><Link link="/antlia-blockchain">Antlia Blockchain</Link></h6>
                  <h6 className="sitemap-head"><Link link="/antlia-exchange">Antlia Exchange</Link></h6>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sitemap;
