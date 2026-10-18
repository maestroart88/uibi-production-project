import { Suspense, useContext, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { classNames } from "./helpers/classNames/classNames";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import './styles/index.scss'
import { Theme, ThemeContext } from "./theme/ThemeContext";
import { useTheme } from "./theme/useTheme";



const App = () => {

    const {theme, toggleTheme} =  useTheme()

    return(
        <div className={classNames('app',{top: true, bott:false}, [theme,'as'])}>

            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О нас</Link>

            <button onClick={toggleTheme}>Toggle</button>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPageAsync />} /> 
                    <Route path={'/about'} element={<AboutPageAsync />} /> 
                </Routes>
            </Suspense>


        </div>
    );
};

export default App;