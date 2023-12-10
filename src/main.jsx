import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "./index.scss";
import NavbarComponent from "./components/NavbarComponent/NavbarComponent.jsx";
import ContactInformationComponent from "./components/NavbarComponent/ContactInformationComponent.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<>Loading...</>}>
        <ContactInformationComponent />
        <NavbarComponent />
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
