import React from "react";
import "../../styles/styles.scss";

class About extends React.Component {
  render() {
    return (
      <section className="aboutSection">
        <h1>Pizzeria San Biagio</h1>
        <p className="aboutP">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
          <h6 className="aboutH6">Miejsce na podpis</h6>
        </p>
      </section>
    );
  }
}
export default About;