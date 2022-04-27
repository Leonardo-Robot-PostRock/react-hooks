import  { useState } from "react";

const useInitialState = () => {
  const [darkMode, setDarkMode] = useState(false);

  let bg = darkMode ? "bg-dark text-light" : "bg-light text-dark";

  return {
    darkMode,
    setDarkMode,
    bg
  };
};

export default useInitialState;
