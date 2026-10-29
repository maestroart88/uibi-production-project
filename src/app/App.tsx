import { classNames } from "shared/lib/classNames/classNames";
import './styles/index.scss'
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { SideBar } from "widgets/SideBar";
import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";


const App = () => {
    const {theme} =  useTheme()

    return(
        <div className={classNames('app',{top: true, bott:false}, [theme,'as'])}>
            <Suspense fallback=''>
                <Navbar/>
                <div className="content-page">
                    <SideBar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    );
};

export default App;