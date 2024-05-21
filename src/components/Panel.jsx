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

const expandVariant = {
    closed: { scale: 0, size: 0 },
    open: { scale: 1, size: 'auto' },
};

const buttonVariant = {
    closed: { content: 'Read more' },
    open: { content: 'Close' },
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
                    <motion.button className="text-white shadow-xl rounded-lg px-2 py-1 m-1 ml-auto bg-gradient-to-r from-blue-800 to-indigo-900"
                        onClick={() => setOpenClose(!openClose)}>
                        Read More
                    </motion.button>
                </div>
                <motion.span
                initial={{scale: 0}}
                    animate={{ scale: openClose ? 1 : 0, height: openClose ? "auto" : 0 }}
                    transition={{ duration: 0.2 }}>{text}</motion.span>
            </div>
        </motion.div>
    )
};

// // Displays a smaller text panel with some short intro text, and a read more button that expands the div and displays all the text
// export const TextPanelExpand = ({ title, intro, text }) => (
//     <div className="panel-default">
//         <div className="panel-title">
//             {title}
//         </div>
//         <div className="panel-body">
//             <details class="open:ring-1 open:ring-black/5 open:shadow-lg p-6 rounded-lg">
//                 <summary class="leading-6 font-semibold select-none">
//                     {intro}
//                 </summary>
//                 <div class="mt-3 leading-6">
//                     {text}
//                 </div>
//             </details>
//         </div>
//     </div>
// );