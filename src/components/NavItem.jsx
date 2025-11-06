import {Context} from "../utils/context.js";
import {useContext} from "react";
import Button from "./ui/Button.jsx";

const NavItem = ({title}) => {
    const {changePage} = useContext(Context);
    return (
        <Button callback={() => changePage(title)}>{title}</Button>

    );
};

export default NavItem;