const label = (props: any) => {
  const { htmlFor, children } = props;
  return (
    <label
      htmlFor={htmlFor}
      className="block mb-2 text-sm font-bold text-slate-700"
    >
      {children}
    </label>
  );
};

export default label;
