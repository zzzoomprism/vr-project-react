import React from "react";
import AFRAME from "aframe";
import {Entity, Box, Cylinder, Sphere, Plane, Sky, Text, Scene, Curvedimage, Camera, Cursor, Image, Ring, Event,Circle} from "react-aframe-ar";
import "./CurvePlane";

class AboutUs extends React.Component{
    render() {
        return(
            <Plane width={2} height={3.2} position={"0 2 -2.5"} rotation={"0 180 0"}
                   material={"transparent: true; opacity: 0.4; color: #000; side: double;"}
            text={"value: Hello world!; side: double; z-offset: -0.01; align: center; font: dejavu; shader: msdf;"}>

            </Plane>
            )}

}

export default AboutUs;