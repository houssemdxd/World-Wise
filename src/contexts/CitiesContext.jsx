/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext ,useState,useEffect, useContext} from "react"

const CitiesContext = createContext()


function CitiesProvider({children}){

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

return <CitiesContext.Provider value={{cities,isLoading}} >

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