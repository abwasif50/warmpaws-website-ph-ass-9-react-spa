
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


import Home from "./pages/Home";
import OurServices from "./pages/OurServices"; 
import ServiceDetails from "./pages/ServiceDetails";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";


import PrivateRoute from "./components/PrivateRoute";

export default function App() {
  return (
    <Router>
      <Navbar />

      <main className="min-h-[70vh]">
        <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<OurServices />} />

         
          <Route
            path="/services/:id"
            element={
              <PrivateRoute>
                <ServiceDetails />
              </PrivateRoute>
            }
          />

         
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />

       
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

        
          <Route path="*" element={<div className="p-8 text-center">Page not found</div>} />
        </Routes>
      </main>

      <Footer />
      <Toaster position="top-center" />
    </Router>
  );
}



