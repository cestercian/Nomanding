import { BrowserRouter, Routes, Route } from "react-router-dom"
import type {JSX} from "react";
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans.tsx";
import VanDetails from "./pages/VanDetails.tsx";
import Layout from "./components/Layout.tsx";


function App() :JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/vans" element={<Vans />} />
                    <Route path="/vans/:id" element={<VanDetails/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
