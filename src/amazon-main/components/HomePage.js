import React from "react";
import Banner from "../media/banner (1).jpg";
import "./HomePage.css";
import { HomeCardFour, HomeCardOne } from "./HomeCard.js";

const HomePage = () => {
  return (
    <>
      <div className="home">
        <div className="home-container">
          <img className="home-image" src={Banner} alt="banner" />
          <div className="home-card-container">
            <HomeCardFour
              title="Amazon Pay "
              text1="Flight tickets"
              text2="Bus tickets"
              text3="Train tickets"
              text4="Travel Products"
              image1="/flight.jpg"
              image2="/bus.jpg"
              image3="/train.jpg"
              image4="/travel.jpg"
            />
            <HomeCardFour
              title="Pick up where you left off"
              text1="Dabur Chyawanpras..."
              text2="Wakefit Hollow Fibr…"
              text3="Xtore® Home Decor…"
              text4="Nivea Deep Impact…"
              image1="/pick1.jpg"
              image2="/pick2.jpg"
              image3="/pick3.jpg"
              image4="/pick4.jpg"
            />
            <HomeCardFour
              title="Keep shopping for"
              text1="Campus Men's HAS…"
              text2="Campus new..."
              text3="Petronics Extension"
              text4="Amazon Brand Pilo..."
              image1="/keep1.jpg"
              image2="/keep2.jpg"
              image3="/keep3.jpg"
              image4="/keep4.jpg"
            />
            <HomeCardOne title="Join Prime" image="/one-5.jpg" />
            {/* <HomeCardOne title="Join Prime" image="/kindle.jpg" /> */}
            {/* <img alt="kindle" src="./kindle.jpg" style={{zIndex:999, width:300, height: 200, marginTop: 10}}></img> */}
          </div>
          <div className="home-card-container">
            <HomeCardOne
              title="Household"
              image="/fresh1.jpg"
            />
            <HomeCardOne
              title="Snacks"
              image="/fresh2.jpg"
            />
            <HomeCardOne
              title="Health Conscious"
              image="/fresh3.jpg"
            />
            <HomeCardOne
              title="Cleansing Products"
              image="/fresh4.jpg"
            />
          </div>
          <div className="home-card-container">
            <HomeCardOne title="Best deals in Electronics" image="/one-1.jpg" />
            <HomeCardFour
              title="Checkout Other Brands"
              image1="/logo-1.jpg"
              image2="/logo-5.png"
              image3="/logo-2.png"
              image4="/logo-4.png"
            />
          </div>
          <div className="home-card-container">
            <HomeCardOne title="Binge Watch Prime Videos" image="/one-3.jpg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
