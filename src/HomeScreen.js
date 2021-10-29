import React, {useContext, useEffect} from 'react'
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Intro from './Components/Intro/Intro';
import ProductList from './Components/ProductList/ProductList';
import Toggle from './Components/Toggle/Toggle'
import './App.css'
import {ThemeContext} from "./context"
import Whatsapp from './Components/Whatsapp/Whatsapp';
import { useHistory } from "react-router-dom"
import {useAuth} from "./contexts/AuthContext"
const HomeScreen = () => {
    const history = useHistory()
    const {user} = useAuth()
    console.log(user)
    const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  useEffect(() => {
      if(!user){
          history.push("/")

          return
      }
      history.push("/home")
  }, [user, history])
    return (
        <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
   <Toggle />
   <Whatsapp />
   <Intro />
   <About />
   <ProductList />
   <Contact />
    </div>
    )
}

export default HomeScreen


