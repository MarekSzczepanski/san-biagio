import React from "react";
import "../../styles/styles.scss";
import animation from "../../modules/animation";
import background from "../../assets/svg/sanbiagio-background3.svg";
import logo from "../../img/logo10.png";
import rope from "../../assets/png/rope.png";

class Header extends React.Component {
  componentDidMount() {
    animation(document.querySelectorAll("li"), "scale", 0, 0.8, 0.5);
    animation(document.querySelector(".headerBackground"), "opacity", 1, 4);
    animation(document.querySelector(".logoContainer"), "opacity", 1, 3, 1);
  }
  scrollToSection = (e) => {
    document
      .querySelector("." + e.target.id + "Section")
      .scrollIntoView({ behavior: "smooth" });
  };
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
            <li onClick={this.scrollToSection} className="liOlive" id="about">
              o nas
            </li>
            <li onClick={this.scrollToSection} className="liBlue" id="menu">
              menu
            </li>
            <li
              onClick={this.scrollToSection}
              className="liSea"
              id="testimonials"
            >
              opinie
            </li>
            <li onClick={this.scrollToSection} className="liSand" id="contact">
              kontakt
            </li>
            <li onClick={this.scrollToSection} className="liGreen" id="contact">
              lokalizacja
            </li>
            <li
              onClick={this.scrollToSection}
              className="liSkyBlue"
              id="contact"
            >
              galeria
            </li>
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
