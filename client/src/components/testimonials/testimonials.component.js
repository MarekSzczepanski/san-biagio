import React from "react";
import "../../styles/styles.scss";
import { ReactComponent as ArrowLeft2 } from "../../assets/svg/sanbiagio-ostroda-left-arrow-light.svg";
import { ReactComponent as ArrowRight2 } from "../../assets/svg/sanbiagio-ostroda-right-arrow-light.svg";
import ClientPhoto1 from "../../assets/jpg/klient1.jpg";
import ClientPhoto2 from "../../assets/jpg/klient2.jpg";
import ClientPhoto3 from "../../assets/jpg/klient3.jpg";
import ClientPhoto4 from "../../assets/jpg/klient4.jpg";
import ClientPhoto5 from "../../assets/jpg/klient5.jpg";
import ClientPhoto6 from "../../assets/jpg/klient6.jpg";

class Testimonials extends React.Component {
  photos = [
    ClientPhoto1,
    ClientPhoto2,
    ClientPhoto3,
    ClientPhoto4,
    ClientPhoto5,
    ClientPhoto6,
  ];
  clientNames = ["Tomasz", "Alicja", "Marta", "Cezary", "Krzysztof", "Joanna"];
  testimonials = [
    "Goście czują się jak w domu, przychodząc w te miejsce na posiłek i" +
      " są traktowani z szacunkiem przez Właścicieli, oraz personel.",
    "5 gwiazdek jedzenie i obsługa. Super latem i zimą",
    "Super pizza. Rewelacyjny pomysl na połączenie smaku szpinaku, slonecznika i suszonych pomidorow. Polecamy!",
    "Dobre jedzenie, fajna atmosfera oraz malownicze widoki." +
      " Pizza bardzo dobra z tuńczykiem mega, polecam. 👍😀",
    "Najlepsze Włoskie jedzenie. Polecamy sałatka grecka i pasty. Smacznie, czysto i miła obsługa.",
    "Bardzo miła, wręcz domowa atmosfera. Szybka i miła obsługa, " +
      "I wielką zaletą tego lokalu jest to, że można przyjść z pieskiem.",
  ];
  changeSlide = (e) => {
    const left = document.getElementById("testimonialsArrowLeft");
    const right = document.getElementById("testimonialsArrowRight");
    const leftPattern = document.querySelector(".i1ab"); // svg layers
    const rightPattern = document.querySelector(".i2x");

    if (e.target === left || e.target === leftPattern) {
      this.changeSlideTemplate(1, this.testimonials.length - 1, "left");
    } else if (e.target === right || e.target === rightPattern) {
      this.changeSlideTemplate(6, 0, "right");
    } else {
      this.changeSlideTemplate(null, null, "circle", e.target.id.slice(-1));
    }
  };
  changeSlideTemplate = (
    highestOrLowestPhotoNumber,
    firstOrLastArrayIndex,
    target,
    targetId
  ) => {
    const text = document.querySelector(".testimonialsText");
    const clientName = document.querySelector(".clientName");
    let photoToRepush = this.photos[firstOrLastArrayIndex];
    let testimonialToRepush = this.testimonials[firstOrLastArrayIndex];
    let clientNameToRepush = this.clientNames[firstOrLastArrayIndex];

    const changeTestimonialLoop = () => {
      for (let i = 1; i < this.photos.length + 1; i++) {
        if (i === highestOrLowestPhotoNumber) {
          document.getElementById(
            `clientPhoto${highestOrLowestPhotoNumber}`
          ).src = this.photos[firstOrLastArrayIndex];
        } else if (target === "right") {
          document.getElementById(`clientPhoto${i}`).src = this.photos[i];
        } else if (target === "left") {
          document.getElementById(`clientPhoto${i}`).src = this.photos[i - 2];
        }
      }
    };

    const arraysRepush = () => {
      if (target === "right") {
        this.photos.shift();
        this.photos.push(photoToRepush);
        this.testimonials.shift();
        this.testimonials.push(testimonialToRepush);
        this.clientNames.shift();
        this.clientNames.push(clientNameToRepush);
      } else if (target === "left") {
        this.photos.pop();
        this.photos.unshift(photoToRepush);
        this.testimonials.pop();
        this.testimonials.unshift(testimonialToRepush);
        this.clientNames.pop();
        this.clientNames.unshift(clientNameToRepush);
      }
      text.textContent = this.testimonials[2];
      clientName.textContent = this.clientNames[2];
    };
    if (target !== "circle") {
      changeTestimonialLoop();
      arraysRepush();
    } else {
      if (targetId > 3) {
        highestOrLowestPhotoNumber = 6;
        firstOrLastArrayIndex = 0;
        target = "right";
        for (let i = 0; i < targetId - 3; i++) {
          photoToRepush = this.photos[firstOrLastArrayIndex];
          testimonialToRepush = this.testimonials[firstOrLastArrayIndex];
          clientNameToRepush = this.clientNames[firstOrLastArrayIndex];
          changeTestimonialLoop();
          arraysRepush();
        }
      } else {
        highestOrLowestPhotoNumber = 1;
        firstOrLastArrayIndex = this.testimonials.length - 1;
        target = "left";
        for (let i = 0; i < 3 - targetId; i++) {
          photoToRepush = this.photos[firstOrLastArrayIndex];
          testimonialToRepush = this.testimonials[firstOrLastArrayIndex];
          clientNameToRepush = this.clientNames[firstOrLastArrayIndex];
          changeTestimonialLoop();
          arraysRepush();
        }
      }
    }
  };

  render() {
    return (
      <section className="testimonialsSection">
        <h3 className="testimonialsH3">Opinie</h3>
        <div className="testimonialsWrap">
          <div
            onClick={this.changeSlide}
            className="testimonialsCircle"
            id="testimonialsCircle1"
            data-circle
          >
            <img
              className="clientPhotoSmall"
              id="clientPhoto1"
              src={ClientPhoto1}
              alt="san-biagio-ostróda-klient"
            />
          </div>
          <div
            onClick={this.changeSlide}
            className="testimonialsCircle"
            id="testimonialsCircle2"
            data-circle
          >
            <img
              className="clientPhotoSmall"
              id="clientPhoto2"
              src={ClientPhoto2}
              alt="san-biagio-ostróda-klient"
            />
          </div>
          <div id="testimonialsCircle3" data-circle>
            <img
              className="clientPhoto"
              id="clientPhoto3"
              src={ClientPhoto3}
              alt="san-biagio-ostróda-klient"
            />
            <p className="testimonialsText">
              Super pizza. Rewelacyjny pomysl na połączenie smaku szpinaku,
              slonecznika i suszonych pomidorow. Polecamy!
            </p>
            <p className="clientName">Marta</p>
          </div>
          <div
            onClick={this.changeSlide}
            className="testimonialsCircle"
            id="testimonialsCircle4"
            data-circle
          >
            <img
              className="clientPhotoSmall"
              id="clientPhoto4"
              src={ClientPhoto4}
              alt="san-biagio-ostróda-klient"
            />
          </div>
          <div
            onClick={this.changeSlide}
            className="testimonialsCircle"
            id="testimonialsCircle5"
            data-circle
          >
            <img
              className="clientPhotoSmall"
              id="clientPhoto5"
              src={ClientPhoto5}
              alt="san-biagio-ostróda-klient"
            />
          </div>
          <div
            onClick={this.changeSlide}
            className="testimonialsCircle"
            id="testimonialsCircle6"
            data-circle
          >
            <img
              className="clientPhotoSmall"
              id="clientPhoto6"
              src={ClientPhoto6}
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
