import React from 'react';
import {Box, Cylinder, Sphere, Plane, Sky, Text, Curvedimage, Camera, Cursor, Image, Ring, Event,Circle} from "react-aframe-ar";
import {Scene} from "aframe-react";
import RoomContent from "./../../container/VRContent/RoomContent";
import {HashRouter, Route, Switch} from "react-router-dom";
import VRMenu from "./../../container/VRContent/VRMenu";
import VRCollection from "./../../container/VRContent/VRCollection";
import AnimationDesktop from "./../../container/VRContent/AnimationDesktop";
import sound from "./../../media/betterday.mp3";

class VRContent extends React.Component{
    render() {
        const VRContent = () => (
            <Switch>
                <Route exact path={'/vr'} component={VRMenu}/>
                <Route path={'/vr/vr-room'} component={RoomContent}/>
                <Route path={'/vr/vr-collection'} component={VRCollection}/>
                <Route path={'/vr/animation'} component={AnimationDesktop}/>
            </Switch>
        );
        return (
            <Scene>
                    <a-assets>
                        <audio id="soundEffect" src={sound} preload="auto"/>
                    </a-assets>
                    <a-entity sound="src: #soundEffect; autoplay: true; loop: true; volume: 8;"/>
                <Camera position="1 6 0">
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