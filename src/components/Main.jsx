import Home from "./Home.jsx";
import Contact from "./Contact.jsx";
import {navItems} from "../utils/constants.js";
import AboutME from "./AboutME.jsx";
import StarWars from "./StarWars.jsx";
import {Context} from "../utils/context.js";
import {useContext} from "react";

const Main = () => {
    const {page} = useContext(Context);
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