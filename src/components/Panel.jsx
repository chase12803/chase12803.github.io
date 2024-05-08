import React from "react";
import { Link } from "react-router-dom";

// Displays the given input title and text in a panel with width no more than 60% of the screen
export const TextPanel = ({title, text}) => (
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
export const TextPanelLink = ({title, text, path}) => (
    <div className="panel-default">
        <div className="panel-title underline">
            <Link to={"/"+path}>{title}</Link>
        </div>
        <div className="panel-body">
            {text}
        </div>
    </div>
);

// // Displays a smaller text panel with some short intro text, and a read more button that expands the div and displays all the text
// export const TextPanelExpand = ({title, intro, text}) => (
//     <div className="panel-default">
//         <div className="panel-title">
//             {title}
//         </div>
//         <div className="panel-body">
//             {text}
//         </div>
//     </div>
// );