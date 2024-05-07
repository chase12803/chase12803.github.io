import React from "react";

// Just a picture of me
const TextPanel = ({title, text}) => (
    // Here the width really determines the size of the image, image will scale to fit the parent div
    <div className="font-jersey relative h-auto w-auto p-3 rounded-2xl shadow-xl max-w-[60%]
    bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="text-3xl text-white justify-start">
            {title}
        </div>
        <div className="text-xl text-white text-wrap">
            {text}
        </div>
    </div>
);

export default TextPanel;