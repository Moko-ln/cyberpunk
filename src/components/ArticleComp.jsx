"use client";

import PageNotFound from "../pages/PageNotFound";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { Container } from './Container';
import { LoadingPage } from './LoadingPage';
import { useFetchCharacterByName } from '../hooks/useFetchCharacterByName';

const ArticleComp = () => {
    const { slug } = useParams();
    const { data, error, isLoading } = useFetchCharacterByName(slug);

    console.log(data);

    if (error) return <PageNotFound />;
    if (isLoading) return <LoadingPage />;
    
    return (
        <>
            {data && 
                <article className="bg-black overflow-hidden w-screen h-screen">
                    <Container className="flex h-full">
                        <div className="xl:w-custom-width-column lg:w-1/3 lg:absolute top-0 right-36 flex xl:flex-row flex-col items-stretch xl:gap-0 gap-10 xl:justify-between h-full z-10 xl:pt-10 pt-20">
                            
                            <div className="xl:w-custom-width-column w-full flex flex-col gap-4 order-last">
                                {/* Content */}
                                <motion.h1
                                    className="text-yellow-300 text-xl font-semibold"
                                    initial={{ opacity: 0, x: 15, rotate: 5 }}
                                    animate={{ opacity: 1, x: 0, rotate: 0 }}
                                    transition={{ type: "spring", stiffness: 100, damping: 15, ease: "easeInOut", delay: 0.7 }}
                                >
                                    {data.name}
                                </motion.h1>
                                <div className="lg:h-24 h-20">
                                    <motion.p
                                        className="text-slate-200 text-sm mb-4"
                                        initial={{ opacity: 0, x: -15, rotate: 5 }}
                                        animate={{ opacity: 1, x: 0, rotate: 0 }}
                                        transition={{ type: "spring", stiffness: 100, damping: 15, ease: "easeInOut", delay: 0.7 }}
                                    >
                                        {data.description}
                                    </motion.p>
                                </div>
                                
                                <motion.button
                                    className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-700 text-sm font-semibold h-10 rounded-sm max-w-36 flex gap-2 items-center justify-center"
                                    type="button"
                                    onClick={() => window.open("https://www.netflix.com/fr/title/81054853", "_blank")}
                                    initial={{ opacity: 0, scale: 1.2, rotate: 5 }}
                                    animate={{ opacity: 1, scale: 1, rotate: 0 }}

                                    whileTap={{ scale: 0.945 }}
                                    whileHover={{ scale: 1.045 }}

                                    transition={{ type: "spring", stiffness: 70, damping: 15, ease: "easeInOut", delay: 0.7 }}
                                >
                                    Netflix <FiArrowRight />
                                </motion.button>

                                {/* Trailer video */}
                                <motion.div
                                    className="w-full xxl:h-[460px] xl:h-auto order-first mb-4 relative"
                                    initial={{ opacity: 0, y: 75 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ type: "spring", duration: 0.3, ease: "easeInOut" }}
                                >
                                    <video
                                        controls
                                        className="xxl:h-[460px] xl:h-auto w-full object-fit overflow-clip"
                                        src="/uploads/cyberpunk.mp4"
                                        poster="/uploads/cyberpunk-edgerunners.webp"
                                    />
                                </motion.div>
                            </div>
                        </div>
                    
                        {/* Background image */}
                        <motion.div 
                        className="fixed left-0 top-0 h-full w-full"
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05, transition: { duration: 0.3, delay: 0.2, ease: "easeInOut" } }}
                        transition={{ type: "spring", damping: 50, stiffness: 100, ease: "linear" }}    
                    >
                        <motion.figure className="h-full w-full">
                            <img
                                src={`/uploads/${data.image}.webp`}
                                alt=""
                                className="h-full w-full object-cover brightness-75"
                            />
                        </motion.figure>
                        </motion.div>
                </Container>
                </article>
            }
        </>
    );
};

export default ArticleComp;
