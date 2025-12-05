import React from "react";
import { Link, NavLink } from "react-router-dom";


import { useAuth } from "../hooks/useAuth";

import logoimg from "../assets/images (3).jpeg"
export default function Navbar() {


  const { user, logout } = useAuth();

  return (
    <header className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center">
        


        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <span className="mr-2"><img className="rounded-full w-[45px] animate-pulse" src={logoimg} alt="" /></span>
            <span className="font-semibold text-2xl">WarmPaws</span>
          </Link>
        </div>

        


        <nav className="hidden md:flex gap-2">
          <NavLink
            to="/"
            className={({ isActive }) => `btn btn-ghost ${isActive ? "btn-active" : ""}`}
          >


            Home
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) => `btn btn-ghost ${isActive ? "btn-active" : ""}`}
          >
            Services
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) => `btn btn-ghost ${isActive ? "btn-active" : ""}`}
          >
            My Profile
          </NavLink>
        </nav>

        



        <div className="flex items-center gap-2">
          {user ? (
            <>
              
              
              <div className="ml-4">
                <img
                  src={user.photoURL || "/default-avatar.png"}
                  alt={user.displayName || "User"}
                  title={user.displayName || "User"}
                  className="w-8 h-8 rounded-full cursor-pointer"
                />
              </div>
              


              <button
                onClick={logout}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-outline btn-sm">
                Login
              </Link>
              <Link to="/signup" className="btn btn-primary btn-sm">
                Register
              </Link>
            </>
          )}

          


          <div className="md:hidden">
            <label htmlFor="nav-drawer" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
          </div>
        </div>
      </div>

      





      <input type="checkbox" id="nav-drawer" className="drawer-toggle hidden" />
      <div className="drawer-side">
        <label htmlFor="nav-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-64 bg-base-100">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/profile">My Profile</Link>
          </li>
          {user ? (
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li className="bg-teal-800">
                <Link to="/signup">Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
}