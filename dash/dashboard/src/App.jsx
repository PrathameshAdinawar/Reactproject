
import { Route,BrowserRouter,Routes } from "react-router-dom" 
import Sidemap from "./Sidemap"
import Home from "./Home"
import Settings from "./Settings"
import About from "./About"
import Nav from "./Nav"
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Home />}></Route> 
          <Route path="/about" element={<About />}></Route>
          <Route path="/settings" element={<Settings />}></Route>  
          <Route path="/nav" element={<Nav />}></Route>  
         
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
