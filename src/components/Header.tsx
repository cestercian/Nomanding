import {Link} from "react-router-dom";
import type {JSX} from "react";
import imageUrl from "../assets/images/avatar-icon.png"

export default function Header(): JSX.Element {
    return (
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
                <Link to="/host">Host</Link>
                <Link to="/about">About</Link>
                <Link to="/vans">Vans</Link>
                <Link to="login" className="login-link">
                    <img
                        src={imageUrl}
                        className="login-icon"
                     alt={'avatar-logo'}/>
                </Link>    
            </nav>
        </header>
    )
}