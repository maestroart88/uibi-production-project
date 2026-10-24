import { classNames } from "shared/lib/classNames/classNames";
import './styles/index.scss'
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { SideBar } from "widgets/SideBar";

const App = () => {

    const {theme} =  useTheme()

    return(
        <div className={classNames('app',{top: true, bott:false}, [theme,'as'])}>
            <Navbar/>
            <div className="content-page">
                <SideBar/>
                <AppRouter/>
            </div>
        </div>
    );
};

export default App;