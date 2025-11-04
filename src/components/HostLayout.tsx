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
                    <NavLink to={"/host"} end
                             style ={({ isActive }):React.CSSProperties | undefined => isActive ? activeStyles : undefined }
                    >Dashboard</NavLink>
                    <NavLink to={"/host/income"}
                             style ={({ isActive }):React.CSSProperties | undefined => isActive ? activeStyles : undefined }
                    >Income</NavLink>
                    <NavLink to={"/host/reviews"}
                             style ={({ isActive }):React.CSSProperties | undefined => isActive ? activeStyles : undefined }
                    >Reviews</NavLink>
                    <NavLink to={"/host/vans"}
                             style ={({ isActive }):React.CSSProperties | undefined => isActive ? activeStyles : undefined }
                    >vans</NavLink>
                </nav>
            </header>
            <Outlet/>
        </>
    )
}