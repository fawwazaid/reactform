import Button from "../Elements/Button/Button";
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  fullname: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = Yup.object().shape({
  fullname: Yup.string().required("Fullname required"),
  email: Yup.string().email("Invalid email").required("Email required"),
  password: Yup.string()
    .required("Password required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number"
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password required"),
});

const FormRegister = () => {
  const handleSubmit = async (
    values: {
      fullname: string;
      email: string;
      password: string;
      confirmPassword: string;
    },
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    const body = {
      name: values.fullname,
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
        "https://library-crud-sample.vercel.app/api/user/register",
        options
      );

      if (!response.ok) {
        throw new Error("Bad Network Response");
      }

      const data = await response.json();
      console.log(data.token);

      localStorage.setItem("token", data.token);
      setTimeout(() => {
        alert("Register Success");
        window.location.href = "/login";
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
          <label htmlFor="fullname" className="mb-2 font-semibold">
            Fullname:
          </label>
          <Field
            type="text"
            id="fullname"
            name="fullname"
            placeholder="insert your name here"
            className="px-4 py-2 border rounded-md"
          />
          <ErrorMessage
            name="fullname"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2 font-semibold">
            Email:
          </label>
          <Field
            type="email"
            id="email"
            name="email"
            placeholder="example@mail.com"
            className="px-4 py-2 border rounded-md"
          />
          <ErrorMessage
            name="email"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="mb-2 font-semibold">
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
            className="text-red-500 text-sm mt-1"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="confirmPassword" className="mb-2 font-semibold">
            Confirm Password:
          </label>
          <Field
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="********"
            className="px-4 py-2 border rounded-md"
          />
          <ErrorMessage
            name="confirmPassword"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>
        <Button
          type="submit"
          className="bg-blue-600 w-full text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
        >
          Register
        </Button>
      </Form>
    </Formik>
  );
};

export default FormRegister;
