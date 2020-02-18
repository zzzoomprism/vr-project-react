import React from "react";
import {Box, Cylinder, Sphere, Plane, Sky, Text, Curvedimage, Camera, Cursor, Image, Ring, Event,Circle} from "react-aframe-ar";
import {Entity} from "aframe-react";


const DesktopMenu = (props) =>{
    return <Entity>
        <Plane width={2.5} height={0.5} position={"1.2 7 -1.8"}
               material={"color: white; transparent: true; opacity: 0;"}
        animation__position={(props.animation_value >= 1) ? "property: position; to: -0.1 7 -1.8; dur: 3500;" : " "}>
            <Text value={"collection"} color={"white"} width={1.5} height={0.4} font={"dejavu"} wrap-count={20}
                  align={"right"} opacity={1} alphaTest={20} opacity={0}
                  animation={(props.animation_value >= 1) ? "property: opacity; from: 0; to: 0.6; dur: 3500;" : " "}/>
        </Plane>
        <Plane width={2.5} height={0.5} position={"1.2 6.2 -1.8"}
               material={"color: white; transparent: true; opacity: 0;"}
               animation__position={(props.animation_value >= 1) ? "property: position; to: -0.2 6.2 -1.8; dur: 3500; delay: 500;" : " "}>
            <Text value={"enter to the room"} color={"white"} width={1.5} height={0.4} font={"dejavu"} wrap-count={20}
                  align={"right"} opacity={1} alphaTest={20} opacity={0}
                  animation={(props.animation_value >= 1) ? "property: opacity; from: 0; to: 0.6; dur: 3500;  delay: 500;" : " "}/>
        </Plane>
        <Plane width={2.5} height={0.5} position={"1.2 5.4 -1.8"}
               material={"color: white; transparent: true; opacity: 0;"}
               animation__position={(props.animation_value >= 1) ? "property: position; to: -0.1 5.4 -1.8; dur: 3500; delay: 1000;" : " "}>
            <Text value={"about us"} color={"white"} width={1.5} height={0.4} font={"dejavu"} wrap-count={20}
                  align={"right"} opacity={1} alphaTest={20} opacity={0}
                  animation={(props.animation_value >= 1) ? "property: opacity; from: 0; to: 0.6; dur: 3500; delay: 1000;" : " "}/>
        </Plane>
    </Entity>
};

export default DesktopMenu;