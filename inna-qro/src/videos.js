import React from "react";
import workout from "./workout.mp4";

export default function Videos (){
    return (
        <div className="videos" id="videos">
            <h2>Videos</h2>
            <video src={workout} alt="video" className="w-50" autoplay muted loop/>
        </div>
    )
}