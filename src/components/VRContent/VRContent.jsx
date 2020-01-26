import React from 'react';
import {Box, Cylinder, Sphere, Plane, Sky, Text, Curvedimage, Camera, Cursor, Image, Ring, Event,Circle} from "react-aframe-ar";
import {Entity, Scene} from "aframe-react";
import info from "./../../info";
import RoomContent from "./../../container/VRContent/RoomContent";
import {HashRouter, Route, Switch} from "react-router-dom";
import Content from "../../container/ShopContent/Content";
import Furniture from "../ShopContent/Furniture/Furniture";
import MenuContent from "./MenuContent";
class VRContent extends React.Component{
    render() {
        const VRContent = () => (
            <Switch>
                <Route exact path={'/vr'} component={MenuContent}/>
                <Route path={'/vr/vr-room'} component={RoomContent}/>
            </Switch>
        );

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
                      //animation={"property: position; to: " + this.props.position.x + " 0 " + this.props.position.z + "; dur: 2000; " }
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
                    <a-cursor color="white" />
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