import Navigation from "./Navigation"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Shop from "./Shop"
import Reviews from "./Reviews"
import { BrowserRouter, Route, Routes } from "react-router-dom"
function App() {

  const team=[
    {
      img:"../public/team01.jpg",
      name:"MOSSES JOSH",
      stat:"CEO"
    },
    {
      img:"../public/team02.jpg",
      name:"YANARA",
      stat:"Manager"
    },
    {
      img:"../public/team04.jpg",
      name:"JOHN RICK",
      stat:"Customer Support"
    },
    {
      img:"../public/team03.jpg",
      name:"HELLEN",
      stat:"Supply Chain Manager"
    }
  ]
  
  
  return (
    <>
    {/* <About /> */}
    
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/About" element={<About da1={team} />}></Route>
          <Route path="/Reviews" element={<Reviews />}></Route>
          <Route path="/Shop" element={<Shop />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}



export default App
