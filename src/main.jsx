import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "@routes/app/App";
import { BrowserRouter } from "react-router-dom";
import { MenuProvider } from "@context/MenuContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MenuProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MenuProvider>
  </React.StrictMode>,
);
