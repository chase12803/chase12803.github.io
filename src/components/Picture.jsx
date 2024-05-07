import React from "react";
import image from "../assets/me.jpg";

// Just a picture of me
const Picture = (path) => (
    // Here the width really determines the size of the image, image will scale to fit the parent div
    <div className="h-auto w-96 max-w-[60%]">
        <img className = "rounded-[4rem] object-fill shadow-xl" src={image} alt="Me at the beach"/>
    </div>
);

export default Picture;