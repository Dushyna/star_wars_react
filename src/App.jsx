
import './App.css'
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import {navItems} from "./utils/constants.js";
import {useState} from "react";
import {Context} from "./utils/context.js";

function App() {
    const [page, setPage] = useState(navItems[0]);
    const changePage = (page) => {setPage(page);};

    return (
        <div className={"container-fluid"}>
            <Context value={{changePage,page}}>
            <Header  />
            <Main   />
            <Footer/>
            </Context>

        </div>
    )
}

export default App
