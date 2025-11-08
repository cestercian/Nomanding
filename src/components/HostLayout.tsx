import { NavLink, Outlet} from "react-router-dom";
import * as React from "react";

export default function HostLayout(){

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <>
            <header>
                <nav>
                    <NavLink to={"."} end
                             style ={({ isActive }):React.CSSProperties | undefined => isActive ? activeStyles : undefined }
                    >Dashboard</NavLink>
                    <NavLink to={"income"}
                             style ={({ isActive }):React.CSSProperties | undefined => isActive ? activeStyles : undefined }
                    >Income</NavLink>
                    <NavLink to={"reviews"}
                             style ={({ isActive }):React.CSSProperties | undefined => isActive ? activeStyles : undefined }
                    >Reviews</NavLink>
                    <NavLink to={"vans"}
                             style ={({ isActive }):React.CSSProperties | undefined => isActive ? activeStyles : undefined }
                    >Vans</NavLink>
                </nav>
            </header>
            <Outlet/>
        </>
    )
}