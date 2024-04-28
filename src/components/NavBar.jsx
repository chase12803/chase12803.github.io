import React from "react";
import { Link } from "react-router-dom";
import { FaRegNewspaper } from "react-icons/fa6";
import { FaAddressCard } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";
import { motion } from "framer-motion";

const pages = [
    {id: 1, title: "Resume", icon: FaRegNewspaper},
    {id: 2, title: "Socials", icon: FaAddressCard},
    {id: 3, title: "Projects", icon: BsPersonWorkspace},
]

const NavBar = () => {
    const [rotate, setRotate] = React.useState(false);
    return (
        <div className="fixed top-0 left-0 h-screen w-16
                        flex flex-col text-white">
            <motion.div
                animate={{ rotate: rotate ? 360 : 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setRotate(!rotate)}>
                <PixelIcon />
            </motion.div>
            {pages.map((page, i) => (
                <motion.div 
                animate={{ scale: rotate ? 1 : 0 }}
                transition={{ duration: 0.2, delay: i * 0.1}}
                initial={{scale: 0}}>
                    <NavIcon Icon={<page.icon size="25" />} text={page.title} />
                </motion.div>
            ))}
        </div>
    );
};

const PixelIcon = () => (
    <div className="home-icon group">
        <span className="nav-tooltip group-hover:scale-100">
            Menu
        </span>
    </div>
);

const NavIcon = ({ Icon, text }) => (
    <Link to={"/" + text.toLowerCase()}>
        <button className="nav-icon group">
            {Icon}
            <span className="nav-tooltip group-hover:scale-100 ">
                {text}
            </span>
        </button>
    </Link>
);

export default NavBar;