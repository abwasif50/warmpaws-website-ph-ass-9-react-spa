
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";




export default function PrivateRoute({ children }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  


  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <div className="loader mb-2" />

          <p className="text-gray-600">Checking authentication...</p>
        </div>
      </div>
    );
  }

  
  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  
  return children;
}








