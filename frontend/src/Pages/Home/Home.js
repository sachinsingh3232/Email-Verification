import React, { useEffect, useState } from 'react'
import './home.css'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const [user, setUser] = useState('')
  const navigate = useNavigate()
  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("user"))) {
      navigate('/login');
      return;
    };
    setUser(JSON.parse(localStorage.getItem("user")))
  }, [])
  const logoutHandler = () => {
    localStorage.removeItem("user")
    navigate('/login');
  }
  return (
    <div className='home'>
      <div className='nav'>
        <img src='https://highwaydelite.com/assets/logo2-a2f23723.webp' alt='' className='img'/>
        <span onClick={logoutHandler} className='logout'>logout</span>
      </div>
      <h1>Welcome {user.fName + " " + user.lName} </h1>
    </div>
  )
}

export default Home
