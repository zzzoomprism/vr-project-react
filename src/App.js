import React from 'react';
import AFRAME from "aframe";
import {Entity, Box, Cylinder, Sphere, Plane, Sky, Text, Scene, Curvedimage, Camera, Cursor, Image, Ring, Event,Circle} from "react-aframe-ar";
import {Light, Video, Videosphere} from "react-aframe-ar/src";

import './components/stars';
import './components/button';


import obj from "./media/globe.obj";
import building from "./media/building.obj";

import Menu from "./components/Menu/Menu";
import AboutUs from "./components/AboutUs/AboutUs";
import Gallery from "./components/Gallery/Gallery";
import Link from "./components/Link/Link";
import Contacts from "./components/Contacts/Contacts";


import aboutUs from "./components/AboutUs/functions";
import gallery from "./components/Gallery/functions";
import menu from "./components/Menu/functions";

class App extends React.Component{
    state = {
        aboutUs: false,
        gallery: false,
    };

    constructor(props){
        super(props);
        this.methodAboutUsState = this.methodAboutUsState.bind(this);
        this.methodGallery = this.methodGallery.bind(this);
    }

    handleMenuClick(){
        let menuElement = document.getElementsByClassName("menu");
        let angle = 0;
        for(let i = 0; i < menuElement.length; i++){
            menuElement[i].setAttribute("visible", "true");
            menuElement[i].setAttribute("animation", "property: scale; to: 1 1 1; dur: 500;");
        }
    }

        methodAboutUsState(){
            menu.remove();
            gallery.remove();
            aboutUs.add();
        }

        methodGallery(){
            menu.remove();
            aboutUs.remove();
            gallery.add();
        }

    render() {
        return(
            <Scene>
            <Sky color={"#222"}>
                <Entity geometry="primitive: circle; radius: 60;" material="color: #222; transparent: true; opacity: 0.5; depthTest: false; "
                        rotation={'-90 0 0'} position={'0 -2 0'}/>
                <Gallery/>

                <Entity events={{'click': this.handleMenuClick.bind(this)}}>
                <Entity button position="-1 0 -4" rotation={"-90 0 0"}>
                    <a-obj-model src={obj} scale={'0.007 0.007 0.007'} position={"-0.03 0.150 0.3"}
                                 material={"color: #00fffb; transparent: true; opacity: 0.8; emissive: #00fffb; side: double;"}
                                animation={"property: rotation; to: 360 360 360; dur: 10000; loop: true; easing: linear;  "}
                               light={"type: spot; intensity: 2; color: #00fffb; penumbra: 1;"}/>
                </Entity>
                </Entity>


                <Menu position="-3 2.5 -2.5" text="CONTACT" visible={"false"} />
                <Menu position="1.5 3 -2.5" text="GALLERY" click={this.methodGallery} visible={"false"} />
                <Menu position="-1.5 3 -1.5" text="ABOUT US" visible={"false"} click={this.methodAboutUsState} />
                <AboutUs/>
                <Contacts/>
                <a-obj-model src={building} scale={'0.007 0.007 0.007'} position={"-1 -10 -2"}
                             material={"color: #00fffb; transparent: true; opacity: 0.8; emissive: white; emissiveIntensity: 0.3; wireframe: true;"} />
                <a-obj-model src={building} scale={'0.007 0.007 0.007'} position={"-1 -10 -4.5"}
                             material={"color: #00fffb; transparent: true; opacity: 0.8; emissive: white; emissiveIntensity: 0.3; wireframe: true;"} />
                <a-obj-model src={building} scale={'0.007 0.007 0.007'} position={"-1 -10 -7"}
                             material={"color: #00fffb; transparent: true; opacity: 0.8; emissive: white; emissiveIntensity: 0.3; wireframe: true;"} />
                <a-obj-model src={building} scale={'0.007 0.007 0.007'} position={"-1 -10 -9.5"}
                             material={"color: #00fffb; transparent: true; opacity: 0.8; emissive: white; emissiveIntensity: 0.3; wireframe: true;"} />
                <a-obj-model src={building} scale={'0.007 0.007 0.007'} position={"-1 -10 -13"}
                             material={"color: #00fffb; transparent: true; opacity: 0.8; emissive: white; emissiveIntensity: 0.3; wireframe: true;"} />




                 <Entity bar={"radius: 10"} position={"-1 -2 0"} animation={"property: rotation; to: 0 360 0; loop: true; easing: linear; dur: 100000;"} scale={"5 5 5"}/>

            </Sky>
        <Camera position="1 2 0">
            <Cursor color="white"/>
        </Camera>
        </Scene>
        );
    }

}

export default App;