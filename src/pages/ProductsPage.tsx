import React, { useEffect } from "react";
import CardProducts from "../components/Fragments/CardProducts";
import { Fragment } from "react";
import Button from "../components/Elements/Button/Button";

const products = [
  {
    id: 1,
    name: "Kiilia",
    price: 999,
    image: "images/killia.jpg",
    description: `Hi I'm Kill`,
  },
  {
    id: 2,
    name: "Chill",
    price: 999,
    image: "images/chili-oil.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur perspiciatis eligendi maiores, voluptatum doloremque rem vel perferendis quia consectetur nihil dolorum architecto ullam cupiditate deserunt amet accusantium repellat et possimus?`,
  },
  {
    id: 3,
    name: "Minion",
    price: 999,
    image:
      "images/Papers.co-ap00-minions-cute-film-anime-art-illust-android-medium.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur perspiciatis eligendi maiores, voluptatum doloremque rem vel perferendis quia consectetur nihil dolorum architecto ullam cupiditate deserunt amet accusantium repellat et possimus?`,
  },
];

const email = localStorage.getItem("email");

const ProductsPage = () => {
  const [cart, setCart] = React.useState<{ id: number; qty: number }[]>([]);

  const [totalPrice, setTotalPrice] = React.useState(0);
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart") || "[]"));
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product: any = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/";
  };
  const handleAddToCart = (id: any) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };
  return (
    <Fragment>
      <div className="flex justify-end text-white h-20 px-10 items-center bg-gray-800">
        {email}
        <Button className="" onClick={handleLogout}>
          Logout
        </Button>
      </div>

      <div className="flex justify-center min-h-screen py-5">
        <div className="w-4/6 flex-wrap flex">
          {products.map((product) => (
            <CardProducts key={product.id}>
              <CardProducts.Header image={product.image}></CardProducts.Header>
              <CardProducts.Body name={product.name}>
                {product.description}
              </CardProducts.Body>
              <CardProducts.Footer
                price={product.price}
                id={product.id}
                handleAddToCart={handleAddToCart}
              ></CardProducts.Footer>
            </CardProducts>
          ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold ml-5 mb-2">Cart</h1>
          <table className="table-auto text-left border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product: any = products.find(
                  (product) => product.id === Number(item.id)
                );
                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>
                      {product.price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      Rp{" "}
                      {(product.price * item.qty).toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </td>
                  </tr>
                );
              })}
              <tr>
                <b>
                  <td>Total Price</td>
                  <td>
                    Rp{" "}
                    {totalPrice.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </td>
                </b>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductsPage;
