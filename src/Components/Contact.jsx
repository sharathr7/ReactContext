import React, { useContext } from 'react'
import { Context } from '../App'

const Contact = () => {
  const data = useContext(Context)
  return (
    <div className='contact' style={{background: data.color, color: data.changeColor()}}>
        <h1>You can visit here :- <a href='https://roshansah.com/'>roshansah.com</a></h1>
    </div>
    
  )
}

export default Contact