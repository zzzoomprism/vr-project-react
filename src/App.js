import React from 'react';
import "aframe";
import 'aframe-particle-system-component';
import Assets from "aframe-react-assets";
import {Entity, Box, Cylinder, Sphere, Plane, Sky, Text, Scene, Curvedimage, Camera, Cursor, Image, Ring, Event} from "react-aframe-ar";
import {Video, Videosphere} from "react-aframe-ar/src";
import img from "./media/1.mp4";
import Menu from "./components/Home/Menu";


class App extends React.Component{
    constructor(props){
        super(props);
    }
    state={
        sky: false,
        src: {img},
        scale: "1 1"
    };

    handleClick(props){
        this.setState({sky: true, src: props.target.getAttribute("video")});
        console.log(props.target.getAttribute("video"));
    }
    handleCollide(){
        console.log("Collide");
    }
       render() {
        return (
            <Scene>
                <Sky src={this.state.sky === true ? this.state.src : ""} color="#222">
                    <Plane width={20} height={20} rotation={"-90 0 0"} grid={"true"} opacity="0"/>
                    <Menu/>
                    <Plane width="2" height="1" position="-1.2 2 -3">
                        <Video src={img} width="2"/>
                    </Plane>
                    <Plane width="2" height="1" position="0 1 -3" rotation="2 0 0" video={img}
                           events={{mouseenter: this.handleClick.bind(this)}}
                          >
                        <Video src={img} width="2"/>
                    </Plane>
                </Sky>
            <Camera position="1 1 0">
                <Cursor color="yellow"/>
            </Camera>
            </Scene>
        );
    }
}

export default App;
