import React from "react";
import "../../styles/styles.scss";
import { ReactComponent as ArrowLeft } from "../../assets/svg/sanbiagio-ostroda-left-arrow.svg";
import { ReactComponent as ArrowRight } from "../../assets/svg/sanbiagio-ostroda-right-arrow.svg";
class Menu extends React.Component {
  render() {
    return (
      <section className="menuSection">
        <h2>Menu</h2>
        <div className="sliderWrap">
          <ArrowLeft
            id="menuArrowLeft"
            className="sliderArrow"
            onClick={this.handleClick}
          />
          <ArrowRight
            id="menuArrowRight"
            className="sliderArrow"
            onClick={this.handleClick}
          />
          <div className="slideWrap">
            <h4>Śniadanie</h4>
            <h6 className="breakfastH6">Od godz. 10:00 do 12:00</h6>
            <h6>Jajecznica z 4 jaj (podajemy z pieczywem i masłem)</h6>
            <p className="menuP">
              na maśle
              <span className="menuDots">
                ......................................
              </span>
              <span className="menuPrice">11,00 zł</span>
            </p>
            <p className="menuP">
              z szynką lub boczkiem
              <span className="menuDots">.............................</span>
              <span className="menuPrice">13,00 zł</span>
            </p>
            <h6 className="menuH6MarginTop">Naleśniki - 2 sztuki</h6>
            <p className="menuP">
              z serem
              <span className="menuDots">
                .......................................
              </span>
              <span className="menuPrice">12,00 zł</span>
            </p>
            <p className="menuP">
              z dżemem
              <span className="menuDots">
                .....................................
              </span>
              <span className="menuPrice">12,00 zł</span>
            </p>
            <p className="menuP">
              z owocami
              <span className="menuDots">
                .....................................
              </span>
              <span className="menuPrice">15,00 zł</span>
            </p>
            <h6 className="menuH6MarginTop">
              62. Frittata (włoski omlet z brokułami)
              <span className="menuDots">...................</span>
              <span className="menuH6Price">16,00 zł</span>
            </h6>
            <h6 className="menuH6MarginTop">
              63. Frittata (włoski omlet z papryką, cebulą i pieczarkami)
              <span className="menuDots">......</span>
              <span className="menuH6Price">17,00 zł</span>
            </h6>
          </div>
        </div>
        {/*  <p className="menuP">
          <span className="menuDots"></span>
        </p> */}
      </section>
    );
  }
}

export default Menu;
