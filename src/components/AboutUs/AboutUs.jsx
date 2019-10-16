import React from "react";
import AFRAME from "aframe";
import {Entity, Box, Cylinder, Sphere, Plane, Sky, Text, Scene, Curvedimage, Camera, Cursor, Image, Ring, Event,Circle} from "react-aframe-ar";
import {Light} from "react-aframe-ar/src";
import descriptionLoader from "./description";

class AboutUs extends React.Component{
    descr = descriptionLoader;
    state = {
      value: "hey "
    };
    constructor(props){
        super(props);
        this.handleTextValue = this.handleTextValue.bind(this);

    }
    handleTextValue(){
        let text = document.getElementsByClassName("about-us-plane-text");
        for(let i = 0; i < text.length; i++){
            let description = text[i].getAttribute("textValue");
            let n = "";
            for(let j = 0; j < description.length; j++){
                n += description[j];
                this.setState({value: n});
            }
        }
    }

    render() {
        const plane = this.descr.map(info=>
            <Plane className={"about-us-plane"} key={info.id} width={2} height={3.2} position={info.position} rotation={info.rotation}
                   scale={"1 0 0"} segments-height={32} segments-width={32}
                   material={"transparent: true; opacity: 0.4; color: #00fffb; side: double;"} visible={true}>
                <Text className={"about-us-plane-text"} value={info.title} side={"double"} z-offset={-0.01} align={"center"} font={"dejavu"}
                      width={2} height={3.2} position={"0 1.3 0"} letter-spacing={"5"} wrap-count={"25"}
                      visible={true} scale={"1 1 1"}
                />
                <Text className={"about-us-plane-text"} value={info.description}
                      side={"double"} z-offset={-0.01} align={"center"} font={"dejavu"}
                      width={1.8} height={3.2}
                      visible={true} scale={"1 1 1"}
                />
            </Plane>
        );

        return(
            <Entity id={"about-us"}>
            {plane}
            </Entity>
            )}

}

export default AboutUs;