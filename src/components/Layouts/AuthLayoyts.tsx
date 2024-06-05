import { Link } from "react-router-dom";

const AuthLayout = (props: any) => {
  const { children, title, text, type } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600"> {title}</h1>
        <p className="font-medium text-slate-500 mb-8">{text}</p>
        {children}
        <Navigation type={type}></Navigation>
      </div>
    </div>
  );
};

const Navigation = ({ type }: { type: string }) => {
  let navigationContent;
  if (type === "login") {
    navigationContent = (
      <p className="text-slate-500 text-sm mt-5 text-center">
        Don't have an account?{" "}
        <Link to="/register" className="text-blue-600 font-bold">
          Sign up
        </Link>
      </p>
    );
  } else if (type === "register") {
    navigationContent = (
      <p className="text-slate-500 text-sm mt-5 text-center">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-600 font-bold">
          Sign in
        </Link>
      </p>
    );
  } else {
    // Default navigation content if type is neither "login" nor "register"
    navigationContent = (
      <p className="text-slate-500 text-sm mt-5 text-center">Welcome!</p>
    );
  }

  return navigationContent;
};

export default AuthLayout;
