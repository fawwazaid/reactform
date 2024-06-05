import Button from "../Elements/Button/Button";
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email required"),
  password: Yup.string().required("Password required"),
  // .matches(
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
  //   "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number"
  // ),
});

function FormLogin() {
  const handleSubmit = async (
    values: { email: string; password: string },
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    const body = {
      email: values.email,
      password: values.password,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    try {
      const response = await fetch(
        "https://library-crud-sample.vercel.app/api/user/login",
        options
      );

      if (!response.ok) {
        throw new Error("Bad Network Response");
      }

      const data = await response.json();
      console.log(data.token);

      const token = data.token;
      localStorage.setItem("token", token);

      setTimeout(() => {
        alert("Login Success");
      }, 1000);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="space-y-6">
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="mb-1 text-sm font-semibold text-gray-700"
          >
            Email:
          </label>
          <Field
            type="email"
            id="email"
            name="email"
            placeholder="abimanyu945@gmail.com"
            className="px-4 py-2 border rounded-md"
          />
          <ErrorMessage
            name="email"
            component="div"
            className="text-red-500 text-xs mt-1"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="password"
            className="mb-1 text-sm font-semibold text-gray-700"
          >
            Password:
          </label>
          <Field
            type="password"
            id="password"
            name="password"
            placeholder="********"
            className="px-4 py-2 border rounded-md"
          />
          <ErrorMessage
            name="password"
            component="div"
            className="text-red-500 text-xs mt-1"
          />
        </div>
        <Button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Login
        </Button>
      </Form>
    </Formik>
  );
}
export default FormLogin;
