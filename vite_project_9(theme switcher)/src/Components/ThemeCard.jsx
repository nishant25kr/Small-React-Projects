import React, { useContext } from "react";
import ThemeContext from "../Contexts/ThemeContext";

function ThemeCard() {
    const { thememode, setThememode } = useContext(ThemeContext);

    return (
        <div className="">
            <div className={thememode === "dark" ? "bg-black text-white" : ""} >
                <p>This is ThemeCard</p>
                <p>Now theme is <strong>{thememode}</strong></p>

                <div>
                    <label htmlFor="dark">
                        <input
                            type="radio"
                            name="theme"
                            value="dark"
                            id="dark"
                            checked={thememode === "dark"}
                            onChange={(e) => setThememode(e.target.value)}
                        />
                        Dark
                    </label>

                    <label htmlFor="light" style={{ marginLeft: "10px" }}>
                        <input
                            type="radio"
                            name="theme"
                            value="light"
                            id="light"
                            checked={thememode === "light"}
                            onChange={(e) => setThememode(e.target.value)}
                        />
                        Light
                    </label>
                </div>
            </div>
        </div>
    );
}

export default ThemeCard;
