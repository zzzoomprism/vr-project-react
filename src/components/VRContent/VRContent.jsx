import React from 'react';
import {Entity, Box, Cylinder, Sphere, Plane, Sky, Text, Scene, Curvedimage, Camera, Cursor, Image, Ring, Event,Circle} from "react-aframe-ar";

import './../stars';
import './../button';


import obj from "./../../media/globe.obj";
import video from "./../../media/Video/1.mp4";

import Menu from "./../Menu/Menu";
import AboutUs from "./../AboutUs/AboutUs";
import Gallery from "./../Gallery/Gallery";
import Contacts from "./../Contacts/Contacts";

import Loader from "../Loader/Loader";


class VRContent extends React.Component{
    state = {
        aboutUs: false,
        gallery: false,
        contact: false,
        video: false,
        time: true,
        menuOpen: false,
    };

    constructor(props){
        super(props);
        this.methodAboutUsState = this.methodAboutUsState.bind(this);
        this.methodGallery = this.methodGallery.bind(this);
        this.methodContacts = this.methodContacts.bind(this);
        this.methodVideoState = this.methodVideoState.bind(this);
        this.handleHide = this.handleHide.bind(this);
        this.handleMenuClick = this.handleMenuClick.bind(this);
    }

    handleMenuClick(){
        if(!this.state.menuOpen){
            this.setState({menuOpen: true});
        }
    }

    methodAboutUsState(){
        if(!this.state.aboutUs){
            this.setState({contact: false});
            this.setState({aboutUs: true});
            this.setState({gallery: false});
            this.setState({video: false});
        }

        this.setState({menuOpen: false,});
    }

    methodVideoState(){
        if(!this.state.aboutUs){
            this.setState({contact: false});
            this.setState({aboutUs: false});
            this.setState({gallery: false});
            this.setState({video: true});
        }

        this.setState({menuOpen: false,});
    }

    methodGallery(){
        if(!this.state.gallery){
            this.setState({contact: false});
            this.setState({aboutUs: false});
            this.setState({gallery: true});
            this.setState({video: false});
        }

        this.setState({menuOpen: false,});
    }

    methodContacts(){
        if(!this.state.contact) {
            this.setState({contact: true});
            this.setState({aboutUs: false});
            this.setState({gallery: false});
            this.setState({video: false});
        }

        this.setState({menuOpen: false,});
    }

    componentDidMount(){
        setTimeout(this.handleHide, 8000);
    }

    handleHide(){
        this.setState({time: false});
    }

    render() {
        return(
            <Scene>
                <Loader visible={this.state.time}/>
                <Sky color={(this.state.video) ? "" : "#000"} src={(this.state.video) ? video : ""}>
                     <Entity geometry="primitive: circle; radius: 60;" material="color: #222; transparent: true; opacity: 0.5; depthTest: false; "  rotation={'-90 0 0'} position={'0 -5 0'} visible={(this.state.video) ? "false" : "true" }/>
                    <Entity events={{'click': this.handleMenuClick}}>
                        <Entity button position="-1 0 -4" rotation={"-90 0 0"}>
                            <a-obj-model src={obj} scale={'0.007 0.007 0.007'} position={"-0.03 0.150 0.3"}
                                         material={"color: #00fffb; transparent: true; opacity: 0.8; emissive: #00fffb; side: double;"}
                                         animation={"property: rotation; to: 360 360 360; dur: 10000; loop: true; easing: linear;  "}
                                         light={"type: spot; intensity: 2; color: #00fffb; penumbra: 1;"}/>
                        </Entity>
                    </Entity>


                    <Menu position="-3 2.5 -2.5" text="CONTACT" visible={this.state.menuOpen} click={this.methodContacts} />
                    <Menu position="1.5 3 -2.5" text="GALLERY" visible={this.state.menuOpen} click={this.methodGallery} />
                    <Menu position="-1.5 3 -1.5" text="ABOUT US" visible={this.state.menuOpen} click={this.methodAboutUsState} />
                    <Menu position="0.1 2 -2" text="VIDEO" visible={this.state.menuOpen} click={this.methodVideoState} />

                    <Gallery visible={this.state.gallery}/>
                    <AboutUs visible={this.state.aboutUs}/>
                    <Contacts visible={this.state.contact}/>


                    {(this.state.video) ? " " : <Entity bar={"radius: 10"} position={"-1 -2 0"}
                                                        animation={"property: rotation; to: 0 360 0; loop: true; easing: linear; dur: 100000;"} scale={"5 5 5"}/>}

                </Sky>
                <Camera position="1 2 0">
                    <Cursor color="white"/>
                </Camera>
            </Scene>
        );
    }

}

export default VRContent;