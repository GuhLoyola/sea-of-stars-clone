import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import DLC from "../pages/Dlc"

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/throes-of-the-watchmaker-dlc" element={<DLC />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes