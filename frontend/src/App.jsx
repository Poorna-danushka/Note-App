import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes ,Route } from 'react-router-dom'

import Header from '../src/components/Header.jsx'
import Home from '../src/pages/Home/Home.jsx'
import SignIn from '../src/pages/SignIn/Signin.jsx'
import SignUp from '../src/pages/SignUp/Signup.jsx'
import Profile from '../src/pages/Proflie/Proflie.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sign-in' element={<SignIn/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
    </BrowserRouter>
    


    
  )
}

export default App
