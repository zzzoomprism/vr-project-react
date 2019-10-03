import React from 'react';
import AFRAME from "aframe";
import 'aframe-particle-system-component';
import Assets from "aframe-react-assets";
import {Entity, Box, Cylinder, Sphere, Plane, Sky, Text, Scene, Curvedimage, Camera, Cursor, Image, Ring, Event,Circle} from "react-aframe-ar";
import {Light, Video, Videosphere} from "react-aframe-ar/src";
import infoLoader from './info';
import './components/stars';

import img3 from './media/images/3.jpg';

class App extends React.Component{
    info = infoLoader;
    constructor(props){
        super(props);
    }
    // state={
    //     sky: false,
    //     src: {img},
    //     scale: "1 1"
    // };
    // handleClick(props){
    //     this.setState({sky: !this.state.sky,  src: props.target.getAttribute("video")});
    //     console.log(props.target.getAttribute("video"));
    //     console.log(this.state);
    // }
    render() {
        let angle = 0;
        const informs = this.info.map(info=>

        <Curvedimage src={require('./media/images/' + info.img_src)} height="5.0" radius="20.0" theta-length="35"
                         rotation={"0 " + `${angle+=40}` + " 0" } scale="0.8 0.8 0.8" position={'0 2.8 0'} material={"wireframe: true;"}
                         animation__1={"property: position; to: 0 3.5 0; dur: 4000; loop: true; dir: alternate;delay: " + Math.random()*1000 + ";"}/>

        );
        return(
            <Scene>

            <Sky color={"#222"}>
                <Entity geometry="primitive: circle; radius: 60;" material="color: #222; transparent: true; opacity: 0.5; metalness: 1;" rotation={'-90 0 0'}/>
                {informs}

                <Curvedimage src={img3} height="5.0" radius="20" theta-length="35"
                             rotation="0 0 0" scale="0.8 0.8 0.8" position={'0 7.6 0'}
                             animation__1={"property: position; to: 0 8.0 0; dur: 4000; loop: true; dir: alternate;delay: " + Math.random()*1000 + ";"}/>
            </Sky>
        <Camera position="1 2 0">
            <Cursor color="white"/>
        </Camera>
        </Scene>
        );
    }

}

export default App;