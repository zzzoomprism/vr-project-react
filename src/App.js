import React from 'react';
import "aframe";
import 'aframe-particle-system-component';
import Assets from "aframe-react-assets";
import {Entity, Box, Cylinder, Sphere, Plane, Sky, Text, Scene, Curvedimage, Camera, Cursor, Animation, Image, Ring } from "react-aframe-ar";
import img from "./media/3.mp4";

class App extends React.Component{
    render() {
        return (
            <Scene>
                <Sky color="#333"/>
                <Ring color="yellow" radius-inner="90" radius-outer="100" side="double" rotation="90 0 0"/>
                <Ring color="yellow" radius-inner="80" radius-outer="90" side="double" rotation="90 0 0" position="0 10 0 "/>
                <Text value="Hello world!" color="#fff" />

            </Scene>
        );
    }
}

export default App;
