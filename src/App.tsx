import { createContext, Dispatch, FC, SetStateAction, useState } from "react";
import "./App.css";
import ThemeContextDemo from "./components/ThemeContextDemo";
import RefnEffectDemo from "./components/RefnEffectDemo";
import StateDemo from "./components/StateDemo";

//inspired from fireship
type Theme = "dark" | "theme";
const theme: Theme = "dark";

export const ThemeContext = createContext<
  [string, Dispatch<SetStateAction<string>>] | null
>(null);

const App: FC = () => {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <div className="App">
        <p className="purpose">
          This repository will have various react hooks and redux experimented
          on it
        </p>
        <StateDemo />
        <div className={"context " + theme}>
          <p>Below is the &lt;ThemeContextDemo/&gt; component:</p>
          <ThemeContextDemo />
        </div>
        <RefnEffectDemo />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
