import Navigation from "./Navigation"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Shop from "./Shop"
import Reviews from "./Reviews"
import { BrowserRouter, Route, Routes } from "react-router-dom"
function App() {


  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Reviews" element={<Reviews />}></Route>
          <Route path="/Shop" element={<Shop />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}



export default App
