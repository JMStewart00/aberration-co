import React from "react";
import CustomNav from "./layout/Navbar";
import { ReactComponent as FullLogo } from "../assets/images/svg/full--on-light.svg"

export default function App() {
  return (
    <>
      <CustomNav />
      <div id="main">
        <div className="container">
          <div className="row justify-content-center text-center py-5">
            <FullLogo />
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center text-center py-5">
            <h2 id="about">About</h2>
            <div className="col-lg-8 col-12 mx-auto">Through exclusive recipes, quality production, & standalone branding, Aberration Co. creates the provisions for the risk-takers, the thrill seekers & those who take departure in what is said to be norm. We aim to bring purpose back to both beer and coffee - creating not just a brand, but a lifestyle. Affiliating a rebellious, rogue, and downright live free culture with badass products, content, and locations. We believe that you should be able to dedicate yourself to a lifestyle without limitation; To express yourself through the products you associate with & the endeavors you seek.</div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center text-center py-5">
            <h2 id="culture">Drive Culture</h2>
            <div className="col-lg-8 col-12 mx-auto">We embody a culture of being true to oneself and create a movement around the beliefs in deviating from societal norms; MISSION DRIVEN CORE VALUES</div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center text-center py-5">
            <h2 id="personality">Big Personality</h2>
            <div className="col-lg-8 col-12 mx-auto">Establish a strong recognizable brand personality through design of the product line and locations, but at the same time derive a contradiction for each location standing true for both taprooms and lodging.</div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center text-center py-5">
            <h2 id="different">Be Different</h2>
            <div className="col-lg-8 col-12 mx-auto"> Why do it like everyone else? We strive to pioneer recipes and innovate production processes that break norms in brewing, coffee roasting and the places we visit. Creating a strong brand equity for our products by making them memorable, easily recognizable, and superior in quality and reliability. </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center text-center py-5">
            <h2 id="grit">Relentless Grit</h2>
            <div className="col-lg-8 col-12 mx-auto">Never settle, never stop pushing the limits - With company growth, we will continue to diversify the Aberration Co. product line and services outside of our core foundation.</div>
          </div>
        </div>
      </div>
    </>
  );
}