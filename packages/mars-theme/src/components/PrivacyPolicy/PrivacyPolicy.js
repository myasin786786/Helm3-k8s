import React from "react";
import Link from '../link';
import { Row, Col } from "reactstrap";
import { animateScroll as scroll } from "react-scroll";

const PrivacyPolicy = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <section className="privacy">
      <div className="blog-top">
        <div className="aboutbg">
          <div className="container">
            <Row>
              <Col lg={2} />
              <Col lg={8} sm={12}>
                <div className="about-desc">
                  <h1>Privacy Policy for Antlia</h1>
                </div>
              </Col>
              <Col lg={2} />
            </Row>
          </div>
        </div>
      </div>
      <div className="container">
        <Row>
          <Col lg={12}>
            <div className="desc">
              <h4>Antlia</h4>
              <p>At Antlia.io, accessible from <Link link="/" onClick={scrollToTop} spy={true} smooth={true} duration={500}>https://antlia.io</Link>, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Antlia.io and how we use it.</p>
              <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>
              <p>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Antlia.io. This policy is not applicable to any information collected offline or via channels other than this website.</p>
              <h4>Consent</h4>
              <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms. For our Terms and Conditions, please visit the Terms & Conditions Generator.</p>
              <h4>Information we collect</h4>
              <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
              <p>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p>
              <p>When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</p>
              <h4>How we use your information</h4>
              <p>We use the information we collect in various ways, including to:</p>
              <ul>
                <li>Provide, operate, and maintain our website</li>
                <li>Improve, personalize, and expand our website</li>
                <li>Understand and analyze how you use our website</li>
                <li>Develop new products, services, features, and functionalities</li>
                <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
                <li>Send you emails</li>
                <li>Find and prevent fraud</li>
              </ul>
              <h4>GDPR Data Protection Rights</h4>
              <p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
              <p><b>The right to access</b> – You have the right to request copies of your personal data. We may charge you a small fee for this service.</p>
              <p><b>The right to rectification</b> – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</p>
              <p><b>The right to erasure</b> – You have the right to request that we erase your personal data, under certain conditions.</p>
              <p><b>The right to restrict processing</b> – You have the right to request that we restrict the processing of your personal data, under certain conditions.</p>
              <p><b>The right to object to processing</b> – You have the right to object to our processing of your personal data, under certain conditions.</p>
              <p><b>The right to data portability</b> – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</p>
              <p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default PrivacyPolicy;