import React from 'react'
import '../../stylesheets/DarkMode.css'

export default function Toggle() {

    let clickedClass = "clicked"
    const body = document.body
    const lightTheme = "light"
    const darkTheme = "dark"
    let theme

    if (localStorage) {
        theme = localStorage.getItem("theme")
    }

    if (theme === lightTheme || theme === darkTheme) {
        body.classList.add(theme)
    } else {
        body.classList.add(lightTheme)
    }

    const switchTheme = (e) => {
        if (theme === darkTheme) {
            body.classList.replace(darkTheme, lightTheme)
            e.target.classList.remove(clickedClass)
            localStorage.setItem("theme", "light")
            theme = lightTheme
        } else {
            body.classList.replace(lightTheme, darkTheme)
            e.target.classList.add(clickedClass)
            localStorage.setItem("theme", "dark")
            theme = darkTheme
        }
    }

    return (
        <button
            className={theme === "dark" ? clickedClass : ""}
            id="darkMode"
            onClick={(e) => switchTheme(e)}
            aria-labelledby="toggle-icon toggle-desc"
        >
            {/* <title id="toggle-icon" lang="en">Light dark toggle</title>
            <desc id="toggle-desc"></desc> */}
        </button>
    )
}