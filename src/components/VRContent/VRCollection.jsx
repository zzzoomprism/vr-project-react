import React from "react";
import {Box, Cylinder, Sphere, Plane, Sky, Text, Curvedimage, Camera, Cursor, Image, Ring, Event,Circle} from "react-aframe-ar";
import {Entity, Scene} from "aframe-react";
import sofa from "./../../media/models/out.glb";
import {modelLoading} from "./../../info";
import "aframe-particle-system-component";
import "./button";

const VRCollection = (props) => {
    const info = modelLoading();

    return(
        <Sphere radius={100} material={"color: #333; side: double;" }>
            {/*<a-entity position="0 2.25 -15" particle-system="preset: dust; particleCount: 1000"/>*/}
            <Cylinder material={"color: black;"}
                      position={"1 2 -8"} radius={4}
                //animation={"property: position; to: 1 2 -5; dur: 2000; dir: alternate; loop:true;"}
            >
                <Entity gltf-model={info[props.item].model}
                        position="0 0.5 0" scale={info[props.item].scale} rotation={"0 0 0"}
                       />
                <a-light type={"spot"} position={"0 25 0"} distance={150} angle={14}
                         penumbra={1} intensity={5} rotation={"-90 0 0"}/>
                <Text value={info[props.item].name} position={"0 6 0"} rotation={"0 0 0"}
                      wrap-count={13} negate={"false"} side={"double"} letter-spacing={15}
                      color={"white"} opacity={1}
                      animation__position={"property: position; to: 0 6.5 0 ; dur: 2000; loop: true; dir: alternate; delay: " + `${Math.random() * 1000 + " ;"}`}/>
                <Text value={info[props.item].price + "$"} position={"0 4 0"} rotation={"0 0 0"}
                      wrap-count={10} negate={"false"} side={"double"} letter-spacing={15}
                      color={"coral"}>
                    <a-circle radius={"0.8"} position={"-2 0.3 0"}
                              material={"color: white; side: double; emissive: white;"}>
                        <Image src={"https://image.flaticon.com/icons/svg/1374/1374128.svg"} position={"0 0 0.01"}
                               width={0.6} height={0.6}
                               animation__mouseenter="property: components.material.material.color; type: color; to: blue; startEvents: mouseenter; dur: 500"
                               events={{
                                   'click': () => {
                                       console.log("clik");
                                       props.updateCartCount(info[props.item]);
                                       window.location = "#/shop/" + info[props.item].id;
                                   }
                               }}
                        />
                    </a-circle>
                </Text>
            </Cylinder>

            <Plane width={2} height={1} position={"6 4 -7"} material={"color: white; emissive: white;"}
                   events={{
                       'click': () => {
                           props.nextFurniture();
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
        </Sphere>
    )
};

export default VRCollection;