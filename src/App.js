import React, { createContext , useState } from "react";
import {Routes, Route} from 'react-router-dom'
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Service from "./Components/Service";


export const Context = createContext()
const App = () => {
 
  const [color , setColor] = useState("#fff")
 
  function changeColor(){
    if(color === "#282c35"){
     return "#fff"
    }else{
     return "black"
    }
   }

  return(
    <>
    <Context.Provider value={{color, setColor, changeColor}}>
      <Navbar />
      <Routes>
       <Route path="/" element={<Home />} />
       <Route exact path="/contact" element={<Contact />} />
       <Route exact path="/service" element={ <Service />} />
      </Routes>
      </Context.Provider>
      
    </>
  )
}

export default App