import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  // DropdownItem,
  // Dropdown,
} from "reactstrap";
import { animateScroll as scroll } from "react-scroll";
import Link from "./link";
// import { FormattedMessage } from "react-intl";
import logo from "../assets/white.svg";
import logo1 from "../assets/color.svg";
import explorer from "../assets/antliaexplorer.svg";
import wallet from "../assets/antliawallet.svg";
import faucet from "../assets/antliafaucet.svg";
// import { Link as NavLink } from "react-scroll";

class MainNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    // this.closeNavbar = this.closeNavbar.bind(this);
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

    // nav[0].style.background = 'transparent';
    // nav[0].style.position = 'absolute';
    // nav[0].style.boxShadow = 'none';
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
              <NavbarBrand tag={Link} link={"/"} onClick={scrollToTop}>
                <img src={logo} alt="Antlia logo" className="logodes" />
                <img src={logo1} alt="Antlia logo" className="logores" />
              </NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto nav-links navbarresBg" navbar>

                  <NavItem className="nav-item1">
                    <Link
                      link="/"
                      //   onClick={scrollToTop, () => {
                      //   this.toggleClose();
                      // }}
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
                      link="/stakeflow"
                      onClick={scrollToTop}
                      spy={"true"}
                      smooth={"true"}
                      duration={500}
                    // className="isDisabled"
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
                              // target="_blank"
                              // rel="noopener noreferrer"
                              className="single-item">
                              <img src={faucet} alt="Antlia Faucet" />
                              <h4>Antlia Faucet<i className="fa fa-external-link"></i></h4>
                              <p>Antlia faucet will give the user a small amount of  ANA coins for testing and better understanding of the system.</p>
                            </Link>
                            <Link link="/antlia-wallet"
                              // target="_blank"
                              // rel="noopener noreferrer"
                              className="single-item">
                              <img src={wallet} alt="Antlia Wallet" />
                              <h4>Antlia Wallet <i className="fa fa-external-link"></i></h4>
                              <p>Antlia's Multicoin Wallet will be non-custodial wallet having support for ANA and BNB coin. It will be in variety of versions, mobile, web, browser, extension & nano ledger.</p>
                            </Link>
                            <Link link="/antlia-explorer"
                              // target="_blank"
                              // rel="noopener noreferrer"
                              className="single-item">
                              <img src={explorer} alt="Antlia Explorer" />
                              <h4>Antlia Explorer <i className="fa fa-external-link"></i></h4>
                              <p>Antlia Multichain Explorer will monitor the status of different metrics of Antlia network specifically ANA and BNA Coin.</p>
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* <DropdownItem><Link link="#">Dropdown 1</Link></DropdownItem> */}
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  {/* <NavItem className="nav-item1" id="contactbtn">
                    <NavLink link="contactscroll"
                      onClick={() => {
                        this.toggleClose();
                      }}
                      spy={"true"}
                      smooth={"true"}
                      duration={500} className="contactbtn">
                      Contact
                    </NavLink>
                  </NavItem> */}
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
