import React from 'react';
import {Entity, Box, Cylinder, Sphere, Plane, Sky, Text, Scene, Curvedimage, Camera, Cursor, Image, Ring, Event,Circle} from "react-aframe-ar";
import "aframe";
import obj from "./../../media/obj.obj";
import mtl from "./../../media/obj_mtl.mtl";

import "./../model";



class VRContent extends React.Component{

    render() {
        return(
            <Scene>
                <a-assets>
                    <a-asset-item id="obj" src={obj}></a-asset-item>
                    <a-asset-item id="mtl" src={mtl}></a-asset-item>
                </a-assets>
                <Entity modelsofa/>
                <Camera position="1 2 0">
                    <Cursor color="white"/>
                </Camera>


            </Scene>

        );
    }

}

export default VRContent;