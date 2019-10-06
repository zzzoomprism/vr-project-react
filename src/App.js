import React from 'react';
import AFRAME from "aframe";
import 'aframe-particle-system-component';
import Assets from "aframe-react-assets";
import {Entity, Box, Cylinder, Sphere, Plane, Sky, Text, Scene, Curvedimage, Camera, Cursor, Image, Ring, Event,Circle} from "react-aframe-ar";
import {Light, Video, Videosphere} from "react-aframe-ar/src";
import infoLoader from './info';
import './components/stars';
import './components/button';

import Menu from "./components/Menu/Menu";
import obj from "./media/globe.obj";

import img3 from './media/images/3.jpg';

class App extends React.Component{
    info = infoLoader;

    constructor(props){
        super(props);
    }

    handleClick(props){
        let menu = document.getElementsByClassName("curve-gallery-images");
        for(let i = 0; i < menu.length; i++) {
            menu[i].setAttribute("visible", 'true');
            menu[i].setAttribute("animation", "property: scale; to: 1 1 1; dur: 2000; easing: linear;");
        }
        console.log(menu[0]);
    }

    handleMenuClick(){
        let menuElement = document.getElementsByClassName("menu");
        for(let i = 0; i < menuElement.length; i++){
            menuElement[i].setAttribute("visible", "true");
        }
        console.log(menuElement[0]);
    }

    render() {
        let angle = 0;
        const informs = this.info.map(info=>

        <Curvedimage className={"curve-gallery-images"} visible={'false'} src={require('./media/images/' + info.img_src)} height="5.0" radius="20.0" theta-length="35" id={info.curveImgId}
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

                <Entity events={{'click': this.handleMenuClick.bind(this)}}>
                <Entity button position="-1 0 -4" rotation={"-90 0 0"}>
                    <a-obj-model src={obj} scale={'0.007 0.007 0.007'} position={"-0.03 0.150 0.3"}
                                 material={"color: #00fffb; transparent: true; opacity: 0.8; wireframe: true;  emissive: #00fffb;"}
                                animation={"property: rotation; to: 360 360 360; dur: 10000; loop: true; easing: linear;  "}
                               light={"type: spot; intensity: 2; color: #00fffb; penumbra: 1;"}/>
                </Entity>
                </Entity>

                {/*<Light color="#00fffb" type={"point"} position={"-1 -1 -7.5"} intensity={10} penumbra={1} angle={360} distance={30} decay={50}/>*/}
                <Menu position="-3 2.5 -2.5" text="COLLECTION" visible={"false"}/>
                <Menu position="1.5 3 -2.5" text="GALLERY" click={this.handleClick.bind(this)} visible={"false"}/>
                <Menu position="-1.5 3 -1.5" text="ABOUT US" click={this.handleClick.bind(this)} visible={"false"}/>

            </Sky>
        <Camera position="1 2 0">
            <Cursor color="white"/>
            {/*<Plane visible={'true'} scale={'1 0 0'} id="menu" width={4} height={2} position={'0 2 -2'}*/}
            {/*       material={"color: #fff; transparent: true; opacity: 0.5; side: double; "}>*/}

            {/*</Plane>*/}

        </Camera>
        </Scene>
        );
    }

}

export default App;