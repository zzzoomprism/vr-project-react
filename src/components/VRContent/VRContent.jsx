import React from 'react';
import AFRAME from "aframe";
import {Entity, Box, Cylinder, Sphere, Plane, Sky, Text, Scene, Curvedimage, Camera, Cursor, Image, Ring, Event,Circle} from "react-aframe-ar";
import {Light, Video, Videosphere} from "react-aframe-ar/src";

import './../stars';
import './../button';


import obj from "./../../media/globe.obj";
import building from "./../../media/building.obj";

import Menu from "./../Menu/Menu";
import AboutUs from "./../AboutUs/AboutUs";
import Gallery from "./../Gallery/Gallery";
import Contacts from "./../Contacts/Contacts";


import aboutUs from "./../AboutUs/functions";
import gallery from "./../Gallery/functions";
import menu from "./../Menu/functions";
import contact from "./../Contacts/functions";
import style from "../Loader/Loader.module.css";

class VRContent extends React.Component{
    state = {
        aboutUs: false,
        gallery: false,
        contact: false,
    };

    constructor(props){
        super(props);
        this.methodAboutUsState = this.methodAboutUsState.bind(this);
        this.methodGallery = this.methodGallery.bind(this);
        this.methodContacts = this.methodContacts.bind(this);
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
        this.setState({aboutUs: true});
        menu.remove();
        gallery.remove();
        contact.remove();
      //  aboutUs.add();
    }

    methodGallery(){
        menu.remove();
        aboutUs.remove();
        contact.remove();
        gallery.add();
    }

    methodContacts(){
        menu.remove();
        aboutUs.remove();
        gallery.remove();
        contact.add();
    }



    render() {
        return(
            <Scene>
                <Sky color={"#222"}>
                    <Entity geometry="primitive: circle; radius: 60;" material="color: #222; transparent: true; opacity: 0.5; depthTest: false; "
                            rotation={'-90 0 0'} position={'0 -2 0'}/>


                    <Entity events={{'click': this.handleMenuClick.bind(this)}}>
                        <Entity button position="-1 0 -4" rotation={"-90 0 0"}>
                            <a-obj-model src={obj} scale={'0.007 0.007 0.007'} position={"-0.03 0.150 0.3"}
                                         material={"color: #00fffb; transparent: true; opacity: 0.8; emissive: #00fffb; side: double;"}
                                         animation={"property: rotation; to: 360 360 360; dur: 10000; loop: true; easing: linear;  "}
                                         light={"type: spot; intensity: 2; color: #00fffb; penumbra: 1;"}/>
                        </Entity>
                    </Entity>


                    <Menu position="-3 2.5 -2.5" text="CONTACT" visible={"false"} click={this.methodContacts} />
                    <Menu position="1.5 3 -2.5" text="GALLERY" click={this.methodGallery} visible={"false"} />
                    <Menu position="-1.5 3 -1.5" text="ABOUT US" visible={"false"} click={this.methodAboutUsState} />

                    <Gallery/>
                    <AboutUs visible={this.state.aboutUs}/>
                    <Contacts/>

                    <Entity bar={"radius: 10"} position={"-1 -2 0"} animation={"property: rotation; to: 0 360 0; loop: true; easing: linear; dur: 100000;"} scale={"5 5 5"}/>

                </Sky>
                <Camera position="1 2 0">
                    <Cursor color="white"/>
                </Camera>
            </Scene>
        );
    }

}

export default VRContent;