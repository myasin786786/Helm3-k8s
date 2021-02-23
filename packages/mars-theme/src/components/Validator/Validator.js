import React from "react";
import { Row, Col } from "reactstrap";
import MainNavbar from "../Common/MainNavbar";
import Footer from "../Common/Footer";
import validatorchain from '../../assets/chain.svg';
import ValidatorForm from "../ValidatorForm/ValidatorForm";

// import { FormattedMessage } from "react-intl";

const Validator = () => {
    return (
        <div>
            <MainNavbar />
            <section id="validator-banner">
                <div className="container">
                    <div className="content-img">
                        <div className="banner-content">
                            <div>
                                <h2>Become a</h2>
                                <h1>Validator</h1>
                                <p>
                                    By becoming Antlia's validator, you can improve your system's efficiency by participating in governance through voting on the next block.
                  </p>
                            </div>
                        </div>
                        <div className="banner-image">
                            <img src={validatorchain} alt="antlia validator chain" />
                        </div>
                    </div>
                </div>
            </section>
            <section id="private-sale">
                <div className="container">
                    <Row>
                        <Col lg={2} md={1} sm={12} />
                        <Col lg={8} md={10} sm={12}>
                            <div className="validator-form">
                                <ValidatorForm />
                            </div>
                        </Col>
                        <Col lg={2} md={1} sm={12} />
                    </Row>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Validator;
