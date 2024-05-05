import React from "react";
import { Link } from "react-router-dom";
import { FaRegNewspaper } from "react-icons/fa6";
import { FaAddressCard, FaCode } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { motion } from "framer-motion";

// List used to populate the drop down menu
const pages = [
    {id: 1, title: "Resume", icon: FaRegNewspaper},
    {id: 2, title: "Socials", icon: FaAddressCard},
    {id: 3, title: "Projects", icon: FaCode},
]

// Animation variant for tooltips
const tooltipVariant = {
    default: { x: -56, scale: 0 },
    hover: { x: 0, scale: 1 },
};

// Animation variant for icons
const iconVariant = {
    default: {borderRadius: "24px"},
    hover: {borderRadius: "10px"},
};

// Entire NavBar object
const NavBar = () => {
    // get a state variable called rotate which is false by default
    const [rotate, setRotate] = React.useState(false);
    // Create the JSX obejct
    return (
        <div className="fixed top-0 left-0 h-screen w-16
                        flex flex-col text-white">
            {/* Our menu icon */}
            <motion.div
                animate={{ rotate: rotate ? 360 : 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setRotate(!rotate)}>
                <MenuIcon Icon={<IoIosMenu size="25" />}/>
            </motion.div>
            {/* Uses the pages array to create all 3 buttons */}
            {pages.map((page, id) => (
                <motion.div 
                key = {id}
                animate={{ scale: rotate ? 1 : 0 }}
                transition={{ duration: 0.2, delay: id * 0.1}}
                initial={{scale: 0}}>
                    <NavIcon Icon={<page.icon size="25" />} text={page.title} />
                </motion.div>
            ))}
        </div>
    );
};

// Creates our menu icon with the correct hover animations
const MenuIcon = ({ Icon }) => (
    <motion.div className="nav-icon"  
                    transition={{ duration: 0.2 }}
                    initial = "default"
                    whileHover="hover"
                    variants={iconVariant}>
        {Icon}
        <motion.span className="nav-tooltip" 
                            variants={tooltipVariant}>
            Menu
        </motion.span>
    </motion.div>
);

// Creates our navigation buttons, ensures they link to the correct route and have the correct animations
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