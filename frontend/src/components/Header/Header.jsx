import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your Favourite food here</h2>
        <p>
          Choose from a diverse menu crafted with finest ingredients and
          culinary expertise. Our mission is to deliver homely food to your
          doorsteps to elevate your dining experience.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
