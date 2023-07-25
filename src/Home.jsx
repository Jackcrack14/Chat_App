import e from 'cors'
import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"

const Home = ({socket}) => {
    const navigate = useNavigate()
    const [userName, setUserName] = useState({
      username:"",
      password:""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem("userName", userName.username)
        socket.emit("newUser", {userName, socketID: socket.id})
        navigate("/chat")
    }
    
  return (
    <>
    <form className='home__container' onSubmit={handleSubmit}>
        <h2 className='home__header'>Sign in to Open Chat</h2>
        <label htmlFor="username">Username</label>
        <input type="text" 
        minLength={6} 
        name="username" 
        id='username'
        className='username__input' 
        value={userName} 
        onChange={e => setUserName(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input type="password" minLength={6} name="password" id="password" className="username__input" />
        <button type="submit" className='home__cta'>Sign In</button>
        <input type='button' value="Sign Up" />
    </form>
    
    </>
  )
}

export default Home;