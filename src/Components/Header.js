import { NavLink } from "react-router-dom";
const Header = () => {
    return (
        <div>
            <ul className="nav">
                <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        to="/"
                        exact
                        activeClassName="active"
                    >
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        to="/products"
                        activeClassName="active"
                    >
                        Products
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        to="/about-us"
                        activeClassName="active"
                    >
                        About us
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Header;
