import {Outlet} from "react-router-dom";
import Header from "../partials/Header";
import {useEffect, useState} from "react";

function MainLayout () {

    const [items] = useState([1, 2, 3, 4]);
    const [visibleItems, setVisibleItems] = useState(items.length);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 850) {
                setVisibleItems(2);
            } else if (window.innerWidth < 1440) {
                setVisibleItems(3);
            } else {
                setVisibleItems(items.length);
            }
        };

        window.addEventListener('resize', handleResize);

        // Initial check
        handleResize();

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, [items.length]);

    return (
        <div className="px-[6vw] bg-black">
            <div className="flex justify-between fixed h-full w-custom-width z-10">
                {items.slice(0, visibleItems).map((line) => (
                    <span key={line} className="block border border-yellow-100/15 h-full"></span>
                ))}
            </div>

            <Header/>
            <main className="w-full">
                <Outlet/>
            </main>
        </div>
    )

}

export default MainLayout;