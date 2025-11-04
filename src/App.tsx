import { BrowserRouter, Routes, Route } from "react-router-dom"
import type {JSX} from "react";
import Home from "./pages/Home"
import About from "./pages/About/About.tsx"
import Vans from "./pages/vans/Vans.tsx";
import VanDetails from "./pages/vans/VanDetails.tsx";
import Layout from "./components/Layout.tsx";
import Dashboard from "./pages/Host/Dashboard.tsx";
import Income from "./pages/Host/Income.tsx";
import Reviews from "./pages/Host/Reviews.tsx";
import HostLayout from "./components/HostLayout.tsx";
import HostVans from "./pages/Host/HostVans.tsx";


function App() :JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="vans" element={<Vans />} />
                    <Route path="vans/:id" element={<VanDetails/>} />
                    <Route path="host" element={<HostLayout/>}>
                        <Route index element={<Dashboard/>}/>
                        <Route path="income" element={<Income/>}/>
                        <Route path="reviews" element={<Reviews/>}/>
                        <Route path="vans" element={<HostVans/>}/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
