import {Navigate, Outlet, useLocation} from "react-router-dom";
import { type JSX} from "react";

export default function Authentication():JSX.Element{

    const isAuthenticated:boolean = localStorage.getItem("loggedIn") === "true"
    const location = useLocation()

    if (!isAuthenticated){
        return <Navigate to={"login"}
                         state={{
                             message : "You must Login first !" ,
                             from : location.pathname
                            }}
                         replace />
    }

    return <Outlet/>
}
