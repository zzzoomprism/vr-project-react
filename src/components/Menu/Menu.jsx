import React from 'react';
import AFRAME from "aframe";
import Assets from "aframe-react-assets";
import {Entity, Box, Cylinder, Sphere, Plane, Sky, Text, Scene, Curvedimage, Camera, Cursor, Image, Ring, Event,Circle} from "react-aframe-ar";
import {Light, Video, Videosphere} from "react-aframe-ar/src";
import './../button';

class Menu extends React.Component{
    render() {
        console.log(this.props.click);
        return(
            <Entity button className={"menu"} scale="0 0 0" position={this.props.position}
                    events={{'click': this.props.click}} rotation={(this.props.rotation) ? this.props.rotation : "" }
                    visible={this.props.visible}
                    animation__scale={this.props.animation}>
                <Text value={this.props.text} material={"color: white;"}
                      text={"side: double; align: center; negate: false;"} rotation={"0 -180 0"} position={"0 0 -0.35"}
                      events={{'click': this.props.click}}
                />
            </Entity>
        )
    };

}

export default Menu;