const NavItem = ({title, changePage}) => {
    return (
        <div>
            <li onClick={() => changePage(title)} className="nav-item btn btn-danger mx-1 border-warning">{title}</li>
        </div>
    );
};

export default NavItem;