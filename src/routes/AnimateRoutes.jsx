import {Routes, Route, useLocation} from 'react-router-dom';

// Import pages
import {AnimatePresence} from "framer-motion";
import MainLayout from "../components/layout/MainLayout";
import David from "../pages/David";
import Lucy from "../pages/Lucy";
import Sasha from "../pages/Sasha";
import Main from "../pages/Main";
import PageNotFound from "../pages/PageNotFound";
import {useEffect} from "react";
import Landing from "../pages/Landing";

export const AnimateRoutes = () => {

    const location = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, [location.pathname]);

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route element={<MainLayout />}>
                    <Route path="/davidmartinez" element={<David />} exact="true"></Route>
                    <Route path="/lucy" element={<Lucy />} exact="true"></Route>
                    <Route path="/sasha" element={<Sasha />} exact="true"></Route>
                    <Route path="/main" element={<Main />} exact="true"></Route>
                </Route>

                <Route path="/" element={<Landing />} exact="true"></Route>
                <Route path="/*" element={<PageNotFound />} exact="true" />
            </Routes>
        </AnimatePresence>
    )
}