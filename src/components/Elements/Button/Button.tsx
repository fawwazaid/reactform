const Button = (props: any) => {
  const { children, classname = "bg-black" } = props;
  return (
    <button
      className={`h-10 px-5 font-semibold rounded-md ${classname} text-white`}
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;
