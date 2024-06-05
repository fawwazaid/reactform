const Button = (props: any) => {
  const {
    children,
    classname = "bg-black",
    onClick = () => {},
    type = "button",
  } = props;
  return (
    <button
      className={`ml-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-10 px-5 ${classname}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
