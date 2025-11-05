import {Context} from "../utils/context.js";
import {useContext} from "react";
const NavItem = ({title}) => {
    const {changePage} = useContext(Context);
    return (
        <div>
            <li onClick={() => changePage(title)} className="nav-item btn btn-danger mx-1 border-warning">{title}</li>
        </div>
    );
};

export default NavItem;