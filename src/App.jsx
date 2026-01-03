/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import Product from './pages/product'
import Pricing from './pages/Pricing'
import Homepage from './pages/HomePage'
import NotFound from './pages/NotFound'
import AppLayout from './pages/AppLayout'
import Login from './pages/Login'
import CityList from './Components/CityList'
function App() {
const [count, setCount] = useState(0)
const [cities , setCities ] = useState([]);
const [isLoading ,setIsLoading] =useState(false)
useEffect(function ()
{
async function getCities()
{
try{
    setIsLoading(true)

  const res = await fetch("http://localhost:9000/cities") ;

  const data = await  res.json()
  console.log(data)
  setCities(data)
}catch(error)
{
console.log(error.message)
}finally{
  setIsLoading(false)
}

}
getCities()
}


,[])



  return (

<>
   <BrowserRouter>
   
   <Routes>

    <Route path ="product" element = {<Product/>} />
    <Route path='pricing' element = {<Pricing/>}  />
    <Route index element ={ <Homepage/> } />
    <Route  path="app" element ={<AppLayout/>}  >
  
    <Route path='cities' element ={<CityList cities={cities} isLoading={isLoading}/>}></Route>

    <Route path='countries' element ={<p> those are the countries Countries</p>}></Route>
      </Route>

    <Route path='login' element ={<Login/>}></Route>
     <Route path='*' element ={<NotFound/>} />
   </Routes>
   
    </BrowserRouter>
    </>
  )
}

export default App
