import React from "react";
import { Link } from "react-router-dom";
import { FaRegNewspaper } from "react-icons/fa6";
import { FaAddressCard, FaCode } from "react-icons/fa";
import { motion } from "framer-motion";

const pages = [
    {id: 1, title: "Resume", icon: FaRegNewspaper},
    {id: 2, title: "Socials", icon: FaAddressCard},
    {id: 3, title: "Projects", icon: FaCode},
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
    <motion.div className="home-icon"  
                    transition={{ duration: 0.2 }}
                    initial = "default"
                    whileHover="hover"
                    variants={iconVariant}>
        <motion.span className="nav-tooltip" 
                            variants={tooltipVariant}>
            Page Menu
        </motion.span>
    </motion.div>
);

const tooltipVariant = {
    default: { x: -56, scale: 0 },
    hover: { x: 0, scale: 1 },
};

const iconVariant = {
    default: {borderRadius: "24px"},
    hover: {borderRadius: "10px"},
};

const NavIcon = ({ Icon, text }) => (
    <Link to={"/" + text.toLowerCase()}>
        <motion.button className="nav-icon" 
                        transition={{ duration: 0.2 }}
                        initial = "default"
                        whileHover="hover"
                        variants={iconVariant}>
            {Icon}
            <motion.span className="nav-tooltip"
                            variants={tooltipVariant}>
                {text}
            </motion.span>
        </motion.button>
    </Link>
);

export default NavBar;