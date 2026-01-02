/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import Product from './pages/product'
import Pricing from './pages/Pricing'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
   
   <Routes>

    <Route path ="product" element = {<Product/>} />
    <Route path='pricing' element = {<Pricing/>}  />
     <Route path='homepage' element ={ <HomePage/> } />
     <Route path='*' element ={<NotFound/>} />
   </Routes>
   
    </BrowserRouter>
  )
}

export default App
