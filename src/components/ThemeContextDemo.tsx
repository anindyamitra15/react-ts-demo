import { Dispatch, FC, SetStateAction, useContext } from "react";
import { ThemeContext } from "../App";

const ThemeContextDemo: FC = () => {
  const [theme, setTheme] = useContext(ThemeContext) as [string, Dispatch<SetStateAction<string>>];
  return (
    <>
      <p>
        Value is coming from ThemeContextDemo component through context:{" "}
        {theme}
      </p>
      <button
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
      >
        SetTheme
      </button>
    </>
  );
};

export default ThemeContextDemo;
