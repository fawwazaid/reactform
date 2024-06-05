import Button from "../Elements/Button/Button";
import React from "react";

import InputForm from "../Elements/Input/InputForm";

const FormLogin = () => {
  const handleLogin = (event: any) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    console.log(event.target.email.value, event.target.password.value);
    window.location.href = "/products";
  };
  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Email"
        type="email"
        placeholder="email@example.com"
        name="email"
      ></InputForm>
      <InputForm
        label="Password"
        type="password"
        placeholder="********"
        name="password"
      ></InputForm>
      <Button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
