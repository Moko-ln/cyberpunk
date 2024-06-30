import React, {useEffect, useState} from 'react'
import Cyberpunk from "../assets/images/cyberpunk.png"
import PageNotFound from "../pages/PageNotFound";

import { characters } from '../utils/data';
import {motion} from "framer-motion";
import {useLocation} from "react-router-dom";
import {FiArrowRight} from "react-icons/fi";
import LoadingPage from "./LoadingPage";


const ArticleComp = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const location = useLocation();

    const urlPathname = location.pathname.substring(1);

    useEffect(() => {
        setIsLoading(true);

        try{
            const character = characters.find( ( charact ) => charact.slug === urlPathname );
            setData(character);

            setIsLoading(false);
        } catch(error){
            setError(error.message);
            setIsLoading(false);
        }




    }, [urlPathname]);

    if (error) return <PageNotFound />

    if (isLoading) return <LoadingPage />

    return (
        <article className="w-full flex items-start justify-center h-[84vh]">
            <div className="w-full flex xl:flex-row flex-col items-stretch xl:gap-0 gap-10 xl:justify-between h-full relative z-10 xl:pt-10 pt-20">
                <motion.div
                    className="xl:w-custom-width-column w-full flex flex-col gap-4 order-last"
                    initial={{ opacity:0, x:25 }}
                    animate={{ opacity:1, x:0 }}
                    exit={{ opacity:0, x:25 }}

                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                >
                    <motion.h1
                        className="text-yellow-300 text-xl font-semibold"
                        initial={{ opacity:0, translateY:5 }}
                        animate={{ opacity:1, translateY:0 }}


                        transition={{ type: "spring", duration: .2, ease: "ease-in" }}
                    >
                        {data.name}
                    </motion.h1>
                    <motion.p
                        className="text-slate-200 text-sm mb-4"
                        initial={{ opacity:0, translateY:25 }}
                        animate={{ opacity:1, translateY:0 }}

                        transition={{ type: "spring", duration: .3, ease: "ease-in" }}
                    >
                        {data.description}
                    </motion.p>

                    <motion.button
                        className="bg-yellow-300 text-slate-700 text-sm font-semibold h-10 rounded-sm max-w-36 flex gap-2 items-center justify-center"
                        type="button"
                        onClick={() => window.open("https://www.netflix.com/fr/title/81054853", "blank")}

                        initial={{ opacity:0, translateY:45 }}
                        animate={{ opacity:1, translateY:0 }}

                        whileTap={{scale: .945 }}
                        whileHover={{ scale: 1.045}}

                        transition={{ type: "spring", duration: .1, ease: "ease-in" }}

                    >Netflix <span className="text-slate-700"><FiArrowRight/></span></motion.button>

                    {/*Video opening cyberpunk*/}
                    <motion.div
                        className={`w-full xxl:h-[460px] xl:h-auto order-first mb-4 relative`}
                        initial={{ opacity:0, translateY:75 }}
                        animate={{ opacity:1, translateY:0 }}

                        transition={{ type: "spring", duration: .5, ease: "ease-in" }}
                    >
                        <video
                            controls
                            className="xxl:h-[460px] xl:h-auto w-full object-fit overflow-clip"
                            src="/uploads/cyberpunk.mp4"
                            poster={`/uploads/cyberpunk-edgerunners.webp`}
                        >
                            {/*<source*/}
                            {/*    src="/uploads/cyberpunkedgerunners.webm"*/}
                            {/*    type="video/webm"*/}
                            {/*/>*/}
                            {/*<source*/}
                            {/*    src="/uploads/cyberpunk.mp4"*/}
                            {/*    type="video/webm"*/}
                            {/*/>*/}
                            {/*<source*/}
                            {/*    src="/uploads/cyberpunk.ogg"*/}
                            {/*    type="video/ogg"*/}
                            {/*/>*/}

                        </video>
                    </motion.div>
                </motion.div>

                {/* Logo Cyberpunk Edgerunners */}
                <div className="xl:w-custom-width-column w-full">
                <div className="">
                        <figure className="">
                            <img
                                src={Cyberpunk}
                                alt="logo cyberpunk"
                                className="object-cover w-full h-full"
                            />
                        </figure>
                    </div>
                </div>

            </div>

            {/* Character image */}
            <div className="fixed h-full w-full bg-black">
                <motion.figure
                    className="h-full w-full"
                    initial={{opacity: 0, scale: 1.05}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{type: "spring", duration: .3, ease: "linear" }}
                >
                    <img
                        src={`/uploads/${data.image}.webp`}
                        alt=""
                        className="h-full w-full object-cover brightness-75"
                    />
                </motion.figure>
            </div>
        </article>
    )
}

export default ArticleComp