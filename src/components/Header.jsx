import React from "react";

const Header = (props) => {
  //   const handleClick = () => {
  //     setDarkMode(!darkMode);
  //   };
  return (
    <div className="Header">
      <h1>React Hooks</h1>
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
