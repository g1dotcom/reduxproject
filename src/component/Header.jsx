import React, { useState } from "react";
import { useEffect } from "react";

const Header = () => {
  const [active, setActive] = useState("");
  const [color, setColor] = useState(false);

  const navToggle = () => {
    active === "" ? setActive("checkbox") : setActive("");
  };

  useEffect(() => {
    const card = document.getElementById("card");
    const header = document.getElementById("header");
    const root = document.getElementById("root");
    if (color) {
      root.style.backgroundColor = "#e5e7eb";
      root.style.color = "black";
      header.style.backgroundColor = "white";
      card.style.color = "black";
    } else {
      card.style.color = "white";
      root.style.backgroundColor = "#5b21b6";
      root.style.color = "black";
      header.style.backgroundColor = "#6d28d9";
    }
  }, [color]);

  return (
    <div id="header" className="text-4xl bg-violet-800 h-24 ">
      <div className="form-control w-full flex flex-row justify-between ">
        <div className="ml-10 mt-5" id="card">
          VALORANT APİ AND THEME
        </div>
        <div
          className="flex flex-col justify-center items-center mr-10 mt-5"
          onClick={() => setColor(!color)}
        >
          <h1 id="card" className="text-xl font-bold  text-white font-mono">
            Change Theme
          </h1>
          <input
            onClick={navToggle}
            type={active}
            className="toggle toggle-lg"
            checked
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
