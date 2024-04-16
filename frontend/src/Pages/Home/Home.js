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
  return (
    <div className='home'>
      <h1>Welcome {user.fName + " " + user.lName} </h1>
    </div>
  )
}

export default Home