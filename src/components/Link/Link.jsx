import React from 'react';
import AFRAME from "aframe";
import Assets from "aframe-react-assets";
import {Entity, Box, Cylinder, Sphere, Plane, Sky, Text, Scene, Curvedimage, Camera, Cursor, Image, Ring, Event,Circle} from "react-aframe-ar";
import {Light, Video, Videosphere} from "react-aframe-ar/src";

class Link extends React.Component{
    render() {
        return(
            <Plane position={"-1.7 1.7 -2"} rotation={"0 30 0"} width={1} height={0.3} color={"#fff"} transparent={true} opacity={0.6} events={{'click': this.props.click}}>
                <Plane width={1} height={0.3} transparent={true} opacity={0.0} emissive={"#00fffb"} wireframe={"true"}
                       segments-height={0} segments-width={0}
                       animation__wire={"property: segments-height; to: 20; dur: 1500; dir: alternate; easing: linear; loop: true;"}
                       animation__wire2={"property: segments-width; to: 20; dur: 1500; dir: alternate; easing: linear; loop: true;"}
                       animation__opacity={"property: opacity; to: 0.5; dur: 1500; dir: alternate; easing: linear; loop: true;"} events={{'click': this.props.click}}>
                        <Text value={"MENU"} color={"white"} width={1} height={0.3} side={"double"} rotation={"0 -180 0"}
                              align={"center"} wrap-count={10} position={"0 -0.03 0.02"} opacity={"0.6"}
                            letter-spacing={4} font={"dejavu"}
                        animation={"property: position; to: 0 0.03 0; loop: true; dur: 2000; dir: alternate; easing: linear;"}
                              events={{'click': this.props.click}}/>
                </Plane>
            </Plane>
        )
    }
}

export default Link;