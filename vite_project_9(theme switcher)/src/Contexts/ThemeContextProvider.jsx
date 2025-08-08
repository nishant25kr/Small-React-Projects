import React, { useState } from "react";
import ThemeContext from "./ThemeContext.js";

const ThemeContextProvider = ({ children }) => {
    const [thememode, setThememode] = useState()
    return (
        <ThemeContext.Provider value={{thememode, setThememode}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;