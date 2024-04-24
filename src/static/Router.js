import Home from "../pages/home/Home";
import Contact from "../pages/contact/Contact";
import About from "../pages/about/About";
import SignUp from "../pages/signup/SignUp";

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
];
