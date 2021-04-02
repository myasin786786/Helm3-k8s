import React from "react";
import { Row, Col } from "reactstrap";
import shakil from '../../assets/team/shakil.svg';
import alqarni from '../../assets/team/alqarni.jpg';
import alkatheiri from '../../assets/team/alkatheiri.jpeg';
import sajjad from '../../assets/team/sajjad.jpeg';
import shehroze from '../../assets/team/shehroze.jpg';
import faisal from '../../assets/team/faisal.jpg';
import ali from '../../assets/team/ali.jpg';
import waqas from '../../assets/team/waqas.jpg';
import bilal from '../../assets/team/bilal.jpg';
import ehtsham from '../../assets/team/ehtsham.jpg';
import sarmad from '../../assets/team/sarmad.jpg';
import aniq from '../../assets/team/aniq.jpg';
import inayat from '../../assets/team/inayat.jpg';
import fasih from '../../assets/team/fasih.jpg';
import hamza from '../../assets/team/hamza.jpg';
import rashid from '../../assets/team/rashid.jpg';
import waqar from '../../assets/team/waqar.jpg';
import abasit from '../../assets/team/abasit.jpg';
import danyal from '../../assets/team/danyal.jpg';
import saifahmad from '../../assets/team/saifahmad.jpg';
import amanullah from '../../assets/team/amanullah.jpg';
import jawadahmed from '../../assets/team/jawadahmed.jpg';
import ahmedtariq from '../../assets/team/ahmedtariq.jpg';
import { Helmet } from "react-helmet";
import ContactUs from "../ContactUs/ContactUs";
import { websiteLink } from "../../store/config";

const AboutUs = () => {
    return (
        <div className="w-100">
            <Helmet>
                <meta charSet="utf-8" />
                <title>About Us</title>
                <link rel="canonical" href={websiteLink + "/about-us"} />
                <meta name="title" content="Learn more about us and the team." />
                <meta name="description" content="Antlia is committed to bringing huge improvement in blockchain speed, scale, cost and user experience. Our dedicated team of entrepreneurs, engineers and researchers are passionately working to achieve this goal." />
            </Helmet>
            <div id="about">
                <div className="aboutbg">
                    <div className="container">
                        <Row>
                            <Col lg={2} />
                            <Col lg={8} sm={12}>
                                <div className="about-desc">
                                    <div>
                                        <h2>The Antlia Team</h2>
                                        <p>Through Antlia we give anyone, anywhere easy access to the digital economy, by bringing a 1000x improvement in blockchain speed, scale, cost and user experience. To do this we’ve built a hardcore team of entrepreneurs, engineers and researchers with which we can literally build rockets.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={2} />
                        </Row>
                    </div>
                </div>
                <div className="team">
                    <div className="container">
                        <Row className="team-list">
                            <Col lg={4} md={12} sm={12} xs={12}>
                                <div className="single-item">
                                    <div className="team-img">
                                        <a href="https://www.linkedin.com/in/shakilkaist/" target="_blank" rel="noopener noreferrer">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                        <div className="link-cont">
                                            <img src={shakil} alt="Sir Dr. Shakil Muhammad Ph,D Blockchain" />
                                        </div>
                                    </div>
                                    <h4>CEO</h4>
                                    <h2>Shakil Muhammad, PhD</h2>
                                    <span className="under-line" />
                                    <p>Blockchain R&D specialist, founder of RNS Solutions, having 12+ years of experience in Software Security as Dy. Director Cyber Incident Response Team. Completed 40+ projects including blockchains, exchanges, wallets, dapps, and other infrastructures.</p>

                                </div>
                            </Col>
                            <Col lg={4} md={12} sm={12} xs={12}>
                                <div className="single-item">
                                    <div className="team-img">
                                        <a href="https://www.linkedin.com/in/dr-mohammed-alqarni-6a6b65142/" target="_blank" rel="noopener noreferrer">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                        <div className="link-cont">
                                            <img src={alqarni} alt="Sir Dr. Alqarni Blockchain" />
                                        </div>
                                    </div>
                                    <h4>COO</h4>
                                    <h2>Dr. Mohammad Alqarni</h2>
                                    <span className="under-line" />
                                    <p>I am in! This was my response when I was approached to cofound and serve as the COO of a start-up that is disruptive in nature. Going about the daily work of Antlia.io is super exciting, thinking about the future is beyond words!</p>
                                </div>
                            </Col>
                            <Col lg={4} md={12} sm={12} xs={12}>
                                <div className="single-item">
                                    <div className="team-img">
                                        <a href="https://www.linkedin.com/in/mohammed-alkatheiri-85594b60" target="_blank" rel="noopener noreferrer">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                        <div className="link-cont">
                                            <img src={alkatheiri} alt="Sir Dr. Mohammad Alkatheiri Blockchain" />
                                        </div>
                                    </div>
                                    <h4>CIO</h4>
                                    <h2>Dr Mohammad Alkatheiri</h2>
                                    <span className="under-line" />
                                    <p>Cybersecurity R&D specialist, Co-founder of TrustedChain.io, having 10+ years’ experience in developing solutions for complex cybersecurity and technology challenges. He leads the way in bringing critical foresight on every emerging technology, from artificial intelligence to cybersecurity to Blockchain.</p>

                                </div>
                            </Col>
                        </Row>
                        <Row className="team-list">
                            <Col lg={4} md={6} sm={6} xs={12}>
                                <div className="single-item">
                                    <div className="team-img">
                                        <a href="https://www.linkedin.com/in/chauhdary/" target="_blank" rel="noopener noreferrer">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                        <div className="link-cont">
                                            <img src={sajjad} alt="Sir Dr. Sajjad Hussain Blockchain" />
                                        </div>
                                    </div>
                                    <h4>Senior Researcher</h4>
                                    <h2>Dr. Sajjad hussain</h2>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={6} xs={12}>
                                <div className="single-item">
                                    <div className="team-img">
                                        <a href="https://www.linkedin.com/in/shehroze-rao-9395a7168/" target="_blank" rel="noopener noreferrer">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                        <div className="link-cont">
                                            <img src={shehroze} alt="Sir Shehroze Blockchain" />
                                        </div>
                                    </div>
                                    <h4>Chief Marketing Officer</h4>
                                    <h2>Shehroze Rao</h2>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={6} xs={12}>
                                <div className="single-item">
                                    <div className="team-img">
                                        <a href="https://www.linkedin.com/in/faisal-naveed-5a442b156/" target="_blank" rel="noopener noreferrer">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                        <div className="link-cont">
                                            <img src={faisal} alt="Faisal Naveed Blockchain" />
                                        </div>
                                    </div>
                                    <h4>Chief Technical Officer</h4>
                                    <h2>Faisal Naveed</h2>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={6} xs={12}>
                                <div className="single-item">
                                    <div className="team-img">
                                        <a href="https://www.linkedin.com/in/muhammad-ali-759b39104/" target="_blank" rel="noopener noreferrer">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                        <div className="link-cont">
                                            <img src={ali} alt="Muhammad Ali Blockchain" />
                                        </div>
                                    </div>
                                    <h4>Design Director</h4>
                                    <h2>Muhammad Ali</h2>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={6} xs={12}>
                                <div className="single-item">
                                    <div className="team-img">
                                        <a href="https://www.linkedin.com/in/waqas-hakeem-80644a139/" target="_blank" rel="noopener noreferrer">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                        <div className="link-cont">
                                            <img src={waqas} alt="Waqas Hakeem Blockchain" />
                                        </div>
                                    </div>
                                    <h4>Front End Developer</h4>
                                    <h2>Waqas Hakeem</h2>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={6} xs={12}>
                                <div className="single-item">
                                    <div className="team-img">
                                        <a href="https://www.linkedin.com/in/bilalasif95/" target="_blank" rel="noopener noreferrer">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                        <div className="link-cont">
                                            <img src={bilal} alt="Bilal Asif Blockchain" />
                                        </div>
                                    </div>
                                    <h4>Front End Developer</h4>
                                    <h2>Bilal Asif</h2>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={6} xs={12}>
                                <div className="single-item">
                                    <div className="team-img">
                                        <a href="https://www.linkedin.com/in/ehtsham-anwaar-58b351159/" target="_blank" rel="noopener noreferrer">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                        <div className="link-cont">
                                            <img src={ehtsham} alt="Ehtsham Anwaar Blockchain" />
                                        </div>
                                    </div>
                                    <h4>SQA Engineer</h4>
                                    <h2>Ehtsham Anwaar</h2>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={6} xs={12}>
                                <div className="single-item">
                                    <div className="team-img">
                                        <a href="https://www.linkedin.com/in/khawaja-sarmad-400617111/" target="_blank" rel="noopener noreferrer">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                        <div className="link-cont">
                                            <img src={sarmad} alt="Khawaja Sarmad Javaid Blockchain" />
                                        </div>
                                    </div>
                                    <h4>Operations Manager</h4>
                                    <h2>Khawaja Sarmad Javaid</h2>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={6} xs={12}>
                                <div className="single-item">
                                    <div className="team-img">
                                        <a href="https://www.linkedin.com/in/aniqmir/" target="_blank" rel="noopener noreferrer">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                        <div className="link-cont">
                                            <img src={aniq} alt="Muhammad Aniq Mir Blockchain" />
                                        </div>
                                    </div>
                                    <h4>Software Engineer</h4>
                                    <h2>Muhammad Aniq Mir</h2>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={6} xs={12}>
                                <div className="single-item">
                                    <div className="team-img">
                                        <a href="https://www.linkedin.com/in/inayat-ullah-aa1b46143/" target="_blank" rel="noopener noreferrer">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                        <div className="link-cont">
                                            <img src={inayat} alt="Inayat Ullah Blockchain" />
                                        </div>
                                    </div>
                                    <h4>Front End Developer</h4>
                                    <h2>Inayat Ullah</h2>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={6} xs={12}>
                                <div className="single-item">
                                    <div className="team-img">
                                        <a href="https://www.linkedin.com/in/fasih-mughal-b42365199/" target="_blank" rel="noopener noreferrer">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                        <div className="link-cont">
                                            <img src={fasih} alt="Muhammad Fasih Mughal Blockchain" />
                                        </div>
                                    </div>
                                    <h4>Digital Marketing Expert</h4>
                                    <h2>Muhammad Fasih Mughal</h2>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={6} xs={12}>
                                <div className="single-item">
                                    <div className="team-img">
                                        <a href="https://www.linkedin.com/in/hamza-ahmed-37b23419b/" target="_blank" rel="noopener noreferrer">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                        <div className="link-cont">
                                            <img src={hamza} alt="Hamza Ahmed Blockchain" />
                                        </div>
                                    </div>
                                    <h4>Front End Developer</h4>
                                    <h2>Hamza Ahmed</h2>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={6} xs={12}>
                                <div className="single-item">
                                    <div className="team-img">
                                        <a href="https://www.linkedin.com/in/muhammad-rashid-9b5b531b6/" target="_blank" rel="noopener noreferrer">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                        <div className="link-cont">
                                            <img src={rashid} alt="Muhammad Rashid Blockchain" />
                                        </div>
                                    </div>
                                    <h4>Mobile App Developer</h4>
                                    <h2>Muhammad Rashid</h2>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={6} xs={12}>
                                <div className="single-item">
                                    <div className="team-img">
                                        <a href="https://www.linkedin.com/in/waqar-ahmed-0aa90a1ab/" target="_blank" rel="noopener noreferrer">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                        <div className="link-cont">
                                            <img src={waqar} alt="Waqar Ahmed Blockchain" />
                                        </div>
                                    </div>
                                    <h4>Backend Developer</h4>
                                    <h2>Waqar Ahmed</h2>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={6} xs={12}>
                                <div className="single-item">
                                    <div className="team-img">
                                        <a href="https://www.linkedin.com/in/abdul-basit-20343a1ba" target="_blank" rel="noopener noreferrer">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                        <div className="link-cont">
                                            <img src={abasit} alt="Abdul Basit Blockchain" />
                                        </div>
                                    </div>
                                    <h4>Junior Backend Developer</h4>
                                    <h2>Abdul Basit</h2>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={6} xs={12}>
                                <div className="single-item">
                                    <div className="team-img">
                                        <a href="https://www.linkedin.com/in/daniyal-butt-32228b25/" target="_blank" rel="noopener noreferrer">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                        <div className="link-cont">
                                            <img src={danyal} alt="Daniyal Butt Blockchain" />
                                        </div>
                                    </div>
                                    <h4>Digital Marketing Expert</h4>
                                    <h2>Daniyal Butt</h2>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={6} xs={12}>
                                <div className="single-item">
                                    <div className="team-img">
                                        <a href="https://www.linkedin.com/in/saif-ahmad-72240b192/" target="_blank" rel="noopener noreferrer">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                        <div className="link-cont">
                                            <img src={saifahmad} alt="Saifullah Ahmed Blockchain" />
                                        </div>
                                    </div>
                                    <h4>UI/UX & Graphic Designer</h4>
                                    <h2>Saifullah Ahmed</h2>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={6} xs={12}>
                                <div className="single-item">
                                    <div className="team-img">
                                        <a href="https://www.linkedin.com/in/aman68" target="_blank" rel="noopener noreferrer">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                        <div className="link-cont">
                                            <img src={amanullah} alt="Aman Ullah Blockchain" />
                                        </div>
                                    </div>
                                    <h4>Back End Developer</h4>
                                    <h2>Aman Ullah</h2>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={6} xs={12}>
                                <div className="single-item">
                                    <div className="team-img">
                                        <a href="https://www.linkedin.com/in/jawad-ahmed-flutter/" target="_blank" rel="noopener noreferrer">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                        <div className="link-cont">
                                            <img src={jawadahmed} alt="Jawad Ahmed Blockchain" />
                                        </div>
                                    </div>
                                    <h4>Mobile App Developer</h4>
                                    <h2>Jawad Ahmed</h2>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={6} xs={12}>
                                <div className="single-item">
                                    <div className="team-img">
                                        <a href="https://www.linkedin.com/in/ahmed-tariq-a662211a0/" target="_blank" rel="noopener noreferrer">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                        <div className="link-cont">
                                            <img src={ahmedtariq} alt="Ahmed Tariq Blockchain" />
                                        </div>
                                    </div>
                                    <h4>SQA Engineer</h4>
                                    <h2>Ahmed Tariq</h2>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            <ContactUs />
        </div>

    );
};

export default AboutUs;