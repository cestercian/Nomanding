import {NavLink, Outlet} from "react-router-dom";
import * as React from "react";

export default function HostVanDetailLayout(){

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
                    >Details</NavLink>
                    <NavLink to={"Pricing"}
                             style ={({ isActive }):React.CSSProperties | undefined => isActive ? activeStyles : undefined }
                    >Pricing</NavLink>
                    <NavLink to={"Photos"}
                             style ={({ isActive }):React.CSSProperties | undefined => isActive ? activeStyles : undefined }
                    >Photos</NavLink>
                </nav>
            </header>
            <Outlet/>
        </>
    )
}