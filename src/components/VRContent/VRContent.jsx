import React from 'react';
import {Box, Cylinder, Sphere, Plane, Sky, Text, Curvedimage, Camera, Cursor, Image, Ring, Event,Circle} from "react-aframe-ar";
import {Entity, Scene} from "aframe-react";
import info from "./../../info";
import RoomContent from "./../../container/VRContent/RoomContent";
class VRContent extends React.Component{
    constructor(props){
        super(props);
        this.cameraRef = React.createRef();
    }
    render() {
        const models = info.map((el) =>
            <a-asset-item
                key={el.id + "asset-item"}
                id={el.id}
                src={el.model}>
            </a-asset-item>
        );
        const viewsModel = info.map((el) =>
            <Entity key={el.id}
                      gltf-model={"#" + el.id}
                      position={el.position} scale={el.scale} visible={el.visible}
                      animation={"property: position; to: " + this.props.position.x + " 0 " + this.props.position.z + "; dur: 2000; " }
                      events={{
                          'click': () => {
                              console.log("HELO");
                          }
                      }}
                      >
            </Entity>
        );
        return (
            <Scene>
                <a-assets>
                    {models}
                </a-assets>
                {viewsModel}
                <Camera position="1 6 0" >
                    <Cursor color="white" ref={this.cameraRef}/>
                </Camera>

            </Scene>
        );
    }
}

export default VRContent;