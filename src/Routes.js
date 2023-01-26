import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";


export default function MyRoutes() {
    return (
        <BrowserRouter>

            <NavBar />
            <div className="back">
                <div className='main-page'>
                    <Routes>
                        <Route path={"/"} element={<HomePage />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>

    );

};