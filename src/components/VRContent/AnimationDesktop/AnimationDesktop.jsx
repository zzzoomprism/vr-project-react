import React from "react";
import {Box, Cylinder, Sphere, Plane, Sky, Text, Curvedimage, Camera, Cursor, Image, Ring, Event,Circle} from "react-aframe-ar";
import {Entity, Scene} from "aframe-react";
import "./../button";
import DesktopMenu from "./DesktopMenu";

function* generator(){
    yield 1;
    return 2;
}

class AnimationDesktop extends React.Component{
    state = {
        stepValue: 0
    };
    handleClick(){
        let step = generator();
        this.setState({stepValue: step.next().value });
    }
    render() {
        return <Sphere radius={40} material={"color: black; side: double;"}>
            <Entity nothing={"power: 20;"} position={"1 6 -2"}/>
            <Plane width={1} height={0.3} position={"1 5 -1"} material={"color: white; opacity: 0.1"}
                   events={{ "click": this.handleClick.bind(this) }}>
                <Text value={"next"} color={"white"} width={1.5} height={0.3} align={"center"} wrap-count={20}
                       alphaTest={20}
                     />
            </Plane>
            <Text value={"WELCOME TO CAROLINE"} color={"white"} position={"-20 0 0"}  width={3}
                  height={2} textAlign={"center"} transparent={true} opacity={"0"}
                  animation={"property: opacity; to: 1; dur: 3000; easing: linear; dir: alternate; loop: 1; delay: 2000;"}
                  animation__position={"property: position; from: -1 6.1 -1; to: -0.1 6 -1; dur: 6000; easing: linear; delay: 2000;"}/>
           <DesktopMenu animation_value={this.state.stepValue}/>
        </Sphere>
    }
};

export default AnimationDesktop;


