import { Suspense} from "react";
import { Link, Route, Routes } from "react-router-dom";
import { classNames } from "helpers/classNames/classNames";
import './styles/index.scss'
import { useTheme } from "./providers/ThemeProvider";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";



const App = () => {

    const {theme, toggleTheme} =  useTheme()

    return(
        <div className={classNames('app',{top: true, bott:false}, [theme,'as'])}>

            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О нас</Link>

            <button onClick={toggleTheme}>Toggle</button>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPage/>} /> 
                    <Route path={'/about'} element={<AboutPage/>} /> 
                </Routes>
            </Suspense>


        </div>
    );
};

export default App;