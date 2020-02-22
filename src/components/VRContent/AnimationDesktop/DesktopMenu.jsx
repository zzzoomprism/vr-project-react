import React from "react";
import {Box, Cylinder, Sphere, Plane, Sky, Text, Curvedimage, Camera, Cursor, Image, Ring, Event,Circle} from "react-aframe-ar";
import {Entity} from "aframe-react";

function timeOutReturn(value, mseconds){
    setTimeout(()=>value, mseconds);
    return value;
}

const DesktopMenu = (props) =>{
    return <Entity>
        {/*<Plane width={2.5} height={0.5} position={(props.open) ? timeOutReturn("-0.1 7 -1.8", 3500) : " 1.2 7 -1.8"}*/}
        {/*       material={"color: white; transparent: true; opacity: 0;"}*/}
        {/*animation__position={(props.open) ? "property: position; from:1.2 7 -1.8;  to: -0.1 7 -1.8; dur: 3500;" : " "}>*/}
        {/*    <Text value={"collection"} color={"white"} width={1.5} height={0.4}  wrap-count={20}*/}
        {/*          align={"right"} alphaTest={20} opacity={(props.open) ? timeOutReturn(1, 3500) : 0}*/}
        {/*          animation={(props.open) ? "property: opacity; from: 0; to: 0.6; dur: 3500;" : " "}/>*/}
        {/*</Plane>*/}
        {/*<Plane width={2.5} height={0.5} position={(props.open) ? timeOutReturn("-0.2 6.2 -1.8", 3500) : "1.2 6.2 -1.8" }*/}
        {/*       material={"color: white; transparent: true; opacity: 0;"}*/}
        {/*       animation__position={(props.open) ? "property: position; from: 1.2 6.2 -1.8; to: -0.2 6.2 -1.8; dur: 3500; delay: 500;" : " "}>*/}
        {/*    <Text value={"enter to the room"} color={"white"} width={1.5} height={0.4} font={"dejavu"} wrap-count={20}*/}
        {/*          align={"right"} alphaTest={20} opacity={(props.open) ? timeOutReturn(1, 3500) : 0}*/}
        {/*          animation={(props.open) ? "property: opacity; from: 0; to: 0.6; dur: 3500;  delay: 500;" : " "}/>*/}
        {/*</Plane>*/}
        {/*<Plane width={2.5} height={0.5} position={(props.open) ? "-0.1 5.4 -1.8" : "1.2 5.4 -1.8" }*/}
        {/*       material={"color: white; transparent: true; opacity: 0;"}*/}
        {/*       animation__position={(props.open) ? "property: position; from:1.2 5.4 -1.8;  to: -0.1 5.4 -1.8; dur: 3500; delay: 1000;" : " "}>*/}
        {/*    <Text value={"about us"} color={"white"} width={1.5} height={0.4} font={"exo2bold"} wrap-count={20}*/}
        {/*          align={"right"} alphaTest={20} opacity={(props.open) ? timeOutReturn(1, 3500) : 0}*/}
        {/*          animation={(props.open) ? "property: opacity; from: 0; to: 0.6; dur: 3500; delay: 1000;" : " "}/>*/}
        {/*</Plane>*/}

        {/*<Curvedimage src={"https://images.pexels.com/photos/279618/pexels-photo-279618.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} theta-length={30} height={3.5} position={"0 6.5 0"} radius={5} material={"wireframe: true;"}/>*/}
        {/*<Curvedimage src={"https://images.pexels.com/photos/1005644/pexels-photo-1005644.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} theta-length={30} height={3.5} position={"0 6.5 0"} radius={5} material={"wireframe: true;"} theta-start={-35}/>*/}
    </Entity>
};

export default DesktopMenu;