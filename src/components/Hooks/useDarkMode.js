import {useState} from "react";
import useLocalStorage from "./useLocalStorag";

const useDarkMode = (initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', initialValue);
    return [darkMode, setDarkMode]
}

export default useDarkMode;