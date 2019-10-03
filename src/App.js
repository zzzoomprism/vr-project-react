import React from 'react';
import AFRAME from "aframe";
import 'aframe-particle-system-component';
import Assets from "aframe-react-assets";
import {Entity, Box, Cylinder, Sphere, Plane, Sky, Text, Scene, Curvedimage, Camera, Cursor, Image, Ring, Event,Circle} from "react-aframe-ar";
import {Light, Video, Videosphere} from "react-aframe-ar/src";
import infoLoader from './info';
import './components/stars';
import './components/button';

import img3 from './media/images/3.jpg';

class App extends React.Component{
    info = infoLoader;

    constructor(props){
        super(props);
    }

    handleClick(props){
        let menu = document.getElementById("menu");
        menu.setAttribute("visible", 'true');
        menu.setAttribute("position", "0 0 -3");
        menu.setAttribute("animation__scale", "property: scale; to: 1 1 1; dur: 2000;");
        console.log("CLICK");
    }

    handleLeave(props){
        let menu = document.getElementById("menu");
        menu.setAttribute("animation__scale", "property: scale; to: 1 0 0; dur: 2000;");
        menu.setAttribute("position", "0 2 -3");
        menu.setAttribute("visible", 'false');
        console.log("NO");
    }

    render() {
        let angle = 0;
        const informs = this.info.map(info=>

        <Curvedimage src={require('./media/images/' + info.img_src)} height="5.0" radius="20.0" theta-length="35" id={info.curveImgId}
                         rotation={"0 " + `${angle+=40}` + " 0" } scale="0.8 0.8 0.8" position={'0 2.8 0'} material={"wireframe: true;"}
                         animation__1={"property: position; to: 0 3.5 0; dur: 4000; loop: true; dir: alternate;delay: " + Math.random()*1000 + ";"}
                        events={{'click': this.handleClick.bind(this)}}/>

        );
        return(
            <Scene>

            <Sky color={"#222"}>
                <Entity geometry="primitive: circle; radius: 60;" material="color: #222; transparent: true; opacity: 0.3; metalness: 1;"
                        rotation={'-90 0 0'} position={'0 -2 0'}/>
                {informs}
                <Entity button position={'0 2 -3'}/>
                {/*<Entity bar position={'0 1.5 -3'} />*/}
            </Sky>
        <Camera position="1 2 0">
            <Cursor color="white"/>
            <Plane visible={'true'} scale={'1 0 0'} id="menu" width={4} height={2} position={'0 2 -2'}
                   material={"color: #fff; transparent: true; opacity: 0.5; side: double; "}>

            </Plane>

        </Camera>
        </Scene>
        );
    }

}

export default App;