import Home from "../pages/home/Home";
import Contact from "../pages/contact/Contact";
import About from "../pages/about/About";
import SignUp from "../pages/signup/SignUp";
import Wishlist from "../pages/wishlist/Wishlist";

import cardimg1 from "../assets/images/cardimg1.png";
import cardimg2 from "../assets/images/cardimg2.png";
import cardimg3 from "../assets/images/cardimg3.png";
import cardimg4 from "../assets/images/cardimg4.png";
import stars1 from "../assets/images/star1.png";
import stars2 from "../assets/images/star2.png";

export const Routers = [
  {
    id: 1,
    path: "/",
    title: "Home",
    element: <Home />,
  },
  {
    id: 2,
    path: "/contact",
    title: "Contact",
    element: <Contact />,
  },
  {
    id: 3,
    path: "/about",
    title: "About",
    element: <About />,
  },
  {
    id: 4,
    path: "/signup",
    title: "SignUp",
    element: <SignUp />,
  },
  {
    id: 5,
    path: "/wishlist",
    title: "Wishlist",
    element: <Wishlist />,
  },
];

export const cardproduct = [
  {
    id: 1,
    img: cardimg1,
    title: "The north coat",
    price: "$260",
    delprice: "$360",
    stars: stars1,
    limit: "(65)",
  },
  {
    id: 1,
    img: cardimg2,
    title: "Gucci duffle bag",
    price: "$960",
    delprice: "$1160",
    stars: stars2,
    limit: "(65)",
  },
  {
    id: 3,
    img: cardimg3,
    title: "RGB liquid CPU Cooler",
    price: "$160",
    delprice: "$170",
    stars: stars2,
    limit: "(65)",
  },
  {
    id: 4,
    img: cardimg4,
    title: "Small BookSelf",
    price: "$360",
    stars: stars1,
    limit: "(65)",
  },
];

export const starproduct = [
  {
    id: 1,
    star: stars1,
  },
];
