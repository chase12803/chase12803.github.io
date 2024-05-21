import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Displays the given input title and text in a panel with width no more than 60% of the screen
export const TextPanel = ({ title, text }) => (
    <div className="panel-default">
        <div className="panel-title">
            {title}
        </div>
        <div className="panel-body">
            {text}
        </div>
    </div>
);

// Displays the given text with the same formatting as a normal TextPanel but the title links to path
export const TextPanelLink = ({ title, text, path }) => (
    <div className="panel-default">
        <div className="panel-title underline">
            <Link to={"/" + path}>{title}</Link>
        </div>
        <div className="panel-body">
            {text}
        </div>
    </div>
);

const buttonVariant = {
    initial: { borderRadius: "24px" },
    hover: { borderRadius: "10px" }
};

// Displays a smaller text panel with some short intro text, and a read more button that expands the div and displays all the text
export const TextPanelExpand = ({ title, intro, text }) => {
    const [openClose, setOpenClose] = React.useState(false);
    return (
        <motion.div className="panel-default">
            <div className="panel-title">
                {title}
            </div>
            <div className="panel-body">
                <div className="flex flex-row items-center">
                    <span className="mr-3">{intro}</span>
                    <motion.div className="panel-button"
                        onClick={() => setOpenClose(!openClose)}
                        whileHover="hover"
                        initial="initial"
                        variants={buttonVariant}
                        transition={{ duration: 0.2 }}>
                        <motion.button
                            initial={{ scale: 1, width: "auto", height: "auto" }}
                            animate={{ scale: openClose ? 0 : 1, width: openClose ? 0 : "auto", height: openClose ? 0 : "auto" }}
                            transition={{ duration: 0 }}>
                            Read More
                        </motion.button>
                        <motion.button
                            initial={{ scale: 0, width: 0, height: 0 }}
                            animate={{ scale: openClose ? 1 : 0, width: openClose ? "auto" : 0, height: openClose ? "auto" : 0 }}
                            transition={{ duration: 0 }}>
                            Show Less
                        </motion.button>
                    </motion.div>
                </div>
                <motion.span
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: openClose ? 1 : 0, height: openClose ? "auto" : 0 }}
                    transition={{ duration: 0.1 }}>
                    {text}
                </motion.span>
            </div>
        </motion.div>
    )
};