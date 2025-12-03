import { BrowserRouter, Routes, Route } from "react-router-dom"
import type {JSX} from "react";
import Home from "./pages/Home"
import About from "./pages/About/About.tsx"
import NotFound from "./pages/NotFound.tsx";
import Vans from "./pages/vans/Vans.tsx";
import VanDetails from "./pages/vans/VanDetails.tsx";
import Layout from "./components/Layout.tsx";
import Dashboard from "./pages/Host/Dashboard.tsx";
import Income from "./pages/Host/Income.tsx";
import Reviews from "./pages/Host/Reviews.tsx";
import HostLayout from "./components/HostLayout.tsx";
import HostVans from "./pages/Host/HostVans.tsx";
import HostVanDetail from "./pages/Host/VanDetails/HostVanDetail.tsx";
import HostVanPricing from "./pages/Host/VanDetails/HostVanPricing.tsx";
import HostVanInfo from "./pages/Host/VanDetails/HostVanInfo.tsx";
import HostVanPhotos from "./pages/Host/VanDetails/HostVanPhotos.tsx";
import Login from "./pages/Login.tsx";


function App() :JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>

                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="login" element={<Login />}/>
                    <Route path="vans" element={<Vans />} />
                    <Route path="vans/:id" element={<VanDetails/>} />

                    <Route path="host" element={<HostLayout/>}>

                        <Route index element={<Dashboard/>}/>
                        <Route path="income" element={<Income/>}/>
                        <Route path="reviews" element={<Reviews/>}/>
                        <Route path="vans" element={<HostVans/>}/>
                        <Route path="vans/:hostId" element={<HostVanDetail/>}>
                            <Route index element={<HostVanInfo/>}/>
                            <Route path="Pricing" element={<HostVanPricing/>}/>
                            <Route path="Photos" element={<HostVanPhotos/>}/>
                        </Route>

                    </Route>

                    <Route path="*" element={<NotFound />} />

                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
