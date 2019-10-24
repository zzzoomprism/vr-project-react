import React from "react";
import AFRAME from "aframe";
import {Entity, Box, Cylinder, Sphere, Plane, Sky, Text, Scene, Curvedimage, Camera, Cursor, Image, Ring, Event,Circle} from "react-aframe-ar";
import {Light} from "react-aframe-ar/src";
import descriptionLoader from "./description";

class AboutUs extends React.Component{
    descr = descriptionLoader;
    constructor(props){
        super(props);
        this.aboutUsPlaneWireframe = React.createRef();
    }

    state={
        wireframe:{
            visible: false,
            animation_scale: "property: scale; to: 1 1 1; dur: 500; easing: linear;",
            animation_segmentsHeight: "property: segments-height; to: 60; dur: 1500;",
            animation_segmentsWidth: "property: segments-width; to: 60; dur: 1500;",
            animation_opacity: "property: material.opacity; to: 0; dur: 1500; delay: 2000;", },


    };

    render() {
        const plane = this.descr.map(info=>
            <Plane className={"about-us-plane-wireframe"} ref={this.aboutUsPlaneWireframe} key={info.id} width={2} height={3.2}
                   position={info.position} rotation={info.rotation}
                   scale={"1 0 0"} segments-height={0} segments-width={0}
                   material={"transparent: true; opacity: 0.4; color: #00fffb; side: double; wireframe: true; emissive: #00fffb;"}
                   visible={this.props.visible}
                   animation__scale={(this.props.visible) ? this.state.wireframe.animation_scale : " "}
                   animation__segmentsHeight={(this.props.visible) ? this.state.wireframe.animation_segmentsHeight : " "}
                   animation__segmentsWidth={(this.props.visible) ? this.state.wireframe.animation_segmentsWidth : " "}
                   animation__opacity={(this.props.visible) ? this.state.wireframe.animation_opacity : " "}>
                <Plane className={"about-us-plane"} key={info.id} width={2} height={3.2}
                       scale={"1 0 1"}
                       material={"transparent: true; opacity: 0.4; color: #00fffb; side: double;"}
                       visible={this.props.visible}
                        animation__scale={(this.props.visible) ? "property: scale; to: 1 1 1; dur: 1500; easing: linear; delay: 2000;" : " "}>
                <Text className={"about-us-plane-text"} value={info.title} side={"double"} z-offset={-0.01} align={"center"} font={"dejavu"}
                      width={2} height={3.2} position={"0 1.3 0"} letter-spacing={"5"} wrap-count={"25"}
                      visible={true} scale={"1 1 1"} opacity={"0.0"} alpha-test={5.5}
                      animation__opacity={(this.props.visible) ? "property: opacity; to: 0.7; dur: 1500; delay: 3500;" : " "}
                />
                <Text className={"about-us-plane-text"} value={info.description}
                      side={"double"} z-offset={-0.01} align={"center"} font={"dejavu"}
                      width={1.8} height={3.2} alpha-test={5.5}
                      visible={true} scale={"1 1 1"} opacity={"0.0"}
                      animation__opacity={(this.props.visible) ? "property: opacity; to: 0.7; dur: 1500; delay: 3500;" : " "}
                />
                </Plane>
            </Plane>
        );

        return(
            <Entity id={"about-us"}>
            {plane}
            </Entity>
            )}

}

export default AboutUs;