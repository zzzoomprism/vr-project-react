import React from "react";
import videoSrc from "./../../../media/Video/5.mp4";
import style from "./Demonstrate.module.css";

class Demonstrate extends React.Component{
    render() {
        return (
            <div className={style.videoPlay}>
                <video src={videoSrc} width="100%" autoPlay="autoplay" loop={"loop"}>
                </video>
            </div>
        );
    }
}

export default Demonstrate;