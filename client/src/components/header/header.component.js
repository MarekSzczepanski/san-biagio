import React from "react";
import "../../styles/styles.scss";
import animation from "../../modules/animation";
import background from "../../assets/svg/sanbiagio-background3.svg";
import logo from "../../img/logo10.png";
import rope from "../../assets/png/rope.png";

class Header extends React.Component {
  componentDidMount() {
    animation(document.querySelectorAll("li"), "scale", 0, 0.8, 0.5);
    animation(document.querySelector("[data-header-img]"), "opacity", 0.1, 5);
  }
  render() {
    return (
      <header>
        <img
          className="headerBackground"
          src={background}
          alt="sanbiagio-background"
        />
        <div className="logoContainer">
          <img className="logo" src={logo} alt="sanbiagio-logo" />
        </div>
        <nav>
          <img className="rope" src={rope} alt="sanbiagio-rope" />
          <ul>
            <li className="liOlive">o nas</li>
            <li className="liBlue">menu</li>
            <li className="liSea">opinie</li>
            <li className="liSand">kontakt</li>
            <li className="liGreen">lokalizacja</li>
            <li className="liSkyBlue">galeria</li>
          </ul>
          <img
            className="rope"
            id="ropeBottom"
            src={rope}
            alt="sanbiagio-rope"
          />
        </nav>
      </header>
    );
  }
}

export default Header;
