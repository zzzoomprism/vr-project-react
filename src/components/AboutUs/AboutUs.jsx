import React from "react";
import AFRAME from "aframe";
import {Entity, Box, Cylinder, Sphere, Plane, Sky, Text, Scene, Curvedimage, Camera, Cursor, Image, Ring, Event,Circle} from "react-aframe-ar";
import {Light} from "react-aframe-ar/src";
import descriptionLoader from "./description";
import manipulation from "./functions";

class AboutUs extends React.Component {
    descr = descriptionLoader;

    constructor(props) {
        super(props);
    }

    state = manipulation;

    render() {
        const plane = this.descr.map(info=>
            <Plane className={"about-us-plane-wireframe"} key={info.id} width={2} height={3.2}
                   position={info.position} rotation={info.rotation}
                   scale={"1 0 0"} segments-height={0} segments-width={0}
                   material={"transparent: true; opacity: 0.4; color: #00fffb; side: double; wireframe: true; emissive: #00fffb;"}
                   visible={this.props.visible}
                   animation__scale={(this.props.visible) ? this.state.wireframe.visible.animation_scale : this.state.wireframe.not_visible.animation_scale}
                   animation__segmentsHeight={(this.props.visible) ? this.state.wireframe.visible.animation_segmentsHeight : this.state.wireframe.not_visible.animation_segmentsHeight}
                   animation__segmentsWidth={(this.props.visible) ? this.state.wireframe.visible.animation_segmentsWidth : this.state.wireframe.not_visible.animation_segmentsWidth}
                   animation__opacity={(this.props.visible) ? this.state.wireframe.visible.animation_opacity : this.state.wireframe.not_visible.animation_opacity}>
                <Plane className={"about-us-plane"} key={info.id} width={2} height={3.2}
                       scale={"1 0 1"}
                       material={"transparent: true; opacity: 0.4; color: #00fffb; side: double;"}
                       visible={this.props.visible}
                        animation__scale={(this.props.visible) ? this.state.plane.visible.animation_scale : this.state.plane.not_visible.animation_scale}>
                <Text className={"about-us-plane-text"} value={info.title} side={"double"} z-offset={-0.01} align={"center"} font={"dejavu"}
                      width={2} height={3.2} position={"0 1.3 0"} letter-spacing={"5"} wrap-count={"25"}
                      visible={true} scale={"1 1 1"} opacity={"0.0"} alpha-test={5.5}
                      animation__opacity={(this.props.visible) ? this.state.text.visible.animation_opacity : this.state.text.not_visible.animation_opacity}
                />
                <Text className={"about-us-plane-text"} value={info.description}
                      side={"double"} z-offset={-0.01} align={"center"} font={"dejavu"}
                      width={1.8} height={3.2} alpha-test={5.5}
                      visible={true} scale={"1 1 1"} opacity={"0.0"}
                      animation__opacity={(this.props.visible) ? this.state.text.visible.animation_opacity : this.state.text.not_visible.animation_opacity}
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