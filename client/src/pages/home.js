import React from "react";
import Header from "../components/header/header.component";
import About from "../components/about/about.component";
import Menu from "../components/menu/menu.component";

import RestaurantPhoto from "../assets/jpg/san-biagio.jpg";

class Home extends React.Component {
  render() {
    return (
      <>
        <div className="wrap">
          <Header />
          <div className="aboutAndPhotoWrap">
            <About />
            <img
              src={RestaurantPhoto}
              className="restaurantPhoto"
              alt="san-biagio-pizzeria"
            />
          </div>
          <Menu />
        </div>
      </>
    );
  }
}
export default Home;
