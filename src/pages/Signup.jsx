
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

import { toast } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";

export default function Signup() {
  const { signupWithEmail, signInWithGoogle, updateUserProfile } = useAuth();
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();


  const validatePassword = (pwd) => {
    const hasUpper = /[A-Z]/.test(pwd);
    const hasLower = /[a-z]/.test(pwd);
    const minLen = pwd.length >= 6;
    return { ok: hasUpper && hasLower && minLen, details: { hasUpper, hasLower, minLen } };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { ok, details } = validatePassword(password);
    if (!ok) {
      let msg = "Password must:";
      if (!details.hasUpper) msg += " contain an uppercase letter,";
      if (!details.hasLower) msg += " contain a lowercase letter,";
      if (!details.minLen) msg += " be at least 6 characters long,";
      msg = msg.replace(/,$/, ".");
      toast.error(msg);
      return;
    }

    try {

      await signupWithEmail(email, password, name, photoURL);

  
      if (typeof updateUserProfile === "function") {
        try {
          await updateUserProfile({ displayName: name, photoURL });
        } catch (err) {
          console.warn("updateUserProfile ignored:", err?.message || err);
        }
      }

      toast.success("Registered successfully!");
      setName("");
      setPhotoURL("");
      setEmail("");
      setPassword("");
      navigate("/", { replace: true });
    } catch (err) {
      toast.error(err.message || "Signup failed");
    }
  };



  const handleGoogle = async () => {
    try {
      await signInWithGoogle();
      toast.success("Signed in with Google!");
      navigate("/", { replace: true });
    } catch (err) {

      console.log(err.code);
      toast.error(err.message || "Google sign-in failed");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="p-2 border rounded"
        />

        <input
          type="url"
          placeholder="Photo URL (optional)"
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
          className="p-2 border rounded"
        />

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
            onClick={() => setShowPassword((s) => !s)}
          >
            {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
          </button>
        </div>

        <ul className="text-sm text-gray-600 mb-2">


          
          <li>• At least 6 characters</li>
          <li>• Must include an uppercase letter</li>
          <li>• Must include a lowercase letter</li>
        </ul>

        <button
          type="submit"
          className="bg-green-600 text-white py-2 rounded hover:bg-green-700 transition-colors"
        >
          Register
        </button>
      </form>

      <div className="mt-4 text-center">
        <p>Or sign up with</p>
        <button
          onClick={handleGoogle}
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 mt-2"
        >
          <p className="flex items-center gap-2"><FaGoogle></FaGoogle>Google</p>
        </button>
      </div>

      <p className="mt-4 text-center">
        Already have an account?{" "}

        <Link to="/login" className="text-blue-500 hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
}




