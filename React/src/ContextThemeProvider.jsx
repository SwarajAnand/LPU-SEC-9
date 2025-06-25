import { createContext, useState } from "react";

export const themeContext = createContext(null);

const ContextThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [name, setName] = useState('TEST NAME');

  return (
    <themeContext.Provider value={{ theme, setTheme, name, setName }}>
      {children}
    </themeContext.Provider>
  );
};

export default ContextThemeProvider;
