import React from 'react';
import {Box, Cylinder, Sphere, Plane, Sky, Text, Curvedimage, Camera, Cursor, Image, Ring, Event,Circle} from "react-aframe-ar";
import {Entity, Scene} from "aframe-react";
import info from "./../../info";
import RoomContent from "./../../container/VRContent/RoomContent";
import {HashRouter, Route, Switch} from "react-router-dom";
import Content from "../../container/ShopContent/Content";
import Furniture from "../ShopContent/Furniture/Furniture";
import MenuContent from "./../../container/VRContent/MenuContent";
class VRContent extends React.Component{
    render() {
        const VRContent = () => (
            <Switch>
                <Route exact path={'/vr'} component={MenuContent}/>
                <Route path={'/vr/vr-room'} component={RoomContent}/>
            </Switch>
        );


        return (
            <Scene>

                <Camera position="1 6 0" >
                    <a-cursor color="white" material={"opacity: 1;"}/>
                </Camera>
                <HashRouter>
                    <Switch>
                        <VRContent />
                    </Switch>
                </HashRouter>
            </Scene>
        );
    }
}

export default VRContent;