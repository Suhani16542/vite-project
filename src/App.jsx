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
import UserDasboard from './Pages/UserPenal';
import Footer from './Component/Footer';
import UserPenal from './Pages/UserPenal';
import AdminDashboard from './Pages/adminDashboard/AdminDashboard';
import AdminHome from './Pages/adminDashboard/AdminHome';
import AllUsers from './Pages/adminDashboard/AllUsers';

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
          <Route path='/Dasboard' element={<UserPenal/>}/>
         
        </Route>
         <Route path='adminDashboard' element={<AdminDashboard/>}>
          <Route index element={<AdminHome/>}/>
          <Route path='users' element={<AllUsers/>}/>
         
         </Route>

      </Routes>

  
  
  
  </BrowserRouter>
  {/* <UserDasboard/> */}
  {/* <Footer/> */}
   
   </>
  )
}

export default App
