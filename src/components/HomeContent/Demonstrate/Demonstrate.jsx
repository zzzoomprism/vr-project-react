import React from "react";
import videoSrc from "./../../../media/Video/5.mp4";
import style from "./Demonstrate.module.css";
import Headline from "../Headline/Headline";

class Demonstrate extends React.Component{
    render() {
        return (
            <div className={style.videoPlay}>
                <video src={videoSrc} width="100%" autoPlay="autoplay" loop={"loop"}>
                </video>
                <Headline/>
            </div>
        );
    }
}

export default Demonstrate;