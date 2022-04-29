import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
const Header = (props) => {
  const color = useContext(ThemeContext);

  //   const handleClick = () => {
  //     setDarkMode(!darkMode);
  //   };
  return (
    <div className="Header">
      <h1 style={{color}}>React Hooks</h1>
      {/* <button type="button" onClick={handleClick}>
        {darkMode ? "Dark Mode" : "Light Mode"}
      </button> */}
      <button type="button" onClick={() => props.onClick()}>
        {props.darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default Header;
