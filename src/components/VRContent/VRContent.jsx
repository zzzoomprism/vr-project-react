import React from 'react';
import {Scene} from "aframe-react";
import {HashRouter, Route, Switch} from "react-router-dom";
import VRMenu from "./../../container/VRContent/VRMenu";
import VRCollection from "./../../container/VRContent/VRCollection";
import AnimationDesktop from "./../../container/VRContent/AnimationDesktop";
import sound from "./../../media/betterday.mp3";
import Cursor from "./../../container/VRContent/Cursor";

const VRContent = (props) => {
        const VRContent = () => (
            <Switch>
                <Route exact path={'/vr/vr-menu'} component={VRMenu}/>
                <Route path={'/vr/vr-collection'} component={VRCollection}/>
                <Route path={'/vr'} component={AnimationDesktop}/>
            </Switch>
        );

        return (
            <Scene>
                    <a-assets>
                        <audio id="soundEffect" src={sound} preload="auto"/>
                    </a-assets>
                    <a-entity sound="src: #soundEffect; autoplay: true; loop: true; volume: 6;"/>
                <Cursor/>
                <HashRouter>
                    <Switch>
                        <VRContent />
                    </Switch>
                </HashRouter>
            </Scene>
        );
};

export default VRContent;