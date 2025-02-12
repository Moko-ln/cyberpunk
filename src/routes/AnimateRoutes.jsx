import {Routes, Route, useLocation} from 'react-router-dom';
import {AnimatePresence} from "framer-motion";
import MainLayout from "../layout/MainLayout";  
import PageNotFound from "../pages/PageNotFound";
import Landing from "../pages/Landing";
import {useEffect} from "react";       
import ArticleComp from '../components/ArticleComp';

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
        <AnimatePresence mode="await">
            <Routes location={location} key={location.pathname}>
                <Route element={<MainLayout />}>
                    <Route path="/:slug" element={<ArticleComp />} exact="true"></Route>
                </Route>

                <Route path="/" element={<Landing />} exact="true"></Route>
                <Route path="/*" element={<PageNotFound />} exact="true" />
            </Routes>
        </AnimatePresence>
    )
}