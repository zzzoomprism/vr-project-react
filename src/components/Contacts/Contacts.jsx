import React from 'react';
import AFRAME from "aframe";
import Assets from "aframe-react-assets";
import {Entity, Box, Cylinder, Sphere, Plane, Sky, Text, Scene, Curvedimage, Camera, Cursor, Image, Ring, Event,Circle} from "react-aframe-ar";
import {Light, Video, Videosphere} from "react-aframe-ar/src";
import info from "./../contacts_info";
import Terminal from "../VRContent/Terminal/Terminal";

class Contacts extends React.Component{
    state = {
        infoTitle: "",
        infoDesc: "",
        visible: false,
    };
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        this.setState({infoTitle: event.target.title});
        this.setState({infoDesc: event.target.getAttribute("information")});
        this.setState({visible: true});
    }


    render() {
        let angle = 0;
        const contact_info = info.map(info=>
            <Entity key={info.id}>
        <Curvedimage visible={this.props.visible} src={info.img}
                     height="14" radius="13" theta-length="40"
                     rotation={"0 0 0" } scale="0.8 0.8 0.8"
                     geometry={"segmentsRadial: 50; segmentsHeight: 120;"}
                     position={'-1 3.0 0'} material={"transparent: true; opacity: 0.7; wireframe: true; "}
                     animation__rotation={(this.props.visible) ? "property: rotation; to:" + "0 " + `${angle+=50}`+ " 0" + "; dur: 2000; easing: linear;" : "property: rotation; to: 0 0 0; dur: 2000;"}
                     animation__smoth = {(this.props.visible) ? "property: rotation; from: " + "0 " + `${angle}` + " 0; to: 0 " + `${angle+360}` + " 0; loop: true; dur: 80000; delay: 2000; easing: linear;" : "property: rotation; to: 0 0 0; dur: 2000; easing: linear;"}
                     events={{'click': this.handleClick}}
        title={info.title}
        information={info.description}>
        </Curvedimage>
            </Entity>
        );

        return(
            <Entity>
                {contact_info}
                <Terminal title={this.state.infoTitle} description={this.state.infoDesc} visible={this.state.visible} close={this.props.visible}/>
            </Entity>
        )
    }
}

export default Contacts;