import {Outlet} from "react-router-dom";
import Header from "./Header.tsx";
import type {JSX} from "react";
import Footer from "./Footer.tsx";

export default function Layout(): JSX.Element {
    return (
        <div className="site-wrapper">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}