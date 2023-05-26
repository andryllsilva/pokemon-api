import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { SwitchTheme, Ball } from "./styled";
import { ThemeContext, themes } from "../../theme-context/theme-context";
import { useContext } from "react";

export const CheckTheme = () => {
    const { setTheme } = useContext(ThemeContext);
    const [isChecked, setChecked] = useState(
        localStorage.getItem("isChecked") === "true"
    );

    useEffect(() => {
        localStorage.setItem("isChecked", isChecked.toString());
    }, [isChecked]);

    function handleClick() {
        setChecked(!isChecked);
        setTheme(isChecked ? themes.light : themes.dark);
    }

    return (
        <div>
            <SwitchTheme onClick={handleClick}>
                <FaSun />
                <FaMoon />
                <Ball active={isChecked} />
            </SwitchTheme>
        </div>
    );
};







