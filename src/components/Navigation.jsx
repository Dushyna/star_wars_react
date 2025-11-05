import {navItems} from '../utils/constants.js'
import NavItem from "./NavItem.jsx";
const Navigation = () => {
    return (
        <nav className="fixed-top mt-2 ms-5">
            <ul className="nav">
                {navItems.map((item, index) => (
                    <NavItem  title={item} key={index}></NavItem>
                ))}

            </ul>
        </nav>
    );
};

export default Navigation;