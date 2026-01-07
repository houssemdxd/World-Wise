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
import CountryList from './Components/CountryList'
import City from './Components/City'
import Form from "./Components/Form"
import { CitiesProvider } from './contexts/CitiesContext' 
import { AuthProvider } from './contexts/FakeAuthContext' 




function App() {



  return (

<>
<AuthProvider>

<CitiesProvider>
   <BrowserRouter>
   
   <Routes>

    <Route path ="product" element = {<Product/>} />
    <Route path='pricing' element = {<Pricing/>}  />
    <Route index element ={ <Homepage/> } />

    <Route  path="app" element ={<AppLayout/>}  >

      <Route index element ={<CityList />}></Route>
      <Route path='cities/:id' element={<City/>}></Route>
      <Route path='cities' element ={<CityList />}></Route>
      <Route path='countries' element ={<CountryList />}></Route>
      <Route path='form' element={<Form/>}  ></Route>
      
      </Route>

    <Route path='login' element ={<Login/>}></Route>
     <Route path='*' element ={<NotFound/>} />
   </Routes>
   
    </BrowserRouter>
    
</CitiesProvider>

</AuthProvider>
    </>
  )
}

export default App
