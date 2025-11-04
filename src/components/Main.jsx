import Home from "./Home.jsx";
import Contact from "./Contact.jsx";
import {navItems} from "../utils/constants.js";
import AboutME from "./AboutME.jsx";
import StarWars from "./StarWars.jsx";

const Main = ({page}) => {
    switch (page) {
        case navItems[1]:
            return <AboutME/>;
        case navItems[2]:
            return <StarWars/>;
        case navItems[3]:
            return <Contact/>;
        default:
            return <Home/>;

    }
  };

export default Main;