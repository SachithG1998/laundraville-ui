import React from "react";
import "./about.css";

import Sachith from "../../assets/images/about/sachith.png";
import Yoshitha from "../../assets/images/about/yoshitha.png";
import Hiruni from "../../assets/images/about/hiruni.png";

function About() {
  return (
    <div className="page-about" style={{ marginTop: "100px" }}>
      <div className="glassy light rounded-corners mx-5">
        <div className="text-center pt-3">
          <h2>About Us</h2>
        </div>

        <div className="paragraph">
          <p className="text0">
            if you are residing in colombo and looking for quality dry cleaning
            and laundry services nearby your areas, then choose our Laundry, One
            of the best launderette company in colombo. our Laundry is proud to
            do 24 hours laundry and dry cleaning services with free same day
            collection and next day delivery. Our services include wash, dry &
            fold, wash and iron, dry cleaning, ironing service only, home and
            bedding, clothing alteration and shoe repair. The service is simple
            – Place an order in a matter of seconds, Our driver will come to
            your address as per your collection time, pickup your clothes, bring
            them to our partner facility then cleaning expert do processing and
            next day deliver to your door step in your delivery schedule. Our
            customer service employees ensure you face no difficulty. Customer’s
            every item we clean is treated with care and respect by our highly
            experienced team of experts who provides world class cleaning
            service, every time. We are working hard to earn your trust and It’s
            our pleasure to keep our customers satisfied with our quality & 100%
            happiness services
          </p>
        </div>
      </div>
      <div className="glassy light rounded-corners mx-5 my-5 py-4">
        <div className="container-fluid">
          <div className="text-center">
            <h2>Meet our team...</h2>
            <p>We always like to help you</p>
            <div className="row g-5">
              <div className="col-12 col-md-6 col-lg-4">
                <img
                  src={Sachith}
                  className="img-fluid rounded-circle"
                  alt="Sachith"
                />
                <div className="my-3">
                  <h4>Sachith</h4>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <img
                  src={Yoshitha}
                  className="img-fluid rounded-circle"
                  alt="Sachith"
                />
                <div className="my-3">
                  <h4>Yoshitha</h4>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <img
                  src={Hiruni}
                  className="img-fluid rounded-circle"
                  alt="Sachith"
                />
                <div className="my-3">
                  <h4>Hiruni</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
