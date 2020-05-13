import React from "react";
import "../../styles/styles.scss";
/* import Menu from "../../assets/jpg/menu.jpg"; */
import animation from "../../modules/animation";

class Maenu extends React.Component {
  render() {
    return (
      <section className="menuSection">
        <h2>Menu</h2>
        <div className="sliderWrap">
          <div className="breakfast">
            <h4>Śniadanie</h4>
            <h6>Od godz. 10:00 do 12:00</h6>
          </div>
        </div>
      </section>
    );
  }
}

export default Maenu;
