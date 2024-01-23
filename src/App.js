import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Homepage from './pages/Homepage'
const App = () => {
const [token,setToken] = useState(false);
console.log(`TOKEN: ${token}`);
if(token){
  sessionStorage.setItem("token",JSON.stringify(token));
}
useEffect(()=>{
  let data = JSON.parse(sessionStorage.getItem("token"));
  setToken(data);
},[])
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path={'/signup'} element={<SignUp/>}/>
        <Route path={'/'} element={<Login setToken={setToken}/>}/>
        {token?<Route path={'/homepage'} element={<Homepage token={token} />} />:""}
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App