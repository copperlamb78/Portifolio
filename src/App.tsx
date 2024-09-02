import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import { DarkMode } from "./styles/themes/Dark";
import { LightMode } from "./styles/themes/Light"
import { Header } from "./components/Header";
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './Pages/Home/index.tsx'
import { Resume } from './Pages/Resume/index.tsx'
import ErrorPage from './Pages/ErrorPage/index.tsx'
import { Hability } from "./Pages/Hability/index.tsx";
import { Project } from "./Pages/Project/index.tsx";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: '/resume',
    element: <Resume />
  },
  {
    path: '/project',
    element: <Project />
  },
  {
    path: '/hability',
    element: <Hability />
  }
])


export function App() {

  const [themeMode, setThemeMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? JSON.parse(savedTheme) : DarkMode;
  })

  function toggleTheme() {
    const newTheme = themeMode.title === 'DarkMode' ? LightMode : DarkMode
    setThemeMode(newTheme)
    localStorage.setItem('theme', JSON.stringify(newTheme))
  }

  return (
  <ThemeProvider theme={themeMode}>
    <div>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} themeMode={themeMode}/>
    </div>
    <RouterProvider router={router}/>
  </ThemeProvider>
  )
}

