import {Outlet} from "react-router-dom";
import Header from "./Header.tsx";
import type {JSX} from "react";

export default function Layout(): JSX.Element {
    return (
        <>
            <Header/>
            <Outlet />
        </>
    )
}