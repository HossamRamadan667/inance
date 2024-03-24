import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
            <div className="container-fluid">

                <NavLink className="navbar-brand" id="logo" to="/">INANCE</NavLink>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link " aria-current="page" to="/about">about</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link " aria-current="page" to="/services">Services</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link " aria-current="page" to="/contact">Contact</NavLink>
                        </li>

                    </ul>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;