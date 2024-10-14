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
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, transition: { duration: 0.5 } }}
                            className="inline"
                        >
                            <Home />
                        </motion.div>
                    }
                />
                <Route path="/throes-of-the-watchmaker-dlc"
                    element={
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="inline"
                        >
                            <DLC />
                        </motion.div>
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