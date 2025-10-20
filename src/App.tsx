import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import type {JSX} from "react";
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans.tsx";


function App() :JSX.Element {
    return (
        <BrowserRouter>
            <header>
                <Link className="site-logo" to="/">#VanLife</Link>
                <nav>
                    <Link to="/about">About</Link>
                    <Link to="/vans">Vans</Link>
                </nav>
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/vans" element={<Vans />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
