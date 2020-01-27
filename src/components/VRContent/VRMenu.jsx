import React from 'react';
import {Box, Cylinder, Sphere, Plane, Sky, Text, Curvedimage, Camera, Cursor, Image, Ring, Event,Circle} from "react-aframe-ar";
import {Entity, Scene} from "aframe-react";
import MenuContent from "./../../container/VRContent/MenuContent";

const VRMenu = (props) => {
    return (
        <Sphere radius={100} material={"color: #111; side: double;" }>

            <MenuContent/>
            <Cylinder material={"color: white;"} position={"-10 2 2"} radius={4} />
            <Cylinder material={"color: black;"} position={"10 2 2"} radius={4} />
            <Cylinder material={"color: black;"} position={"-5 2 10"} radius={4} />
            <Cylinder material={"color: white;"} position={"5 2 10"} radius={4} />

        </Sphere>
    );
};

export default VRMenu;