import AuthLayout from "../components/Layouts/AuthLayoyts";
import FormLogin from "../components/Fragments/FormLogin";

const LoginPage = () => {
  return (
    <AuthLayout title="Login" text="Sign in to your account" type="login">
      <FormLogin></FormLogin>
    </AuthLayout>
  );
};

export default LoginPage;
