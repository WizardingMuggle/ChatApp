import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

const Chat        =   lazy(() =>  import ('./pages/Chat'));
const Login       =   lazy(() =>  import ('./pages/Login'));
const Register    =   lazy(() =>  import ('./pages/Register'));
const SetAvatar   =   lazy(() =>  import ('./pages/SetAvatar'));
const SetUsername =   lazy(() =>  import ('./pages/SetUsername'));


function App() {
  return (
    <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/setAvatar" element={<SetAvatar/>} />
          <Route path='/setusername' element={<SetUsername/>} />
          <Route path="/" element={<Chat/>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
