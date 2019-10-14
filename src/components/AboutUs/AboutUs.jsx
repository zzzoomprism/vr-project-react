import React from "react";
import AFRAME from "aframe";
import {Entity, Box, Cylinder, Sphere, Plane, Sky, Text, Scene, Curvedimage, Camera, Cursor, Image, Ring, Event,Circle} from "react-aframe-ar";
import {Light} from "react-aframe-ar/src";
import descriptionLoader from "./description";
import visible from "./../functions";

class AboutUs extends React.Component{
    descr = descriptionLoader;
    v = visible;
    constructor(props){
        super(props);
    }

    render() {
        let positionX=0;
        let positionZ=-3;
        let rotation = 160;
        const plane = this.descr.map(info=>
            <Plane class={"about-us-plane"} key={info.id} width={2} height={3.2} position={info.position} rotation={info.rotation}
                   material={"transparent: true; opacity: 0.4; color: #00fffb; side: double; "} visible={false}>
                <Text value={info.title} side={"double"} z-offset={-0.01} align={"center"} font={"dejavu"}
                      width={2} height={3.2} position={"0 1.3 0"} letter-spacing={"5"} wrap-count={"25"}
                />
                <Text value={info.description}
                      side={"double"} z-offset={-0.01} align={"center"} font={"dejavu"}
                      width={1.8} height={3.2}
                />
            </Plane>
        );

        return(
            <Entity>
            {plane}
            </Entity>
            )}

}

export default AboutUs;