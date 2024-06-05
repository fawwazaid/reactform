import React from "react";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/RegisterPage";
import "./App.css";

function App() {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <LoginPage></LoginPage>
      <RegisterPage></RegisterPage>
    </div>
  );
}

export default App;
