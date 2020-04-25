import React from "react";
import "../styles/styles.scss";
import logo from "../img/logo10.png";
import gsap from "gsap";

class Header extends React.Component {
  componentDidMount() {
    const tl = gsap.timeline();
    tl.to(
      document.querySelector(".headings"),
      {
        opacity: 1,
        duration: 2,
      },
      0
    );
    tl.to(
      document.querySelector(".backgroundDiv"),
      {
        opacity: 0.8,
        duration: 2,
      },
      0
    );
  }
  render() {
    return (
      <>
        <header>
          <nav>
            <img src={logo} className="hehe"></img>
            <ul>
              <li>O nas</li>
              <li>Oferta</li>
              <li>Kontakt</li>
              <li>Galeria</li>
            </ul>
          </nav>
          <div className="hyhy"></div>
          <div className="backgroundDiv"></div>
          <div className="headings">
            <h1>zapraszamy na pizzę</h1>
            <h2>na bulwarze europejskim w ostródzie</h2>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
