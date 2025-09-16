import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Report from "./pages/Report";
import MyReports from "./pages/MyReports";
import AllReports from "./pages/AllReports";
import UserProfile from "./pages/UserProfile";
import UpdateReportStatus from "./pages/UpdateReportStatus";
import AdminDashboard from "./pages/AdminDashboard";



const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/report" element={<Report />} />
        <Route path="/my-reports" element={<MyReports />} />
        <Route path="/all-reports" element={<AllReports />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/admin/update-status" element={<UpdateReportStatus />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
