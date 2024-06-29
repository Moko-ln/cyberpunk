import React, { useEffect, useState } from 'react';
import Loading from '../assets/videos/loading.webm';
import Loading1 from '../assets/videos/loading.mp4';
import Loading2 from '../assets/videos/loading.ogg';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoading) {
            const timer = setTimeout(() => {
                setIsLoading(false);
                navigate('/davidmartinez');
            }, 15000);

            return () => clearTimeout(timer); // Cleanup the timer on component unmount
        }
    }, [isLoading, navigate]);

    return (
        isLoading && (
            <article className="min-h-screen w-full flex items-center justify-center overflow-hidden">
                <video
                    controls={false}
                    muted
                    preload="auto"
                    autoPlay
                    className="absolute w-full h-full overflow-clip object-cover"
                >
                    <source src={Loading}/>
                    <source src={Loading1}/>
                    <source src={Loading2}/>
                </video>
            </article>
        )
    );
};

export default Landing;
