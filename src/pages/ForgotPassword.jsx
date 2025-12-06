
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

import { toast, Toaster } from "react-hot-toast";

function useQuery() {

  
  return new URLSearchParams(useLocation().search);
}

export default function ForgotPassword() {
  const query = useQuery();
  const prefillEmail = query.get("email") || "";
  const [email, setEmail] = useState(prefillEmail);
  const { resetPassword } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    
    setEmail(prefillEmail);
  }, [prefillEmail]);

  const handleReset = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email.");
      return;
    }

    try {
      
      if (typeof resetPassword === "function") {
        await resetPassword(email);
        toast.success("Password reset email sent. Opening Gmail...");
      } else {
       
        toast("Reset action not available in current setup — opening Gmail.");
      }
    } catch (err) {
  
      toast.error(err?.message || "Failed to send reset email — opening Gmail anyway.");
    }

   
    try {
      window.open("https://mail.google.com", "_blank", "noopener,noreferrer");
    } catch {
   
      window.location.href = "https://mail.google.com";
    }

    
    setTimeout(() => navigate("/login"), 1000);
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-md">
      <Toaster position="top-center" />
      <h1 className="text-2xl font-bold mb-4">Reset Password</h1>
      <p className="text-gray-600 mb-6">
        Enter the email associated with your account. We'll send a reset link.
      </p>



      <form onSubmit={handleReset} className="flex flex-col gap-3">
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-2 border rounded"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Reset Password
        </button>
      </form>

      <p className="text-sm text-gray-500 mt-4">
        After clicking reset, please check your inbox (Gmail will open).
      </p>
    </div>
  );
}
