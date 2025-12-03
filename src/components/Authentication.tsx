import {Navigate, Outlet} from "react-router-dom";
import { type JSX} from "react";

export default function Authentication():JSX.Element{

    const isAuthenticated:boolean = false

    if (!isAuthenticated){
        return <Navigate to={"login"} state={{ message : "You must Login first" }}/>
    }

    return <Outlet/>
}
