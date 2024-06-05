import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error: any = useRouteError();
  return (
    <div className="flex justify-center min-h-screen items-center flex-col">
      <h1 className="text-3xl font-bold mb-2 text-blue-600">Oops!</h1>
      <p className="font-medium text-slate-500 my-5">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="font-medium text-slate-500">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
