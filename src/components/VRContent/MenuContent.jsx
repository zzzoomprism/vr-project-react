import React from 'react';
import {Box, Cylinder, Sphere, Plane, Sky, Text, Curvedimage, Camera, Cursor, Image, Ring, Event,Circle} from "react-aframe-ar";
import {Entity, Scene} from "aframe-react";

class MenuContent extends React.Component{
    render() {
        return (
          <Plane width={10} height={7} rotation="0 0 0" position={"1 6 -6"} material={"color: black; side: double"}>
                <Text value={"caroline"} rotation={"0 0 90"} wrap-count={10} position={"-4.3 -1.5 0"} />
          </Plane>
        );
    }
}

export default MenuContent;