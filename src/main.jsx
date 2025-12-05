// src/main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Ensure this path matches where you put AuthContext.jsx
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./provider/AuthProvider.jsx";
// import { AuthProvider } from "./context/AuthContext.jsx";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
);
