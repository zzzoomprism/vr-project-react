import React from 'react';
import AFRAME from "aframe";
import {Entity, Box, Cylinder, Sphere, Plane, Sky, Text, Scene, Curvedimage, Camera, Cursor, Image, Ring, Event,Circle} from "react-aframe-ar";
import {Light, Video, Videosphere} from "react-aframe-ar/src";

import infoLoader from './info';
import visible from "./components/functions";
import './components/stars';
import './components/button';
import './components/AboutUs/Dushes';

import Menu from "./components/Menu/Menu";
import AboutUs from "./components/AboutUs/AboutUs";
import obj from "./media/globe.obj";

import img3 from './media/images/3.jpg';

class App extends React.Component{
    info = infoLoader;
    v = visible;
    constructor(props){
        super(props);
    }

    handleClick(props){
        let gallery = document.getElementsByClassName("curve-gallery-images");
        let angle = 0;
        let an;
        for(let i = 0; i < gallery.length; i++) {
            gallery[i].setAttribute("visible", 'true');
            let rotation = "0 " + `${angle+=40}` + " 0" ;
            gallery[i].setAttribute("animation", "property: rotation; to: " + rotation + " ; dur: 2500;");
            if(gallery[i].getAttribute("direction") === "right")
            an = angle + 360;
            else an = angle - 360;
            gallery[i].setAttribute("animation__rotation", "property: rotation; from: "
            + rotation + ";to: " + "0 " + an + " 0" + "; loop: true; dur: 80000; delay: 2500; easing: linear;" );
        }

        let menuElement = document.getElementsByClassName("menu");
        for(let i = 0; i < menuElement.length; i++){
            menuElement[i].setAttribute("animation", "property: scale; to: 0 0 0; dur: 500;");
            menuElement[i].setAttribute("visible", "false");
        }
    }

    handleMenuClick(){
        let menuElement = document.getElementsByClassName("menu");
        let angle = 0;
        for(let i = 0; i < menuElement.length; i++){
            menuElement[i].setAttribute("visible", "true");
            menuElement[i].setAttribute("animation", "property: scale; to: 1 1 1; dur: 500;");
        }
        console.log(menuElement[0]);
    }

    render() {
        let angle = 0;
        const informs = this.info.map(info=>
        <Curvedimage className={"curve-gallery-images"} visible={'true'} src={require('./media/images/' + info.img_src)}
                     height="5.0" radius="20.0" theta-length="35" id={info.curveImgId}
                     rotation={"0 0 0" } scale="0.8 0.8 0.8"
                     position={'0 2.8 0'} material={"wireframe: true; "}
                     direction={"left"}
                       />
        );

        const informs2 = this.info.map(info=>
            <Curvedimage className={"curve-gallery-images"} visible={'true'} src={require('./media/images/' + info.img_src)}
                         height="5.0" radius="20.0" theta-length="35" id={info.curveImgId}
                         rotation={"0 0 0" } scale="0.8 0.8 0.8"
                         position={'0 7.5 0'} material={"wireframe: true; "}
                         direction={"right"}
            />);

        const informs3 = this.info.map(info=>
            <Curvedimage className={"curve-gallery-images"} visible={'true'} src={require('./media/images/' + info.img_src)}
                         height="5.0" radius="20.0" theta-length="35" id={info.curveImgId}
                         rotation={"0 0 0" } scale="0.8 0.8 0.8"
                         position={'0 -2.3 0'} material={"wireframe: true; "}
                         direction={"right"}
            />
        );
        return(
            <Scene>
            <Sky color={"#222"}>
                <Entity geometry="primitive: circle; radius: 60;" material="color: #222; transparent: true; opacity: 0.5; depthTest: false; "
                        rotation={'-90 0 0'} position={'0 -2 0'}/>
                {informs}
                {informs2}
                {informs3}

                <Entity events={{'click': this.handleMenuClick.bind(this)}}>
                <Entity button position="-1 0 -4" rotation={"-90 0 0"}>
                    <a-obj-model src={obj} scale={'0.007 0.007 0.007'} position={"-0.03 0.150 0.3"}
                                 material={"color: #00fffb; transparent: true; opacity: 0.8; emissive: #00fffb; side: double;"}
                                animation={"property: rotation; to: 360 360 360; dur: 10000; loop: true; easing: linear;  "}
                               light={"type: spot; intensity: 2; color: #00fffb; penumbra: 1;"}/>
                </Entity>
                </Entity>

                <Menu position="-3 2.5 -2.5" text="COLLECTION" visible={"false"}
                      />
                <Menu position="1.5 3 -2.5" text="GALLERY" click={this.handleClick.bind(this)} visible={"false"}
                     />
                <Menu position="-1.5 3 -1.5" text="ABOUT US" click={this.v.add("about-us-plane")} visible={"false"}
                      />

                      <AboutUs />

                 <Entity bar={"radius: 10;"} position={"-1 -2 0"} animation={"property: rotation; to: 0 360 0; loop: true; easing: linear; dur: 100000;"} scale={"5 5 5"}/>

            </Sky>
        <Camera position="1 2 0">
            <Cursor color="white"/>
        </Camera>
        </Scene>
        );
    }

}

export default App;