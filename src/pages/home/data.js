import card1 from "../../assets/images/home/Washing Clothes.png";
import card2 from "../../assets/images/home/Drying Clothes.png";
import card3 from "../../assets/images/home/Ironing Clothes.png";

export const introCardData = {
  title: "Welcome to Laundraville!",
  text: "A place where trust is more than just words. Rejuvanating your fasionable clothes and more has never been this breathtaking.",
  button: {
    name: "About Us",
    to: "/about",
  },
};

export const infoCardsData = [
  {
    id: 1,
    image: {
      src: card1,
      alt: "Man Washing Clothes",
      att: (
        <a href="https://lovepik.com/images/png-cartoon.html">
          Cartoon Png vectors by Lovepik.com
        </a>
      ),
    },
    title: "Efficient",
    text: "Our staff is always hands-on ready to give you the best service as efficiently as possible. We believe efficiency has direct proportinality to your valuable trust.",
  },
  {
    id: 2,
    image: {
      src: card2,
      alt: "Laundry Clothes Drying",
      att: (
        <a href="https://lovepik.com/images/png-clothes-drying.html">
          Clothes Drying Png vectors by Lovepik.com
        </a>
      ),
    },
    title: "Love and Care",
    text: "We make infinity percent sure that your laundry receive the love and care that you would show them.",
  },
  {
    id: 3,
    image: {
      src: card3,
      alt: "Woman Ironing CLothes",
      att: (
        <a href="https://lovepik.com/images/png-clothes-drying.html">
          Clothes Drying Png vectors by Lovepik.com
        </a>
      ),
    },
    title: "We have Chemistry with Laundry",
    text: "We just haven't told people yet but here's a secret...your laundry and us are seeing each other. I think we have enough chemistry to make it work.",
  },
];
