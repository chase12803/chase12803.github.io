import React from "react";
import image from "../assets/me.jpg";

// Just a picture of me
const Picture = (path) => (
    <div className="relative
                    m-auto scale-[0.1]
                    bg-blue-500">
        <img className = "rounded-full" src={image} alt="Me at the beach"/>
    </div>
);

export default Picture;