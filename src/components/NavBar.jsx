import React from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FaCode } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
import { FiHome } from "react-icons/fi";
import { motion } from "framer-motion";
import { IoShareSocial } from "react-icons/io5";


// List used to populate the drop down menu
const pages = [
  { id: 1, title: "Home", icon: FiHome },
  { id: 2, title: "Resume", icon: CgProfile },
  { id: 3, title: "Projects", icon: FaCode },
  { id: 4, title: "Socials", icon: IoShareSocial },
];

// Animation variant to tooltips when the parent is hovered
const tooltipVariant = {
  default: { x: -56, scale: 0 },
  hover: { x: 0, scale: 1 },
};

// Animation variant for icon shapes when hovered
const iconVariant = {
  default: { borderRadius: "24px" },
  hover: { borderRadius: "10px" },
};

// Returns the entire NavBar component
// When the menu is clicked, only renders the pages whose id is not equal to the current prop.
export const NavBar = ({ current }) => {
  // get a state variable called rotate which is false by default
  const [rotate, setRotate] = React.useState(false);
  // Create the JSX obejct
  return (
    <div
      className="fixed left-0 top-0 flex h-screen w-16 flex-col"
    >
      {/* Menu icon */}
      <motion.div
        animate={{ rotate: rotate ? 360 : 0 }}
        transition={{ duration: 0.2 }}
        onClick={() => setRotate(!rotate)}
      >
        <MenuIcon Icon={<IoIosMenu size="25" />} />
      </motion.div>

      {/* Uses the pages array to create all 3 buttons 
                Only displays icons if they do not match the current prop id*/}
      {pages.map((page, id) => {
        if (page.id != current)
          return (
            <motion.div
              key={id} // React will get mad if elements in a list don't have a unique key
              animate={{ scale: rotate ? 1 : 0 }}
              transition={{ duration: 0.2, delay: id * 0.1 }}
              initial={{ scale: 0 }}
            >
              <NavIcon Icon={<page.icon size="25" />} text={page.title} />
            </motion.div>
          );
      })}
    </div>
  );
};

// Default icon rendering with no tooltip
export const DefaultIcon = ({ Icon }) => (
  <motion.div
    className="nav-icon"
    transition={{ duration: 0.2 }}
    initial="default"
    whileHover="hover"
    variants={iconVariant}
  >
    {Icon}
  </motion.div>
);

// Creates our menu icon with the correct hover animations
export const MenuIcon = ({ Icon }) => (
  <motion.div
    className="nav-icon"
    transition={{ duration: 0.2 }}
    initial="default"
    whileHover="hover"
    variants={iconVariant}
  >
    {Icon}
    {/* Tooltip */}
    <motion.span className="nav-tooltip" variants={tooltipVariant}>
      Menu
    </motion.span>
  </motion.div>
);

// Creates our navigation buttons, ensures they link to the correct route and have the correct animations
const NavIcon = ({ Icon, text }) => (
  <Link to={"/" + text.toLowerCase()}>
    <motion.button
      className="nav-icon"
      transition={{ duration: 0.2 }}
      initial="default"
      whileHover="hover"
      variants={iconVariant}
    >
      {Icon}
      {/* Tooltip */}
      <motion.span className="nav-tooltip" variants={tooltipVariant}>
        {text}
      </motion.span>
    </motion.button>
  </Link>
);

export default NavBar;
