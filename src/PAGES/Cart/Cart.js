import React, { useState } from "react";
import Navbar from "../../COMPONENTS/Navbar/Navbar";
import "./Cart.css";
import "./CartContainer.css";
import { useRecoilState } from "recoil";
const Cart = () => {
  const [cartdata, setcartdata] = React.useState([]);
  const [active, setactive] = React.useState(1);

  const getcartitemsfromlocalstorage = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      console.log(cart);
      setcartdata(cart);
    } else {
      console.log("Cart is empty");
      setreloadnavbar(!reloadnavbar);
    }
  };

  React.useEffect(() => {
    getcartitemsfromlocalstorage();
  }, []);

  const checklogin = () => {
    return true;
  };

  const [reloadnavbar, setreloadnavbar] = React.useState(false);
  const removeitemfromcart = (index) => {
    let temp = [...cartdata];
    temp.splice(index, 1);
    setcartdata(temp);
    localStorage.setItem("cart", JSON.stringify(temp));
    getcartitemsfromlocalstorage();
  };

  return (
    <div>
      <Navbar reloadnavbar={reloadnavbar} />

      <div className="cart">
        <div className="progress">
          <div
            className="c1"
            onClick={() => {
              cartdata.length > 0 && checklogin() && setactive(1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            <span>My Cart</span>
          </div>
        </div>

        {active == 1 && (
          <div className="cartcont">
            {/* <p>Cart cont</p> */}
            {cartdata.length > 0 ? (
              <table className="carttable">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cartdata.map((item, index) => {
                    return (
                      <tr key={index} className="cartitemrow">
                        <td data-label="Product">
                          <div className="cartproduct">
                            <img
                              src={item.productdata.ProductImage[0].image}
                              alt={item.productdata.ProductName}
                            />
                            <p>{item.productdata.ProductName}</p>
                          </div>
                        </td>

                        <td data-label="Quantity">
                          <div className="quantity">
                            <button
                              className="minus"
                              onClick={() => {
                                let newcartdata = [...cartdata];

                                if (newcartdata[index].quantity > 1) {
                                  newcartdata[index].quantity -= 1;
                                  setcartdata(newcartdata);
                                  localStorage.setItem(
                                    "cart",
                                    JSON.stringify(newcartdata)
                                  );
                                  getcartitemsfromlocalstorage();
                                }
                              }}
                            >
                              -
                            </button>
                            <span>{item.quantity}</span>
                            <button
                              className="plus"
                              onClick={() => {
                                let newcartdata = [...cartdata];
                                newcartdata[index].quantity += 1;
                                setcartdata(newcartdata);
                                localStorage.setItem(
                                  "cart",
                                  JSON.stringify(newcartdata)
                                );
                                getcartitemsfromlocalstorage();
                              }}
                            >
                              +
                            </button>
                          </div>
                        </td>

                        <td data-label="Price">
                          <p>
                            Rs.{" "}
                            {item.productdata.SalesPrice
                              ? item.productdata.SalesPrice.toFixed(2)
                              : 0.0}
                          </p>
                        </td>

                        <td>
                          <p>
                            Rs.{" "}
                            {(
                              item.productdata.SalesPrice * item.quantity
                            ).toFixed(2)}
                          </p>
                        </td>

                        <td data-label="Remove">
                          <div
                            className="delbtn"
                            onClick={() => {
                              removeitemfromcart(index);
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : (
              <div className="emptycart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>

                <p>Your cart is empty</p>
              </div>
            )}
          </div>
        )}

        {/* CART BUTTONS */}
        {active == 1 && cartdata.length > 0 && (
          <div className="btns">
            <button
              className="nextbtn"
              onClick={() => {
                checklogin() && setactive(2);
              }}
            >
              Place Order
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
