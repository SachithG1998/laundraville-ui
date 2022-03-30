import wash from "../../assets/images/services/Washing.png";
import dry from "../../assets/images/services/drycleaning.jpeg";
import iron from "../../assets/images/services/ironing.jpeg";
import sew from "../../assets/images/services/sewing.jpg";

const baseTimeForDelay = 100;

const serviceCardData = [
  {
    id: 1,
    image: {
      src: wash,
      alt: "",
      att: (
        <a href="https://lovepik.com/images/png-cartoon.html">
          Cartoon Png vectors by Lovepik.com
        </a>
      ),
    },
    title: "Dirty to Clean",
    text: "We wash your clothes for you at an affordable price. Laundraville offers a high quality and convenient washing service to all our customers. Each piece of cloth that is brought to Laundromat will be washed with great care using advanced cleaning techniques.",
    animationDelay: baseTimeForDelay,
  },

  {
    id: 2,
    image: {
      src: dry,
      alt: "Laundry Clothes Drying",
      att: (
        <a href="https://lovepik.com/images/png-clothes-drying.html">
          Clothes Drying Png vectors by Lovepik.com
        </a>
      ),
    },
    title: "Wrinkly to Straight",
    text: "We make infinity percent sure that your laundry receive the love and care that you would show them.",
    animationDelay: baseTimeForDelay * 2,
  },

  {
    id: 3,
    image: {
      src: iron,
      alt: "Woman Ironing CLothes",
      att: (
        <a href="https://lovepik.com/images/png-clothes-drying.html">
          Clothes Drying Png vectors by Lovepik.com
        </a>
      ),
    },
    title: "Soaked to Dry",
    text: "We just haven't told people yet but here's a secret...your laundry and us are seeing each other. I think we have enough chemistry to make it work.",
    animationDelay: baseTimeForDelay * 3,
  },

  {
    id: 4,
    image: {
      src: sew,
      alt: "sewing CLothes",
      att: (
        <a href="https://lovepik.com/images/png-clothes-drying.html">
          Clothes Drying Png vectors by Lovepik.com
        </a>
      ),
    },
    title: "Mending",
    text: "We just haven't told people yet but here's a secret...your laundry and us are seeing each other. I think we have enough chemistry to make it work.",
    animationDelay: baseTimeForDelay * 4,
  },
];

export default serviceCardData;
