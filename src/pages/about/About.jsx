import React from "react";
import "./about.css";
function About() {
  return (
    <div>
      <main style={{ padding: "10rem 0" }}>
        <h2>About us</h2>
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
        <div className="div2">
          <div className="container-fluid">
            <h2>meet our team..</h2>
            <p>we olways like to help you</p>
            <div className="row">
              <div className="col">
                {" "}
                <img
                  src="https://mdbootstrap.com/img/new/standard/city/047.webp"
                  className="img-fluid rounded-circle"
                  alt=""
                />
                <p className="text1">
                  sachith
                  <br>email:</br>
                  <br>tel no:+94714056005</br>
                </p>
              </div>
              <div className="col">
                <img
                  src="https://mdbootstrap.com/img/new/standard/city/047.webp"
                  className="img-fluid rounded-circle"
                  alt=""
                />
                <p className="text2">
                  yoshitha
                  <br>email:</br>
                  <br>tel no:+94770666846</br>
                </p>
              </div>
              <div className="col">
                <img
                  src="https://mdbootstrap.com/img/new/standard/city/047.webp"
                  className="img-fluid rounded-circle"
                  alt=""
                />
                <p className="text3">
                  hiruni kaushalya
                  <br>email:</br>
                  <br>tel no:+94741090036</br>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default About;
