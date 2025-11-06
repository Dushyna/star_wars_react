import {navItems} from '../utils/constants.js'
import NavItem from "./NavItem.jsx";
const Navigation = () => {
    return (
        <nav className="fixed top-3 left-12 flex gap-4">

                {navItems.map((item, index) => (
                    <NavItem  title={item} key={index}></NavItem>
                ))}


        </nav>
    );
};

export default Navigation;