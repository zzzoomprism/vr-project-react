import React from 'react';
import AFRAME from "aframe";
import Assets from "aframe-react-assets";
import {Entity, Box, Cylinder, Sphere, Plane, Sky, Text, Scene, Curvedimage, Camera, Cursor, Image, Ring, Event,Circle} from "react-aframe-ar";
import {Light, Video, Videosphere} from "react-aframe-ar/src";

class Contacts extends React.Component{
    render() {
        return(
            <Entity>
                <Plane className={"contacts-plane"} width={4.5} height={3} position={"-1 3 -3"} rotation={"-15 180 0"}
                       scale={"1 1 1"} segments-height={0} segments-width={0}
                       material={"transparent: true; opacity: 0.0; color: #00fffb; side: double; wireframe: true; emissive: #00fffb;"} visible={true}>
                    <Plane className={"contacts-second-plane"} width={4.5} height={3}
                           scale={"1 1 1"}
                           material={"transparent: true; opacity: 0.4; color: #00fffb; side: double;"} visible={true} >
                        <Image src={"https://images.pexels.com/photos/2120114/pexels-photo-2120114.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"}
                        width={"1.7"} height={"2.2"} geometry={"segments-height: 30; segments-width: 30;"} wireframe={"true"} position={"-1.2 0 0"}/>

                        <Text className={"contacts-title"} value={"FRONT_END DEVELOPMENT"} side={"double"} z-offset={-0.01} font={"dejavu"}
                              width={3.2} height={2} position={"0 1. 0"} letter-spacing={"5"} wrap-count={"25"}
                              visible={true} scale={"1 1 1"} opacity={"1.0"} alpha-test={5.5}
                        />
                        <Text className={"contacts-description"} value={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
                              side={"double"} z-offset={-0.01} font={"dejavu"} position={"0 -0.3 0"}
                              width={2} height={3} alpha-test={5.5}
                              visible={true} scale={"1 1 1"} opacity={"1.0"}
                        />
                    </Plane>
                </Plane>
            </Entity>
        )
    }
}

export default Contacts;