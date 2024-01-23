import React from 'react'
import { useNavigate } from 'react-router-dom';

const Homepage = ({token}) => {
const navigate = useNavigate();
function handleLogout(){
    sessionStorage.removeItem("token");
    navigate("/");
}
console.log(`TOKEN: ${token.user}`);
  return (
    <div>
    <h3>
        Welcome back, {token.user.user_metadata.full_name}
    </h3>
    <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Homepage