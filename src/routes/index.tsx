import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import Home from "../pages/Home"
import DLC from "../pages/Dlc"
import { AnimatePresence, motion } from "framer-motion"

const AnimatedRoutes = () => {

    const location = useLocation()

    return (
        <AnimatePresence mode="wait" initial={false}>
            <Routes location={location} key={location.pathname}>
                <Route path='/'
                    element={
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, transition: { duration: 0.5 } }}
                        >
                            <Home />
                        </motion.span>
                    }
                />
                <Route path="/throes-of-the-watchmaker-dlc"
                    element={
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <DLC />
                        </motion.span>
                    }
                />
            </Routes>
        </AnimatePresence>
    )
}

const AppRoutes = () => {



    return (
        <BrowserRouter>
            <AnimatedRoutes />
        </BrowserRouter>
    )
}

export default AppRoutes