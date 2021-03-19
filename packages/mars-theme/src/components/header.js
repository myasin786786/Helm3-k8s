import React from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import { animateScroll as scroll } from "react-scroll";
import Link from "./link";
import logoWhite from "../assets/white.svg";
import logoColored from "../assets/color.svg";
import explorer from "../assets/antliaexplorer.svg";
import wallet from "../assets/antliawallet.svg";
import faucet from "../assets/antliafaucet.svg";

class MainNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      isOpen1: false,
      dropIsOpen: false,
      toggleIsOpen: false,
      dropdownOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  toggleClose = () => {
    this.setState({
      isOpen: false,
    });
  };
  toggle1() {
    this.setState({
      isOpen1: !this.state.isOpen1,
    });
  }
  toggleClose1 = () => {
    this.setState({
      isOpen1: false,
    });
  };
  toggle1 = () =>
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  componentDidMount() {
    let nav = document.getElementById("navbar");
    nav.classList.add("transparent-nav");
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    let nav = document.getElementById("navbar");
    nav.classList.remove("transparent-nav");
    nav.classList.remove("sticky-nav");
  }
  handleScroll() {
    let top = document.body.getBoundingClientRect().top * -1;
    let nav = document.getElementById("navbar");
    if (top > 0) {
      nav.classList.remove("transparent-nav");
      nav.classList.add("bgcolornav");
    } else {
      nav.classList.add("transparent-nav");
      nav.classList.remove("bgcolornav");
    }
  }
  render() {
    const scrollToTop = () => {
      scroll.scrollToTop();
    };
    return (
      <div className="menubar">
        <div className="transparedNav">
          <Navbar id="navbar" light expand="md">
            <div className="container">
              <NavbarBrand tag={Link} link="/" onClick={scrollToTop}>
                <img src={logoWhite} alt="Antlia logo" className="logodes" />
                <img src={logoColored} alt="Antlia logo" className="logores" />
              </NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto nav-links navbarresBg" navbar>

                  <NavItem className="nav-item1">
                    <Link
                      link="/"
                      onClick={scrollToTop}
                      spy={"true"}
                      smooth={"true"}
                      duration={500}
                    >
                      Technology
                    </Link>
                  </NavItem>
                  <NavItem className="nav-item1">
                    <Link
                      link="/antlia-defi"
                      onClick={scrollToTop}
                      spy={"true"}
                      smooth={"true"}
                      duration={500}
                    >
                      StakeFlow
                    </Link>
                  </NavItem>
                  <NavItem className="nav-item1">
                    <Link
                      link="/investment"
                      onClick={scrollToTop}
                      spy={"true"}
                      smooth={"true"}
                      duration={500}
                    >
                      Investment
                    </Link>
                  </NavItem>
                  <NavItem className="nav-item1">
                    <Link
                      link="/aboutus"
                      onClick={scrollToTop}
                      spy={"true"}
                      smooth={"true"}
                      duration={500}
                    >
                      About Us
                    </Link>
                  </NavItem>
                  <NavItem className="nav-item1">
                    <a
                      href="https://docs.antlia.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Docs
                    </a>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar id="dropbtn">
                    <DropdownToggle nav>
                      <span className="dropbtn">
                        Access the Chain
                        <i className="fa fa-sort-desc"></i>
                      </span>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <div className="chain">
                        <div className="content-in">
                          <h2>Access the Chain</h2>
                          <div className="chain-list">
                            <Link link="/antlia-faucet"
                              className="single-item">
                              <img src={faucet} alt="Antlia Faucet" />
                              <h4>Antlia Faucet<i className="fa fa-external-link"></i></h4>
                              <p>Antlia faucet will give the user a small amount of  ANA coins for testing and better understanding of the system.</p>
                            </Link>
                            <Link link="/antlia-wallet"
                              className="single-item">
                              <img src={wallet} alt="Antlia Wallet" />
                              <h4>Antlia Wallet <i className="fa fa-external-link"></i></h4>
                              <p>Antlia's Multicoin Wallet will be non-custodial wallet having support for ANA and BNB coin. It will be in variety of versions, mobile, web, browser, extension & nano ledger.</p>
                            </Link>
                            <Link link="/antlia-explorer"
                              className="single-item">
                              <img src={explorer} alt="Antlia Explorer" />
                              <h4>Antlia Explorer <i className="fa fa-external-link"></i></h4>
                              <p>Antlia Multichain Explorer will monitor the status of different metrics of Antlia network specifically ANA and BNA Coin.</p>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
              </Collapse>
            </div>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default MainNavbar;