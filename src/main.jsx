import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "@routes/app/App";
import { BrowserRouter } from "react-router-dom";
import { MenuProvider } from "@context/MenuContext";
import { AuthProvider } from "@context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <MenuProvider>
          <App />
        </MenuProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
