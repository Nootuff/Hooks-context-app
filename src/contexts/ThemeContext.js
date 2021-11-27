import React, { createContext } from "react";
import useToggle from "../hooks/useToggleState"

export const ThemeContext = createContext(); //This const is exported. 

function ThemeProvider(props) {
    const [isDarkMode, toggleDarkMode] = useToggle(false); //These are the two values being imported from useToggleState, state and a function to change it. The value of isDarkMode is initially set to false 

    return (
        <ThemeContext.Provider value={{ isDarkModeValue: isDarkMode, toggleThemeFunc: toggleDarkMode }}>{/*All components that fall inside this.props.children will have access to the value. You can only have 1 value in here though but it is a value and you can put multiple items in it. */}
            {props.children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;