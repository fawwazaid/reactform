import AuthLayout from "../components/Layouts/AuthLayoyts";
import FormRegister from "../components/Fragments/FormRegister";

const RegisterPage = () => {
  return (
    <AuthLayout title="Register" text="Sign up to your account" type="register">
      <FormRegister></FormRegister>
    </AuthLayout>
  );
};

export default RegisterPage;
