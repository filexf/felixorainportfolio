"use client"

import { createContext, useContext, useEffect, useState } from "react"

interface ThemeContextType {
  darkMode: boolean
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useTheme = () => {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error("useTheme must be inside ThemeProvider")
  return ctx
}

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") setDarkMode(true)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle("dark", darkMode)
    root.classList.toggle("light", !darkMode)
    root.style.colorScheme = darkMode ? "dark" : "light"
    localStorage.setItem("theme", darkMode ? "dark" : "light")
  }, [darkMode])

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme: () => setDarkMode((d) => !d) }}>
      {children}
    </ThemeContext.Provider>
  )
}
