import React from "react";
import "../../styles/styles.scss";
import { ReactComponent as ArrowLeft2 } from "../../assets/svg/sanbiagio-ostroda-left-arrow-light.svg";
import { ReactComponent as ArrowRight2 } from "../../assets/svg/sanbiagio-ostroda-right-arrow-light.svg";
import ClientPhoto1 from "../../assets/jpg/klient1.jpg";

class Testimonials extends React.Component {
  state = {
    mainCircleId: 3,
  };
  opinions = [
    "jeden",
    "dwa",
    "San Biagio to zdecydowanie nasza ulubiona z ostródzkich" +
      "restauracji. Znakomita obsługa, jeszcze lepsze menu. Porcje" +
      "niemałe, a potrawy bardzo dopracowane, na najwyższym poziomie." +
      "Wszystko w przystępnych cenach. Gorąco polecam!",
    "cztery",
    "pięć",
    "sześć",
  ];
  changeSlide = (e) => {
    const left = document.getElementById("testimonialsArrowLeft");
    const right = document.getElementById("testimonialsArrowRight");
    const leftPattern = document.querySelector(".i1ab");
    const rightPattern = document.querySelector(".i2x");

    if (e.target === left || e.target === leftPattern) {
      this.changeSlideTemplate(
        1,
        6,
        this.opinions.length - 1,
        this.state.mainCircleId - 2,
        this.state.mainCircleId - 1
      );
    } else if (e.target === right || e.target === rightPattern) {
      this.changeSlideTemplate(
        6,
        1,
        0,
        this.state.mainCircleId,
        this.state.mainCircleId + 1
      );
    }
  };
  changeSlideTemplate = (
    highestOrLowest,
    highestOrLowestStateChange,
    firstOrLastArrayIndex,
    textContent,
    regularStateChange
  ) => {
    const text = document.querySelector(".testimonialsText");

    if (this.state.mainCircleId === highestOrLowest) {
      text.textContent = this.opinions[firstOrLastArrayIndex];
      this.setState({
        mainCircleId: highestOrLowestStateChange,
      });
    } else {
      text.textContent = this.opinions[textContent];
      this.setState({
        mainCircleId: regularStateChange,
      });
    }
  };
  render() {
    console.log(this.state.mainCircleId);
    return (
      <section className="testimonialsSection">
        <h3 className="testimonialsH3">Opinie</h3>
        <div className="testimonialsWrap">
          <div
            className="testimonialsCircle"
            id="testimonialsCircle1"
            data-circle
          >
            <img
              className="clientPhotoSmall"
              src={ClientPhoto1}
              alt="san-biagio-ostróda-klient"
            />
          </div>
          <div
            className="testimonialsCircle"
            id="testimonialsCircle2"
            data-circle
          >
            <img
              className="clientPhotoSmall"
              src={ClientPhoto1}
              alt="san-biagio-ostróda-klient"
            />
          </div>
          <div id="testimonialsCircle3" data-circle>
            <img
              className="clientPhoto"
              src={ClientPhoto1}
              alt="san-biagio-ostróda-klient"
            />
            <p className="testimonialsText">
              San Biagio to zdecydowanie nasza ulubiona z ostródzkich
              restauracji. Znakomita obsługa, jeszcze lepsze menu. Porcje
              niemałe, a potrawy bardzo dopracowane, na najwyższym poziomie.
              Wszystko w przystępnych cenach. Gorąco polecam!
            </p>
            <p className="clientName">Marek</p>
          </div>
          <div
            className="testimonialsCircle"
            id="testimonialsCircle4"
            data-circle
          >
            <img
              className="clientPhotoSmall"
              src={ClientPhoto1}
              alt="san-biagio-ostróda-klient"
            />
          </div>
          <div
            className="testimonialsCircle"
            id="testimonialsCircle5"
            data-circle
          >
            <img
              className="clientPhotoSmall"
              src={ClientPhoto1}
              alt="san-biagio-ostróda-klient"
            />
          </div>
          <div
            className="testimonialsCircle"
            id="testimonialsCircle6"
            data-circle
          >
            <img
              className="clientPhotoSmall"
              src={ClientPhoto1}
              alt="san-biagio-ostróda-klient"
            />
          </div>
        </div>
        <ArrowLeft2
          onClick={this.changeSlide}
          id="testimonialsArrowLeft"
          className="sliderArrow"
        />
        <ArrowRight2
          onClick={this.changeSlide}
          id="testimonialsArrowRight"
          className="sliderArrow"
        />
      </section>
    );
  }
}

export default Testimonials;
