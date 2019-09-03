import React from "react"
import "aframe";
import {Entity, Box, Cylinder, Sphere, Plane, Sky, Text, Scene, Curvedimage, Camera, Cursor, Image, Ring, Event} from "react-aframe-ar";
import {Video, Videosphere} from "react-aframe-ar/src";

class Menu extends React.Component{
    render() {
        return(
            <Plane width={2} height={3} position="2 2 -1" opacity={0.5} side="double"  rotation="0 120 0">
                <Text value="Menu" color="#fff" width="3" side="double"/>
            </Plane>
        )
    }
}

export default Menu;