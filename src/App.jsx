import React from 'react'
import { BrowserRouter, Routes, Route,  } from 'react-router-dom';
import Landing from './Component/Landing';
import OtpVerify from './Pages/OtpVerify';
import Navbar from './Component/Navbar';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Forgot from './Pages/Forgot';
import ForgotVerify from './Pages/ForgotVerify';
import OtpMiddle from './Pages/OtpMiddle';
import UserDasboard from './Pages/UserDasboard';
import Footer from './Component/Footer';

function App() {
  return (
   <>
  <BrowserRouter>
    <Routes>

        {/* Parent Route */}
        <Route path="/" element={<Navbar />}>
          <Route index element={<Landing />} />
          

          {/* Nested routes (⚠ HERE: remove / from child paths) */}
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="otp-verify" element={<OtpVerify />} />
          <Route path='/forgot' element={<Forgot/>}/>
          <Route path='/forgot-verify' element={<OtpMiddle/>}/>
          <Route path='/forgot-reset' element={<ForgotVerify/>}/>
          <Route path='/Dasboard' element={<UserDasboard/>}/>
         
        </Route>

      </Routes>

  
  
  
  </BrowserRouter>
  {/* <UserDasboard/> */}
  <Footer/>
   
   </>
  )
}

export default App
