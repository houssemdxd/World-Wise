/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext ,useState,useEffect, useContext} from "react"

const CitiesContext = createContext()


function CitiesProvider({children}){

const [cities , setCities ] = useState([]);
const [isLoading ,setIsLoading] =useState(false)
const [currentCity , setCurrentCity] = useState({});

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

async function addCity(city)
{


try{
    setIsLoading(true)

  const res = await fetch("http://localhost:9000/cities",{
    method:"POST",
    body : JSON.stringify(city),
    headers:{"Content-Type":"application/json"},
  }) ;

  const data = await  res.json()
  console.log(data)
  setCities(prev=>[...prev,data])
}catch(error)
{
console.log(error.message)
}finally{
  setIsLoading(false)
}


}


async function getCity(id)
{
// API CALL
try{
setIsLoading(true)
    const res = await fetch(`http://localhost:9000/cities/${id}`)
    const data = await res.json()
    console.log(data)
    setCurrentCity(data);
}
catch(e)
{
console.log(e.message)
}finally
{
  setIsLoading(false)
}

}





return <CitiesContext.Provider value={{cities,isLoading,currentCity,getCity,addCity}} >

{children}

</CitiesContext.Provider>

}
function useCities()
{
    const context = useContext(CitiesContext)
    if(context === undefined)
    {
        throw new Error("this context its outside the desired component")
    }
    return context ;

}




export {CitiesProvider,useCities}