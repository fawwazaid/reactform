import React from "react";
import Button from "../Elements/Button/Button";
const CardProducts = (props: any) => {
  const { children } = props;
  return (
    <div className="flex flex-col justify-between w-full max-w-xs bg-gray-800 border border-gray-700 rounded-lg shadow mx-2 my-2">
      {children}
    </div>
  );
};

const Header = (props: any) => {
  const { image } = props;
  return (
    <a href="https://example.com">
      <img src={image} alt="" />
    </a>
  );
};

const Body = (props: any) => {
  const { children, name } = props;
  return (
    <div className="pb-5 px-5 pt-5 h-full">
      <a href="https://example.com">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {name}
        </h5>
        <p className="text-m text-white">{children}</p>
      </a>
    </div>
  );
};
const Footer = (props: any) => {
  const { price, handleAddToCart, id } = props;
  return (
    <div className="flex item-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">
        Rp{" "}
        {price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
      </span>
      <Button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => handleAddToCart(id)}
      >
        Add to cart
      </Button>
    </div>
  );
};

CardProducts.Header = Header;
CardProducts.Body = Body;
CardProducts.Footer = Footer;

export default CardProducts;
