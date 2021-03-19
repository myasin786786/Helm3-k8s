import React from "react";
import { Row, Col } from "reactstrap";
import antliainvest from '../../assets/antlia1-invest.png';
import InvestmentForm from "../InvestmentForm/InvestmentForm";
import { Helmet } from "react-helmet";
import { websiteLink } from "../../store/config";

const Investment = () => {
    return (
        <div style={{ width: '100%' }}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Investment</title>
                <link rel="canonical" href={websiteLink + "/investment"} />
                <meta name="title" content="Invest in Antlia | An Incredible Investment opportunity " />
                <meta name="description" content="Antlia is offering an incredible investment opportunity through this private sale. Antlia Network is seeking the right investors to help co-create the Blockchain-to- Blockchain and Blockchain-to-Oracle communication systems. As an investor, we see you as an important part of the community." />
            </Helmet>
            <section id="investment-banner">
                <div className="container">
                    <div className="content-img">
                        <div className="banner-content">
                            <div>
                                <h1>Thanks for your interest in Antlia's Private Token Sale.</h1>
                                <p>
                                    Antlia is offering an incredible investment opportunity through this private sale. We will personally guide you through the investment process. Please in the form below to begin your journey.
                                </p>
                            </div>
                        </div>
                        <div className="banner-image">
                            <img src={antliainvest} alt="antlia investment" />
                        </div>
                    </div>
                </div>
            </section>
            <section id="private-sale">
                <div className="container">
                    <Row>
                        <Col lg={2} md={1} sm={12} />
                        <Col lg={8} md={10} sm={12}>
                            <div className="desc">
                                <h1>The Private Sale is Open</h1>
                                <p>
                                    This sale is only available to those who have been specifically invited.
                                    If you have not received an invite, contact us about availability at contact@antlia.io.
                                </p>
                                <p>
                                    Antlia Network is seeking the right investors to help co-create the Blockchain-to-
                                    Blockchain and Blockchain-to-Oracle communication systems. As an investor,
                                    we see you as an important part of the community.
                                </p>
                            </div>
                        </Col>
                        <Col lg={2} md={1} sm={12} />
                    </Row>
                </div>
            </section>
            <InvestmentForm />
        </div>
    );
};

export default Investment;