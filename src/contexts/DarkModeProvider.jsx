/*eslint-disable react/prop-types */

import { createContext, useContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const DarkModeContext = createContext();

export default function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useLocalStorageState(false, "darkMode");

  useEffect(
    function () {
      if (darkMode) document.documentElement.className = "dark-mode";
      if (!darkMode) document.documentElement.className = "light-mode";
    },
    [darkMode]
  );

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  const context = useContext(DarkModeContext);

  return context;
}
