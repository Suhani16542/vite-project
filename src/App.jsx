import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Landing from './Component/Landing';
import OtpVerify from './Pages/OtpVerify';
import Navbar from './Component/Navbar';

import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Forgot from './Pages/Forgot';
import ForgotVerify from './Pages/ForgotVerify';

import OtpMiddle from './Pages/OtpMiddle';
import UserPenal from './Pages/UserPenal';

// ✅ Admin Dashboard Imports
import AdminDashboard from './Pages/adminDashboard/AdminDashboard.jsx';
import AdminHome from './Pages/adminDashboard/AdminHome.jsx';
import AllUsers from './Pages/adminDashboard/AllUsers.jsx';
import AllsubAdmin from './Pages/adminDashboard/AllsubAdmin.jsx';
import Allemployee from './Pages/adminDashboard/Allemployee.jsx';
import FormManagement from './Pages/adminDashboard/FormManagement.jsx';
import Billing from './Pages/adminDashboard/Billing.jsx';
import Profile from './Pages/adminDashboard/Profile.jsx';
import Settings from './Pages/adminDashboard/Settings.jsx';
import Category from "./Pages/adminDashboard/Category.jsx";

// ✅ Subadmin Dashboard Imports
import SubadminDashboard from './Pages/subadminDashboard/SubadminDashboard.jsx';
import SubAdminHome from './Pages/subadminDashboard/SubAdminHome.jsx';
import RequestTracking from './Pages/subadminDashboard/RequestTracking.jsx';
import RequestFromAdmin from './Pages/subadminDashboard/RequestFromAdmin.jsx';
import SubCommunication from "./Pages/subadminDashboard/Communication.jsx";
import EmployeeWorkload from "./Pages/subadminDashboard/EmployeeWorkload.jsx";
import TeamsManagement from "./Pages/subadminDashboard/TeamsManagement.jsx";

// ✅ Employee Dashboard Imports
import EmployeeDashboard from './Pages/employeeDashboard/EmployeeDashboard.jsx';
import Communication from "./Pages/employeeDashboard/Communication.jsx";
import CompletedRequests from "./Pages/employeeDashboard/CompletedRequests.jsx";
import PendingRequests from "./Pages/employeeDashboard/PendingRequests.jsx";
import RequestInbox from "./Pages/employeeDashboard/RequestInbox.jsx";
import EmployeeHome from './Pages/employeeDashboard/EmployeeHome.jsx';

// ✅ User Dashboard Imports
import UserDashboard from './Pages/userDashboard/UserDashboard.jsx';
import UserHome from './Pages/userDashboard/UserHome.jsx';
import UserForm from './Pages/userDashboard/UserForm.jsx';
import UserPending from './Pages/userDashboard/UserPanding.jsx';
import UserHistory from './Pages/userDashboard/UserHistory.jsx';
import UserCommunication from './Pages/userDashboard/UserCommunication.jsx';

import MyChange from './mychanges/MyChange.jsx';
import ProtectedRoute from './Component/ProtectedRoute.jsx';

import FormLayout from './Pages/adminDashboard/FormLayout.jsx';
import FormCreate from './Pages/adminDashboard/FormCreate.jsx';

// ✅ PUBLIC FORMS PAGES (jo humne banayi thi)
import FormCategoryPage from './Component/Forms/FormCategoryPage.jsx';
import FormSubCategoryPage from './Component/Forms/FormSubCategoryPage.jsx';
import PublicFormList from './Component/Forms/publicFormList.jsx';

import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import SearchResults from './Pages/SearchResults.jsx';
import ViewFormDetails from './Pages/adminDashboard/ViewFormDetails.jsx';
import EditFormModal from './Pages/adminDashboard/EditFormModal.jsx';
import ApplyForm from './Component/Forms/ApplyForm.jsx';
import FormDetail from './Pages/FormDetail.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* NAVBAR WRAPPER */}
        <Route path="/" element={<Navbar />}>
          <Route index element={<Landing />} />
            <Route path="search" element={<SearchResults/> } />
     

          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="otp-verify" element={<OtpVerify />} />
          <Route path="forgot" element={<Forgot />} />
          <Route path="forgot-verify" element={<OtpMiddle />} />
          <Route path="forgot-reset" element={<ForgotVerify />} />
          <Route path="dashboard" element={<UserPenal />} />
          <Route path="mychange" element={<MyChange />} />

          {/* ✅ PUBLIC FORMS ROUTING (FIXED) */}
          <Route path="forms" element={<FormCategoryPage />} />
          <Route path="forms/:mainCategory" element={<FormSubCategoryPage />} />
          <Route
            path="forms/:mainCategory/:subCategory"
            element={<PublicFormList />}
          />
          <Route path="/form/:slug" element={<ApplyForm />} />
           <Route path="form-detail/:slug" element={<FormDetail />} />

        </Route>

        {/* ADMIN ROUTES */}
       <Route element={<ProtectedRoute />}>
  <Route path="adminDashboard" element={<AdminDashboard />}>
    <Route index element={<AdminHome />} />

    <Route path="users" element={<AllUsers />} />
    <Route path="subadmin" element={<AllsubAdmin />} />
    <Route path="employee" element={<Allemployee />} />
    <Route path="category" element={<Category />} />

    {/* FORM REQUEST */}
    <Route path="form-request" element={<FormLayout />}>
      <Route index element={<FormManagement />} />

      <Route path="FormCreate" element={<FormCreate />} />

      {/* ✅ FIXED ROUTE */}
      <Route
        path="viewdetails/:id"
        element={<ViewFormDetails />}
      />
    </Route>

    <Route path="billing" element={<Billing />} />
    <Route path="profile" element={<Profile />} />
    <Route path="settings" element={<Settings />} />
  </Route>
</Route>


        {/* SUBADMIN ROUTES */}
        <Route path="subadminDashboard" element={<SubadminDashboard />}>
          <Route index element={<SubAdminHome />} />
          <Route path="request-tracking" element={<RequestTracking />} />
          <Route path="communication" element={<SubCommunication />} />
          <Route path="employee-workload" element={<EmployeeWorkload />} />
          <Route path="request-from-admin" element={<RequestFromAdmin />} />
          <Route path="teams" element={<TeamsManagement />} />
        </Route>

        {/* EMPLOYEE ROUTES */}
        <Route path="employee" element={<EmployeeDashboard />}>
          <Route index element={<EmployeeHome />} />
          <Route path="communication" element={<Communication />} />
          <Route path="completed" element={<CompletedRequests />} />
          <Route path="pending" element={<PendingRequests />} />
          <Route path="inbox" element={<RequestInbox />} />
        </Route>

        {/* USER DASHBOARD ROUTES */}
        <Route path="userDashboard" element={<UserDashboard />}>
          <Route index element={<UserHome />} />
          <Route path="Form" element={<UserForm />} />
          <Route path="Panding" element={<UserPending />} />
          <Route path="History" element={<UserHistory />} />
          <Route path="Communication" element={<UserCommunication />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
