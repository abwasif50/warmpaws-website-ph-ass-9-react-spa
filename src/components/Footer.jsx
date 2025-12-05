
import React from "react";
import { FaFacebook, FaFileContract, FaInstagram, FaLock, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800  py-6 mt-12">
      <div className="max-w-7xl mx-auto p-10 px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-white">© 2025 WarmPaws. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="text-white flex items-center gap-1 hover:text-blue-500">
           <FaLock/> Privacy Policy
          </a>
          <a href="#" className="text-white flex items-center gap-1 hover:text-blue-500">
           <FaPhone/> Contact
          </a>
          <a href="#" className="text-white flex items-center gap-1 hover:text-blue-500">
            <FaInstagram></FaInstagram>Instagram
          </a>
          <a href="#" className="text-white flex items-center gap-1 hover:text-blue-500">
           <FaFacebook></FaFacebook> Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}



