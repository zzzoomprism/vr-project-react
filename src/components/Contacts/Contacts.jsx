import React from 'react';
import AFRAME from "aframe";
import Assets from "aframe-react-assets";
import {Entity, Box, Cylinder, Sphere, Plane, Sky, Text, Scene, Curvedimage, Camera, Cursor, Image, Ring, Event,Circle} from "react-aframe-ar";
import {Light, Video, Videosphere} from "react-aframe-ar/src";
import manipulation from "./functions";
import info from "./../contacts_info";

class Contacts extends React.Component{
    manip = manipulation;
    state = {
        prevPosition: "",
        nextPosition: "",
    };

    render() {
        let angle = -200;
        let planeAngle = 0;
        const contact_info = info.map(info=>
            <Entity>
        <Curvedimage visible={this.props.visible} src={info.img}
                     height="4" radius="6" theta-length="28"
                     rotation={"0 0 0" } scale="0.8 0.8 0.8"
                     position={'-1 3.0 0'} material={"wireframe: true; transparent: true; opacity: 1.0;"}
                     animation__sm={"property: position; to: -1 3.1 0; loop: true; dir: alternate; dur: 2000; easing: linear;"}
                     animation__rotation={(this.props.visible) ? "property: rotation; to:" + "0 " + `${angle+=90}`+ " 0" + "; dur: 2000; easing: linear;" : "property: rotation; to: 0 0 0; dur: 2000;"}
                     >
        </Curvedimage>
                <Plane width={2.5} height={3.5} material={"transparent: true; opacity: 0.3; color: #000; side: double"} rotation={info.rotation}
                       position={info.position} visible={this.props.visible}
                      animation={(this.props.visible) ? "property: scale; to: 1 1 1; dur: 1000; delay: 2000;" : "property: scale; to: 0 0 0; dur: 1000;"}
                animation__opacity={(this.props.visible) ? "property: material.opacity; to: 0; dur: 1000; delay: 3000;" : "property: material.opacity; to: 0.5;"}>
                <Text value={info.title} width={2} height={3} rotation={"0 0 0"}  material={"side: double"} side={"double"}
                      align={"center"} z-Offset={-0.001} wrap-count={20} position={"0 1 0"}
                        animation__pos={(this.props.visible) ? "property: position; to: 0 0.9 0; dur: 2200; loop: true; dir: alternate; delay: 3000;" : " "}/>
                <Text value={info.description} width={2} height={3} material={"side: double"} side={"double"}
                      align={"center"} z-Offset={-0.001} rotation={"0 0 0"} wrap-count={30} position={"0 -0.5 0"}
                      animation__pos={(this.props.visible) ? "property: position; to: 0 -0.4 0; dur: 2000; loop: true; dir: alternate; delay: 3500;" : " "}/>
                </Plane>
            </Entity>
        );

        return(
            <Entity>
                {contact_info}
            </Entity>
        )
    }
}

export default Contacts;