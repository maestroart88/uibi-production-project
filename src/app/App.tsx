import { Link} from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import './styles/index.scss'
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";



const App = () => {

    const {theme, toggleTheme} =  useTheme()

    return(
        <div className={classNames('app',{top: true, bott:false}, [theme,'as'])}>
            <Navbar/>
            <AppRouter/>
            <button onClick={toggleTheme}>Toggle</button>

        </div>
    );
};

export default App;