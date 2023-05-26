import { createContext, useState, useEffect} from "react";
import backgroundDark from "../../assets/backgroundDark.jpg"
import backgroundDay from "../../assets/background.jpg"

export const ThemeContext = createContext({});

export const themes = {
  light: {
    background: "#970d0d",
    backgroundSection: "#ffffff",
    backgroundImage: backgroundDay,
    boxShadow: "0px 0.1px 6px rgb(114, 114, 114)",
  },
  dark: {
    background: "black",
    backgroundSection: "#303030",
    backgroundImage: backgroundDark,
    boxShadow: "0px 0.1px 6px rgb(0, 0, 0)",
  },
};

export const ThemeProvider = (props) => {
  const savedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(savedTheme ? JSON.parse(savedTheme) : themes.light);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
