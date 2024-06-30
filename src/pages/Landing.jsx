import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cyberpunk from "../assets/images/cyberpunk.png";
import {motion} from "framer-motion";

const Landing = () => {
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoading) {
            const timer = setTimeout(() => {
                setIsLoading(false);
                navigate('/davidmartinez');
            }, 5000);

            return () => clearTimeout(timer); // Cleanup the timer on component unmount
        }
    }, [isLoading, navigate]);

    return (
        isLoading && (
            <motion.article
                className="min-h-screen w-full flex items-center justify-center overflow-hidden bg-black"

                initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", duration: .3, ease: "linear" }}
            >

                <div className="h-10">
                    <figure className="h-10">
                        <img
                            src={Cyberpunk}
                            alt="logo cyberpunk"
                            className="object-cover w-full h-full animate-pulse"
                        />
                    </figure>
                </div>
            </motion.article>
        )
    );
};

export default Landing;
