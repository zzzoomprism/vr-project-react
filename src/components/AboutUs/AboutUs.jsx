import React from "react";
import {Entity, Plane, Text} from "react-aframe-ar";
import descriptionLoader from "./description";
import manipulation from "./functions";

class AboutUs extends React.Component {
    descr = descriptionLoader;

    constructor(props) {
        super(props);
    }

    render() {
        const plane = this.descr.map(info=>
            <Entity key={info.id + "hello"}>
                <Plane className={"about-us-plane-wireframe"} width={2} height={3.2}
                   position={info.position} rotation={info.rotation}
                   scale={"1 0 0"} segments-height={0} segments-width={0}
                   material={"transparent: true; opacity: 0.4; color: #00fffb; side: double; wireframe: true; emissive: #00fffb;"}
                   visible={this.props.visible}
                   animation__scale={(this.props.visible) ? manipulation.wireframe.visible.animation_scale : manipulation.wireframe.not_visible.animation_scale}
                   animation__segmentsHeight={(this.props.visible) ? manipulation.wireframe.visible.animation_segmentsHeight : manipulation.wireframe.not_visible.animation_segmentsHeight}
                   animation__segmentsWidth={(this.props.visible) ? manipulation.wireframe.visible.animation_segmentsWidth : manipulation.wireframe.not_visible.animation_segmentsWidth}
                   animation__opacity={(this.props.visible) ? manipulation.wireframe.visible.animation_opacity : manipulation.wireframe.not_visible.animation_opacity}
                   >
                <Plane className={"about-us-plane"} key={info.id} width={2} height={3.2}
                       scale={"1 0 1"}
                       material={"transparent: true; opacity: 0.4; color: #00fffb; side: double;"}
                       visible={this.props.visible}
                        animation__scale={(this.props.visible) ? manipulation.plane.visible.animation_scale : manipulation.plane.not_visible.animation_scale}>
                <Text className={"about-us-plane-text"} value={info.title} side={"double"} z-offset={-0.01} align={"center"} font={"dejavu"}
                      width={2} height={3.2} position={"0 1.3 0"} letter-spacing={"5"} wrap-count={"25"}
                      visible={true} scale={"1 1 1"} opacity={"0.0"} alpha-test={5.5}
                      animation__opacity={(this.props.visible) ? manipulation.text.visible.animation_opacity : manipulation.text.not_visible.animation_opacity}
                />
                <Text className={"about-us-plane-text"} value={info.description}
                      side={"double"} z-offset={-0.01} align={"center"} font={"dejavu"}
                      width={1.8} height={3.2} alpha-test={5.5}
                      visible={true} scale={"1 1 1"} opacity={"0.0"}
                      animation__opacity={(this.props.visible) ? manipulation.text.visible.animation_opacity : manipulation.text.not_visible.animation_opacity}
                />
                </Plane>
            </Plane>
            </Entity>
        );

        return(
            <Entity id={"about-us"}>
            {plane}
            </Entity>
            )}

}

export default AboutUs;