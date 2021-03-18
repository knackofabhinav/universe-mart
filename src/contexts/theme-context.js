import {createContext, useState, useEffect, useContext } from "react";
const themes = {
    dark: {
        backgroundColor: 'black',
        color: 'white'
    },
    light: {
        backgroundColor: 'white',
        color: 'black'
    }
}

const initialState = {
    dark: false,
    theme: themes.light,
    toggle: () => {}
}


const ThemeContext = createContext(initialState);




export const ThemeProvider = ({children}) => {
    const [dark, setDark] = useState(false)
    const theme = dark ? themes.dark : themes.light
    useEffect(() => {
        const isDark = localStorage.getItem('dark') === "true"
        setDark(isDark)
    }, [dark])
    const toggle = () => {
        const isDark = !dark
        localStorage.setItem('dark', JSON.stringify(isDark))
        setDark(isDark)
    }
    return(
        <ThemeContext.Provider value={{dark, toggle, theme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    return useContext(ThemeContext)
}