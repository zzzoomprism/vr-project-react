import React, {Fragment} from "react";
import {Box, Cylinder, Sphere, Plane, Sky, Text, Curvedimage, Camera, Cursor, Image, Ring, Event,Circle} from "react-aframe-ar";
import {Entity, Scene} from "aframe-react";
import {modelLoading} from "./../../info";
import "./button";
import VRCart from "./components/VRCart";
import VRCartButton from "../../container/VRContent/VRCartButton";
import VRDescription from "./components/VRDescription.";
import VRFilter from "../../container/VRContent/VRFilter";

const VRCollection = (props) => {
    return(
       <Fragment>
            <Cylinder material={"color: black;"}
                      position={"1 2 -8"} radius={4}>
                <Entity gltf-model={props.info[props.item].model}
                        position="0 0.5 0" scale={props.info[props.item].scale} rotation={"0 0 0"}
                       />
                <a-light type={"spot"} position={"0 25 0"} distance={150} angle={14}
                         penumbra={1} intensity={5} rotation={"-90 0 0"}/>
                <Text value={props.info[props.item].name} position={"0 8 0"} rotation={"0 0 0"}
                      wrap-count={13} negate={"false"} side={"double"} letter-spacing={15}
                      color={"white"} opacity={1}
                      animation__position={"property: position; to: 0 7.5 0 ; dur: 2000; loop: true; dir: alternate; delay: " + `${Math.random() * 1000 + " ;"}`}/>

                <VRCartButton price={props.info[props.item].price} position={"0 6 0"}
                              rotation={"0 0 0"} obj={props.info[props.item]}/>
            </Cylinder>


           <Plane width={40} height={40} rotation={"-90 0 0"} position={"0 1 0"} material={"color: black; emissive: black; side: double"}/>
            <Plane width={2} height={1} position={"6 4 -7"} material={"color: white; emissive: white;"}
                   events={{
                       'click': () => {
                           props.nextFurniture(props.info.length);
                       }
                   }}>
                <Text value={"NEXT"} color={"black"} side={"double"} position={"0 0 0.01"}/>
            </Plane>
            <Plane width={2} height={1} position={"-6 4 -7"} material={"color: white; emissive: white;"}
                   events={{
                       'click': () => {
                           props.prevFurniture();
                       }
                   }}>
                <Text value={"PREV"} color={"black"} side={"double"} position={"0 0 0.01"}/>
            </Plane>

           <VRCart count={props.products_count} position={"-15 10 -0"} rotation={"0 -90 0"}/>
            <VRDescription description={props.info[props.item].description}/>
            <VRFilter/>
       </Fragment>
    )
};

export default VRCollection;