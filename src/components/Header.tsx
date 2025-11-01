import {Link} from "react-router-dom";
import type {JSX} from "react";


export default function Header(): JSX.Element {
    return (
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
                <Link to="/about">About</Link>
                <Link to="/vans">Vans</Link>
            </nav>
        </header>
    )
}