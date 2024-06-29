
import {NavLink} from "react-router-dom";
import {motion} from "framer-motion";

const Header = () => {
    return (
        <header className="flex xl:items-end z-30 absolute xl:bottom-20 top-4 justify-center">
                <div className="w-full flex items-start">
                    <nav className="">
                        <ul className="flex xl:flex-col items-start justify-center gap-10 lg:flex-row">
                            { menus.map((item, index) => (
                                <motion.li
                                    key={index}
                                    className="xl:text-sm text-xs font-medium"

                                    whileTap={{ scale:.945 }}
                                    whileHover={{ scale: 1.1, x:8 }}
                                >
                                    <NavLink
                                        to={`/${item.link}`}
                                        title={item.title}
                                        className={({ isActive }) =>
                                            isActive ? "text-yellow-300" :  "text-slate-100"
                                        }
                                    >
                                        {item.title}
                                    </NavLink>
                                </motion.li>
                            ))}
                        </ul>
                    </nav>
                </div>
        </header>
    );
};

export default Header;

const menus = [
    {
        id:1,
        title:"David Martinez",
        link:"davidmartinez"
    },
    {
        id:2,
        title:"Lucy",
        link:"lucy"
    },
    {
        id:3,
        title:"Sasha",
        link:"sasha"
    },
    {
        id:4,
        title:"Main",
        link:"main"
    }
]
