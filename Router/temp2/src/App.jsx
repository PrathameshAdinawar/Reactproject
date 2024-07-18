import Home from './Home'
import About from './About'
import Shop from './Shop'
import Reviews from './Reviews'
import Contact from './Contact'
import Navigation from './Navigation'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  

<BrowserRouter>
<Navigation />
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/About' element={<About/>}></Route>
  <Route path='/Shop' element={<Shop/>}></Route>
  <Route path='/Reviews' element={<Reviews/>}></Route>
  <Route path='/Contact' element={<Contact/>}></Route>
</Routes>
</BrowserRouter>
}
export default App
