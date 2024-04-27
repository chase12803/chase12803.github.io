import React from "react";
import {Link} from "react-router-dom";
import { FaRegNewspaper } from "react-icons/fa6";
import { FaAddressCard } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";



const NavBar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-16
                        flex flex-col 
                        bg-blue-400 text-white">
            <PixelIcon />
            <NavIcon Icon={<FaRegNewspaper size="25" />} text="Resume" />
            <NavIcon Icon={<FaAddressCard size="25" />} text="Socials" />
            <NavIcon Icon={<BsPersonWorkspace size="25" />} text="Projects" />
        </div>
    );
};

const PixelIcon = () => (
    <div className="home-icon group">
        <span className="nav-tooltip group-hover:scale-100">
            Home
        </span>
    </div>
);

const NavIcon = ({ Icon, text }) => (
    <Link to={"/"+text.toLowerCase()}>
        <button className="nav-icon group">
            {Icon}
            <span className="nav-tooltip group-hover:scale-100">
                {text}
            </span>
        </button>
    </Link>
);



export default NavBar;