import React from "react";
// import MainNavbar from "../Common/MainNavbar";
// import Footer from "../Common/Footer";
import { Row, Col } from "reactstrap";
import shakil from '../../assets/team/shakil.svg';
import alqarni from '../../assets/team/alqarni.jpg';
import alkatheiri from '../../assets/team/alkatheiri.jpeg';
// import kashif from '../../assets/team/kashif.jpg';
import sajjad from '../../assets/team/sajjad.jpeg';
import shehroze from '../../assets/team/shehroze.jpg';
import faisal from '../../assets/team/faisal.jpg';
// import junes from '../../assets/team/junes.jpg';
// import nabil from '../../assets/team/nabil.jpg';
import ali from '../../assets/team/ali.jpg';
import tahira from '../../assets/team/tahira.jpg';
import kainat from '../../assets/team/kainat.jpg';
import waqas from '../../assets/team/waqas.jpg';
import bilal from '../../assets/team/bilal.jpg';
import saad from '../../assets/team/saad.jpg';
import ehtsham from '../../assets/team/ehtsham.jpg';
// import luis from '../../assets/team/luis.jpg';
import sarmad from '../../assets/team/sarmad.jpg';
import aniq from '../../assets/team/aniq.jpg';
import farhan from '../../assets/team/farhan.jpg';
import nadeem from '../../assets/team/nadeem.jpg';
import inayat from '../../assets/team/inayat.jpg';
import fasih from '../../assets/team/fasih.jpg';
import basit from '../../assets/team/basit.png';
// import jadoon from '../../assets/team/jadoon.jpg';
import hamza from '../../assets/team/hamza.jpg';
import rashid from '../../assets/team/rashid.jpg';
import waqar from '../../assets/team/waqar.jpg';
import abasit from '../../assets/team/abasit.jpg';
import sadaf from '../../assets/team/sadaf.jpg';
import nomanarif from '../../assets/team/nomanarif.jpg';
import danyal from '../../assets/team/danyal.jpg';
// import qaiseraqeel from '../../assets/team/qaiseraqeel.jpg';

import ContactUs from "../ContactUs/ContactUs";

const AboutUs = () => {
    return (
        <div style={{width: '100%'}}>
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
                            {/* <Col lg={4} md={6} sm={6} xs={12}>
                                <div className="single-item">
                                    <div className="team-img">
                                    <a href="https://www.linkedin.com/in/dr-ali-kashif-bashir-b2111929/" target="_blank" rel="noopener noreferrer">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                        <div className="link-cont">
                                            <img src={kashif} alt="Sir Dr. Ali Kashif Bashir" />
                                        </div>
                                    </div>
                                    <h4>Senior Researcher</h4>
                                    <h2>Ali Kashif Bashir, PhD</h2>
                                </div>
                            </Col> */}
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
                            {/* <Col lg={4} md={6} sm={6} xs={12}>
                                <div className="single-item">
                                    <div className="team-img">
                                    <a href="" target="_blank" rel="noopener noreferrer">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                        <img src={junes} alt=" Blockchain" />
                                    </div>
                                    <h4>Country Manager (Korea)</h4>
                                    <h2>Junes Lee</h2>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={6} xs={12}>
                                <div className="single-item">
                                    <div className="team-img">
                                    <a href="" target="_blank" rel="noopener noreferrer">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                        <img src={nabil} alt=" Blockchain" />
                                    </div>
                                    <h4>VP Business Development</h4>
                                    <h2>Nabil Irfan</h2>
                                </div>
                            </Col> */}
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
                                        <a href="https://www.linkedin.com/in/tahira-fatima-09589216a/" target="_blank" rel="noopener noreferrer">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                        <div className="link-cont">
                                            <img src={tahira} alt="Tahira Fatima Blockchain" />
                                        </div>
                                    </div>
                                    <h4>Director Marketing</h4>
                                    <h2>Tahira Fatima</h2>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={6} xs={12}>
                                <div className="single-item">
                                    <div className="team-img">
                                        <a href="https://www.linkedin.com/in/kainat-fatima-50b03511a/" target="_blank" rel="noopener noreferrer">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                        <div className="link-cont">
                                            <img src={kainat} alt="Kainat Fatima Blockchain" />
                                        </div>
                                    </div>
                                    <h4>Director Technical</h4>
                                    <h2>Kainat Fatima</h2>
                                </div>
                            </Col>
                            {/* <Col lg={4} md={6} sm={6} xs={12}>
                                <div className="single-item">
                                    <div className="team-img">
                                        <a href="https://www.linkedin.com/in/syeda-roushan-arshid-2b3b07bb/" target="_blank" rel="noopener noreferrer">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                        <div className="link-cont">
                                            <img src={roshan} alt=" Blockchain" />
                                        </div>
                                    </div>
                                    <h4>Software Engineer</h4>
                                    <h2>Syeda Roushan</h2>
                                </div>
                            </Col> */}
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
                            {/* <Col lg={4} md={6} sm={6} xs={12}>
                                <div className="single-item">
                                    <div className="team-img">
                                        <a href="https://www.linkedin.com/in/faizan-ahmad-871b3311a/" target="_blank" rel="noopener noreferrer">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                        <div className="link-cont">
                                            <img src={faizan} alt=" Blockchain" />
                                        </div>
                                    </div>
                                    <h4>Back End Developer</h4>
                                    <h2>Faizan Ahmed</h2>
                                </div>
                            </Col> */}
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
                            {/* <Col lg={4} md={6} sm={6} xs={12}>
                                <div className="single-item">
                                    <div className="team-img">
                                        <a href="https://www.linkedin.com/in/usmanfazil/" target="_blank" rel="noopener noreferrer">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                        <div className="link-cont">
                                            <img src={usman} alt=" Blockchain" />
                                        </div>
                                    </div>
                                    <h4>Software Engineer</h4>
                                    <h2>Usman Fazil</h2>
                                </div>
                            </Col> */}
                            <Col lg={4} md={6} sm={6} xs={12}>
                                <div className="single-item">
                                    <div className="team-img">
                                        <a href="https://www.linkedin.com/in/saad-rasool-butt-138ab8b5/" target="_blank" rel="noopener noreferrer">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                        <div className="link-cont">
                                            <img src={saad} alt="Saad Rasool Blockchain" />
                                        </div>
                                    </div>
                                    <h4>Software Engineer</h4>
                                    <h2>Saad Rasool</h2>
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
                            {/* <Col lg={4} md={6} sm={6} xs={12}>
                                <div className="single-item">
                                    <div className="team-img">
                                    <a href="" target="_blank" rel="noopener noreferrer">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                        <img src={luis} alt=" Blockchain" />
                                    </div>
                                    <h4>IT Business Development (Latin America/Spain)</h4>
                                    <h2>Luis Roberto Giron</h2>
                                </div>
                            </Col> */}
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
                                        <a href="https://www.linkedin.com/in/farhan-saeed-37a11611a/" target="_blank" rel="noopener noreferrer">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                        <div className="link-cont">
                                            <img src={farhan} alt="Farhan Saeed Blockchain" />
                                        </div>
                                    </div>
                                    <h4>Back End Developer</h4>
                                    <h2>Farhan Saeed</h2>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={6} xs={12}>
                                <div className="single-item">
                                    <div className="team-img">
                                        <a href="https://www.linkedin.com/in/nadeemabbas786/" target="_blank" rel="noopener noreferrer">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                        <div className="link-cont">
                                            <img src={nadeem} alt="Nadeem Abbas Blockchain" />
                                        </div>
                                    </div>
                                    <h4>Senior Mobile App Developer</h4>
                                    <h2>Nadeem Abbas</h2>
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
                                        <a href="https://www.linkedin.com/in/abdul-basit-76982716a/" target="_blank" rel="noopener noreferrer">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                        <div className="link-cont">
                                            <img src={basit} alt="Abdul Basit Blockchain" />
                                        </div>
                                    </div>
                                    <h4>UI/UX & Graphics Designer</h4>
                                    <h2>Abdul Basit</h2>
                                </div>
                            </Col>
                            {/* <Col lg={4} md={6} sm={6} xs={12}>
                                <div className="single-item">
                                    <div className="team-img">
                                        <div className="link-cont">
                                            <img src={jadoon} alt=" Blockchain" />
                                        </div>
                                    </div>
                                    <h4>Business Development Director</h4>
                                    <h2>Hassan Ali Jadoon</h2>
                                </div>
                            </Col> */}
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
                                        <a href="https://www.linkedin.com/in/sadafiftikhar9/" target="_blank" rel="noopener noreferrer">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                        <div className="link-cont">
                                            <img src={sadaf} alt="Sadaf Iftikhar Blockchain" />
                                        </div>
                                    </div>
                                    <h4>Junior SQA Engineer</h4>
                                    <h2>Sadaf Iftikhar</h2>
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
                                        <a href="https://www.linkedin.com/in/waqar-ahmed-0aa90a1ab/" target="_blank" rel="noopener noreferrer">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                        <div className="link-cont">
                                            <img src={nomanarif} alt="Nauman Arif Blockchain" />
                                        </div>
                                    </div>
                                    <h4>Junior Backend Developer</h4>
                                    <h2>Nauman Arif</h2>
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
