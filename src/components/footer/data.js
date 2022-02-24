import { pages } from "../../routes";

export const socials = [
  {
    id: "facebook",
    name: "Facebook",
    url: "https://www.facebook.com/laundraville",
    icon: "fa-brands fa-facebook",
  },
  {
    id: "twitter",
    name: "Twitter",
    url: "https://www.twitter.com/laundraville",
    icon: "fa-brands fa-twitter",
  },
  {
    id: "instagram",
    name: "Instagram",
    url: "https://www.instagram.com/laundraville",
    icon: "fa-brands fa-instagram",
  },
  {
    id: "youtube",
    name: "Youtube",
    url: "https://www.youtube.com/laundraville",
    icon: "fa-brands fa-youtube",
  },
  {
    id: "pinterest",
    name: "Pinterest",
    url: "https://www.pinterest.com/laundraville",
    icon: "fa-brands fa-pinterest-p",
  },
  {
    id: "tumblr",
    name: "Tumblr",
    url: "https://www.tumblr.com/laundraville",
    icon: "fa-brands fa-tumblr",
  },
];

export const footerLinks = [
  {
    id: "navLinks",
    header: "Laundraville",
    items: pages.map((page) => {
      return (
        <p key={page.id}>
          <a href={page.to}>{page.name}</a>
        </p>
      );
    }),
  },
  {
    id: "test",
    header: "Laundraville",
    items: pages.map((page) => {
      return (
        <p key={page.id}>
          <a href={page.to}>{page.name}</a>
        </p>
      );
    }),
  },
];
