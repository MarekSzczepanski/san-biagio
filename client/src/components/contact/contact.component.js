import React from "react";
import "../../styles/styles.scss";
import Map from "./map/map.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { ReactComponent as Branch } from "../../assets/svg/branch.svg";

class Contact extends React.Component {
  render() {
    return (
      <section className="contactSection">
        <h3>Kontakt</h3>
        <div className="contactWrap">
          <div className="contactIconWrap" id="phoneIcon">
            <FontAwesomeIcon className="contactIcon" icon={faPhoneAlt} />
            <p className="contactP"> 89 646 81 68</p>
          </div>
          <div className="contactIconWrap" id="envelopeIcon">
            <FontAwesomeIcon className="contactIcon" icon={faEnvelope} />
            <p className="contactP">daarcadio@gmail.com</p>
          </div>
          <div className="contactTextOnlyWrap" id="companyName">
            <p className="contactP">
              <span className="bold">"San Biagio"</span> Pizzeria Adam Kurkul
            </p>
          </div>
          <div className="contactTextOnlyWrap" id="adress">
            <p className="contactP">Mickiewicza 13b Ostróda</p>
          </div>
          <div className="contactTextOnlyWrap" id="NIP">
            <p className="contactP">
              <span className="bold">NIP:</span> 123-45-67-89
            </p>
          </div>
          <div className="contactTextOnlyWrap" id="REGON">
            <p className="contactP">
              <span className="bold">REGON:</span> 123456789
            </p>
          </div>
          <div className="contactTextOnlyWrap" id="accountNumberHeading">
            <p className="contactP">
              <span className="bold">Konto bankowe:</span>
            </p>
          </div>
          <div className="contactTextOnlyWrap" id="accountSwift">
            <p className="contactP">PKO BP SWIFT: BPKOPLPW</p>
          </div>
          <div className="contactTextOnlyWrap" id="accountNumber">
            <p className="contactP">12 1020 3613 0000 6102 0003 9552</p>
          </div>
          <Map />
          <Branch className="contactOliveBranch" id="branchLeft" />
          <Branch className="contactOliveBranch" id="branchRight" />
        </div>
      </section>
    );
  }
}
export default Contact;
