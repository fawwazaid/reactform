import Button from "../Elements/Button/Button";
import React from "react";

import InputForm from "../Elements/Input/InputForm";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Fullname"
        type="text"
        placeholder="Insert name.."
        name="fullname"
      ></InputForm>
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
      <InputForm
        label="Confirm Password"
        type="password"
        placeholder="********"
        name="confirmpassword"
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

export default FormRegister;
