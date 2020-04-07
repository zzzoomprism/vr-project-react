import React from "react";
import {Camera} from "react-aframe-ar";


const Cursor = (props) => (
    <Camera position="1 6 0">
        <a-cursor color={(props.cursor_in_load) ? "red" : "white"} material={"opacity: 1;"}>
            { (props.cursor_in_load) && <a-ring radius-inner="0.03" radius-outer="0.06" rotation="0 180 0" material={"emissive: white; color: white; side: double;"} theta-length={"0"} theta-start={"90"}
            animation={"property: theta-length; to: 360; dur: 2500ms; easing: linear;"}/> }
        </a-cursor>
    </Camera>
);

export default Cursor;