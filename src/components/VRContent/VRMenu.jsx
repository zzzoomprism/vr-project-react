import React from 'react';
import {Box, Cylinder, Sphere, Plane, Sky, Text, Curvedimage, Camera, Cursor, Image, Ring, Event,Circle} from "react-aframe-ar";
import {Entity, Scene} from "aframe-react";
import MenuContent from "./../../container/VRContent/MenuContent";
import sofa from "./../../media/models/out.glb";

const VRMenu = (props) => {
    return (
        <Sphere radius={100} material={"color: #111; side: double;" }>

            <MenuContent/>
            <Cylinder material={"color: black;"} position={"-10 2 2"} radius={4} />
                <Entity gltf-model={sofa}
                    position={"-10 2.3 2"} scale={"0.006 0.006 0.006"} rotation={"0 90 0"}/>
                    <a-light type={"spot"} position={"-10 25 2"}  distance={150} angle={14}
                             penumbra={1} intensity={5} rotation={"-90 0 0"}/>
                                    <Text value={"best product!"} position={"-10 8 4"} rotation={"0 90 0"}
                                          wrap-count={13} negate={"false"} side={"double"} letter-spacing={15}
                                    color={"white"}/>
                                     <Text value={"2500$"} position={"-10 6 3"} rotation={"0 90 0"}
                                         wrap-count={10} negate={"false"} side={"double"} letter-spacing={15}
                                             color={"coral"}/>
            <Cylinder material={"color: black;"} position={"11 2 2"} radius={4} />
                 <Entity gltf-model={sofa}
                    position={"11 2.3 2"} scale={"0.006 0.006 0.006"} rotation={"0 -90 0"}/>
                     <a-light type={"spot"} position={"11 25 2"}  distance={150} angle={14}
                     penumbra={1} intensity={5} rotation={"-90 0 0"}/>
                         <Text value={"best product!"} position={"11 8 0"} rotation={"0 -90 0"}
                          wrap-count={13} negate={"false"} side={"double"} letter-spacing={15}
                             color={"white"}/>
                         <Text value={"2500$"} position={"11 6 1"} rotation={"0 -90 0"}
                              wrap-count={10} negate={"false"} side={"double"} letter-spacing={15}
                              color={"coral"}/>
            <Cylinder material={"color: black;"} position={"-5 2 10"} radius={4} />
                 <Entity gltf-model={sofa}
                    position={"-5 2.3 10"} scale={"0.006 0.006 0.006"} rotation={"0 150 0"}/>
                     <a-light type={"spot"} position={"-5 25 10"}  distance={150} angle={14}
                     penumbra={1} intensity={5} rotation={"-90 0 0"}/>
            <Cylinder material={"color: black;"} position={"6 2 10"} radius={4} />
                    <Entity gltf-model={sofa}
                    position={"6 2.3 10"} scale={"0.006 0.006 0.006"} rotation={"0 -150 0"}/>
                      <a-light type={"spot"} position={"6 25 10"}  distance={150} angle={14}
                     penumbra={1} intensity={5} rotation={"-90 0 0"}/>
            </Sphere>
    );
};

export default VRMenu;