import React from 'react';
import {Box, Cylinder, Sphere, Plane, Sky, Text, Curvedimage, Camera, Cursor, Image, Ring, Event,Circle} from "react-aframe-ar";
import {Entity, Scene} from "aframe-react";
import RoomContent from "./../../container/VRContent/RoomContent";
import {HashRouter, Route, Switch} from "react-router-dom";
import VRMenu from "./../../container/VRContent/VRMenu";
import VRCollection from "./VRCollection";

class VRContent extends React.Component{
    render() {
        const VRContent = () => (
            <Switch>
                <Route exact path={'/vr'} component={VRMenu}/>
                <Route path={'/vr/vr-room'} component={RoomContent}/>
                <Route path={'/vr/vr-collection'} component={VRCollection}/>
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