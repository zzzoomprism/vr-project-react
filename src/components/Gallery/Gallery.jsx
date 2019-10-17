import React from "react";
import infoLoader from './../../info';
import {Entity, Box, Cylinder, Sphere, Plane, Sky, Text, Scene, Curvedimage, Camera, Cursor, Image, Ring, Event,Circle} from "react-aframe-ar";
import {Light, Video, Videosphere} from "react-aframe-ar/src";

class Gallery extends React.Component{
    info = infoLoader;
    render() {
        const informs = this.info.map(info=>
            <Curvedimage className={"curve-gallery-images"} visible={'true'} src={require('./../../media/images/' + info.img_src)}
                         height="5.0" radius="20.0" theta-length="35" id={info.curveImgId}
                         rotation={"0 0 0" } scale="0.8 0.8 0.8"
                         position={'0 2.8 0'} material={"wireframe: true; "}
                         direction={"left"}
            />
        );
        const informs2 = this.info.map(info=>
            <Curvedimage className={"curve-gallery-images"} visible={'true'} src={require('./../../media/images/' + info.img_src)}
                         height="5.0" radius="20.0" theta-length="35" id={info.curveImgId}
                         rotation={"0 0 0" } scale="0.8 0.8 0.8"
                         position={'0 7.5 0'} material={"wireframe: true; "}
                         direction={"right"}
            />);

        const informs3 = this.info.map(info=>
            <Curvedimage className={"curve-gallery-images"} visible={'true'} src={require('./../../media/images/' + info.img_src)}
                         height="5.0" radius="20.0" theta-length="35" id={info.curveImgId}
                         rotation={"0 0 0" } scale="0.8 0.8 0.8"
                         position={'0 -2.3 0'} material={"wireframe: true; "}
                         direction={"right"}
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