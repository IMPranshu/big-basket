import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./PAGES/HomePage/Home";
import "./App.css";
import Login from "./PAGES/Auth/Login";
import Cart from "./PAGES/Cart/Cart";
import UserProfile from "./PAGES/User/UserProfile";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/user/:activepage" element={<UserProfile />} />

        <Route
          path="*"
          element={
            <div>
              <h1>404 NOT FOUND</h1>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
