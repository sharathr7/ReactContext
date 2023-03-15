import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { Context } from '../App'

const Navbar = () => {
  const data = useContext(Context)
  return (
   <>
    <div className='navbar' style={{background: data.color, color: data.changeColor()}}>
        <h2> I have changed theme to {data.color=== "#fff" ? "Light" : "Dark"} </h2>
        <p> Geekster </p>
        <div className='menu'>
            <Link to="/"> Home </Link>
            <Link to="/contact"> Contact</Link>
            <Link to="/service"> Service </Link>
        </div>
        <button onClick={() => {
           data.color === "#fff" ? data.setColor("#282c35") : data.setColor("#fff")
        }}> Toggle Theme to {data.color=== "#fff" ? "Dark" : "Light"} </button>
    </div>
   </>
  )
}

export default Navbar