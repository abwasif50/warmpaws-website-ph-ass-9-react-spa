import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

import { toast } from "react-hot-toast";

import { FaEye, FaEyeDropper, FaEyeSlash, FaGoogle, FaRegEye } from "react-icons/fa";

export default function Login() {
  const { loginWithEmail, signInWithGoogle } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginWithEmail(email, password);
      toast.success("Login successful!");
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      toast.success("Google login successful!");
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err.message);
console.log(err);
console.log(err.code);

    


    }
  };













  return (
    <div className="container mx-auto px-4 py-8 max-w-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
      <form onSubmit={handleLogin} className="flex flex-col gap-3">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-2 border rounded"
        />
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
          <button
            type="button"
            className="absolute right-2 top-2 text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
           
            {showPassword ? <FaEye></FaEye> : <FaEyeSlash/>}
          </button>
        </div>
        <Link
          to={`/forgot-password?email=${email}`}
          className="text-sm text-blue-500 hover:underline"
        >
          Forgot Password?
        </Link>
        <button
          type="submit"
          className="bg-fuchsia-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Login
        </button>
      </form>

      <div className="mt-4 text-center">
        <p>Or login with:</p>
        <button
          onClick={handleGoogleLogin}
          className="bg-green-800 text-white py-2 px-4 rounded hover:bg-red-600 mt-2 "
        >
        <p className="flex items-center gap-1"> <FaGoogle/> Google</p>
        </button>
      </div>

      <p className="mt-4 text-center">
        Don't have an account?{" "}
        <Link to="/signup" className="text-red-500 hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}













