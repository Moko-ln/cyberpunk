import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { menus } from "../utils/data";

export const Navbar = () => {
    return (
        <nav>
            <ul className="flex lg:flex-col items-start justify-center gap-10 flex-row">
                {menus.map((item, index) => (
                    <motion.li
                        key={index}
                        className="xl:text-sm text-xs font-medium relative"
                        whileTap={{ scale: 0.945 }}
                        whileHover={{ scale: 1.1, rotate: 3 }}
                    >
                        <NavLink
                            to={`/${item.link}`}
                            title={item.title}
                            className={({ isActive }) =>
                                isActive ? "text-yellow-300 transition-all duration-75 ease-in-out flex items-center gap-2" :  "text-slate-100"
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    {item.title}
                                    {isActive && (
                                        <motion.span
                                            
                                            className="lg:relative absolute lg:bottom-0 -bottom-4 left-1/2 lg:left-0 lg:translate-x-0 -translate-x-1/2 block w-2 h-2 rounded-full bg-yellow-400"
                                            initial={{ opacity: 0, scale: 1.2, rotate: 5 }}
                                            animate={{ opacity: 1, scale: 1, rotate: 0 }}  
                                            exit={{ opacity: 0, scale: 1.2, rotate: 5 }}
                                            transition={{ type: "spring", duration: 0.3, ease: "easeInOut" }}
                                        />
                                    )}
                                </>
                            )}
                        </NavLink>
                    </motion.li>
                ))}
            </ul>
        </nav>
    );
};