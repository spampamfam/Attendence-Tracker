import React from "react";
import { BrowserRouter } from "react-router-dom";

// import Landing from "./components/landing/Landing.jsx";

import Login from "./components/login/Login";

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
