import React from "react";
import infoLoader from './../../info';
import {Entity, Box, Cylinder, Sphere, Plane, Sky, Text, Scene, Curvedimage, Camera, Cursor, Image, Ring, Event,Circle} from "react-aframe-ar";
import {Light, Video, Videosphere} from "react-aframe-ar/src";

class Gallery extends React.Component{
    info = infoLoader;
    constructor(props){
        super(props);
    }


    render() {
        let angle = 0;
        const informs = this.info.map(info=>
            <Curvedimage visible={this.props.visible} src={require('./../../media/images/' + info.img_src)}
                         height="5.0" radius="16.0" theta-length="35" id={info.curveImgId}
                         rotation={"0 0 0" } scale="0.8 0.8 0.8" key={info.curveImgId}
                         position={'0 2.8 0'} material={"wireframe: true; transparent: true; opacity: 1.0;"}
                         animation__rotation={(this.props.visible) ? "property: rotation; to: 0 " + `${angle+=40}` + " 0; dur: 2000; easing: linear;" : "property: rotation; to: 0 0 0; dur: 2000; easing: linear;"}
                         animation__smoth = {(this.props.visible) ? "property: rotation; from: " + "0 " + `${angle}` + " 0; to: 0 " + `${angle+360}` + " 0; loop: true; dur: 80000; delay: 2000; easing: linear;" : "property: rotation; to: 0 0 0; dur: 2000; easing: linear;"}
           />
        );
        const informs2 = this.info.map(info=>
            <Curvedimage visible={this.props.visible} src={require('./../../media/images/' + info.img_src)}
                         height="5.0" radius="16.0" theta-length="35" id={info.curveImgId}
                         rotation={"0 0 0" } scale="0.8 0.8 0.8" key={info.curveImgId + "v2"}
                         position={'0 7.5 0'} material={"wireframe: true; transparent: true; opacity: 1.0;"}
                         animation__rotation={(this.props.visible) ? "property: rotation; to: 0 " + `${angle+=40}` + " 0; dur: 2000; easing: linear;" : "property: rotation; to: 0 0 0; dur: 2000; easing: linear;"}
                         animation__smoth = {(this.props.visible) ? "property: rotation; from: " + "0 " + `${angle}` + " 0; to: 0 " + `${angle-360}` + " 0; loop: true; dur: 80000; delay: 2000; easing: linear;" : "property: rotation; to: 0 0 0; dur: 2000; easing: linear;"}
            />);

        const informs3 = this.info.map(info=>
            <Curvedimage visible={this.props.visible} src={require('./../../media/images/' + info.img_src)}
                         height="5.0" radius="16.0" theta-length="35" id={info.curveImgId}
                         rotation={"0 0 0" } scale="0.8 0.8 0.8" key={info.curveImgId+"v3"}
                         position={'0 -2.3 0'} material={"wireframe: true; transparent: true; opacity: 1.0;"}
                         animation__rotation={(this.props.visible) ? "property: rotation; to: 0 " + `${angle+=40}` + " 0; dur: 2000; easing: linear;" : "property: rotation; to: 0 0 0; dur: 2000; easing: linear;"}
                         animation__smoth = {(this.props.visible) ? "property: rotation; from: " + "0 " + `${angle}` + " 0; to: 0 " + `${angle-360}` + " 0; loop: true; dur: 80000; delay: 2000; easing: linear;" : "property: rotation; to: 0 0 0; dur: 2000; easing: linear;"}
            />
        );
        return(
            <Entity>
                {informs}
                {informs2}
                {informs3}
            </Entity>
        )
    }
}

export default Gallery;