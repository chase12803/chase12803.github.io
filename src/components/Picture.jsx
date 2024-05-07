import React from "react";
import image from "../assets/me.jpg";

// Just a picture of me
const Picture = (path) => (
    // Here the width really determines the size of the image, image will scale to fit the parent div
    <div className="relative h-auto w-96">
        <img className = " rounded-[4rem] object-fill" src={image} alt="Me at the beach"/>
    </div>
);

export default Picture;