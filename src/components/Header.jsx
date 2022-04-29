import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import "../styles/Header.css";

const Header = (props) => {
  const color = useContext(ThemeContext);

  //   const handleClick = () => {
  //     setDarkMode(!darkMode);
  //   };
  return (
    <div className="Header">
      <h1>Rick and Morty</h1>
      <h2 style={{ color }}>React Hooks</h2>
      {/* <button type="button" onClick={handleClick}>
        {darkMode ? "Dark Mode" : "Light Mode"}
      </button> */}
      <button
        className="button-bg"
        type="button"
        onClick={() => props.onClick()}
      >
        {props.darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default Header;
