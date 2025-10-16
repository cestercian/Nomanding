import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />}/>
          </Routes>
      </BrowserRouter>
  )
}

function Home(){
    return(
        <>HI !</>
    )
}

export default App
