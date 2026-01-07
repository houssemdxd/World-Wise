/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export  function AuthProvider({children})
{

const [user,setUser] = useState(null);
const [isAuthenticated,setIsAuthenticated] = useState(false)
const FAKE_USER = {
  name: "Houssem",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};


function login(email ,password){
if(email === FAKE_USER.email && password ===FAKE_USER.password)
{
    setUser(FAKE_USER)
    setIsAuthenticated(true)
    console.log(user)
}


}

function logout(){
    setIsAuthenticated(false)
    console.log("inside logout fucntion"+isAuthenticated)
    setUser({})
    console.log(user)
}






    return <AuthContext.Provider value={{user,isAuthenticated,login,logout}}>

{children}
    </AuthContext.Provider>
}

export function useAuth()
{
const  useAuth = useContext(AuthContext)

return useAuth ;
}
