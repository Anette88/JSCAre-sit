import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";

function Nav() {

    return (
        <nav>

            <Link className="navbar" to="/">Home</Link>
            <Link className="navbar" to="/grass">Grass</Link>
            <Link className="navbar" to="/contactus">Contact us</Link>
        </nav>
    );
}

export default Nav;