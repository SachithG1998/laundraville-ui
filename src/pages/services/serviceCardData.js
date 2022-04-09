import wash from "../../assets/images/services/cwashing.png";
import dry from "../../assets/images/services/cdrying.png";
import iron from "../../assets/images/services/cironing.png";
import sew from "../../assets/images/services/csewing.png";

const baseTimeForDelay = 100;

const serviceCardData = [
  {
    id: 1,
    image: {
      src: wash,
      alt: "",
      att: (
        <a href="https://lovepik.com/images/png-clothes-drying.html">Clothes Drying Png vectors by Lovepik.com</a>
      ),
    },
    title: "Dirty to Clean",
    text: "The washing service at Laundraville is of high quality, convenient and affordable. Each piece of cloth that is brought to Laundraville will be washed with great care using advanced cleaning techniques. Even if your clothes need a little extra care, like your hand-wash only clothes, we ensure a safe washing process. We also provide the facility of stain removal at your request. We remove stains such as, dirt, ink, wine, grease, grass stains, using the best eco-friendly detergents.",
    animationDelay: baseTimeForDelay,
  },

  {
    id: 2,
    image: {
      src: dry,
      alt: "Laundry Clothes Drying",
      att: (
        <a href="https://lovepik.com/images/png-clothes-drying.html">Clothes Drying Png vectors by Lovepik.com</a>
      ),
    },
    title: "Wrinkly to Straight",
    text: "We offer an outstanding dry-cleaning service at Laundraville. It is a solvent-based washing process, which utilizes advanced cleaning techniques. Each of the garments brought to us undergoes a thorough expert inspection and ensures safe and high quality clean for your clothes.",
    animationDelay: baseTimeForDelay * 2,
  },

  {
    id: 3,
    image: {
      src: iron,
      alt: "Woman Ironing CLothes",
      att: (
        <a href="https://lovepik.com/images/png-clothes-drying.html">Clothes Drying Png vectors by Lovepik.com</a>
      ),
    },
    title: "Soaked to Dry",
    text: "The professional ironing service at Laundraville is exceptional and we ensure that you’ll get your clothes as good as new. A highly trained team at Laundravillet is ready to do the very boring, ironing chore for you with the utmost care, giving attention to every detail.",
    animationDelay: baseTimeForDelay * 3,
  },

  {
    id: 4,
    image: {
      src: sew,
      alt: "sewing CLothes",
      att: (
        <a href="https://lovepik.com/images/png-cartoon.html">Cartoon Png vectors by Lovepik.com</a>
      ),
    },
    title: "Mending",
    text: "Laundraville offers an exceptional sewing service to keep your clothes looking the best on you. The team of expert tailors handle anything from very small repairs to complete alterations, such as hemming dresses and pants, replacing buttons, shortening sleeves, repairing holes etc. ",
    animationDelay: baseTimeForDelay * 4,
  },
];

export default serviceCardData;
