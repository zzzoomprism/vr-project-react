import React from "react";
import {Box, Cylinder, Sphere, Plane, Sky, Text, Curvedimage, Camera, Cursor, Image, Ring, Event,Circle} from "react-aframe-ar";
import {Entity, Scene} from "aframe-react";
import sofa from "./../../media/models/out.glb";

const VRCollection = (props) => {
    return(
        <Sphere radius={100} material={"color: #333; side: double;" }>
        <Cylinder material={"color: black;"}
                  position={"1 2 -8"} radius={4}
        //animation={"property: position; to: 1 2 -5; dur: 2000; dir: alternate; loop:true;"}
            >
            <Entity gltf-model={sofa}
                    position="0 0.5 1" scale={"0.006 0.006 0.006"} rotation={"0 0 0"}
                    events={{
                        'click': () => {
                            console.log("HELLO");
                        }
                    }}/>
            <a-light type={"spot"} position={"0 25 0"} distance={150} angle={14}
                     penumbra={1} intensity={5} rotation={"-90 0 0"}/>
            <Text value={"best product!"} position={"0 6 0"} rotation={"0 0 0"}
                  wrap-count={13} negate={"false"} side={"double"} letter-spacing={15}
                  color={"white"} opacity={1}
                  animation__position={"property: position; to: 0 6.5 0 ; dur: 2000; loop: true; dir: alternate; delay: " + `${Math.random() * 1000 + " ;"}`}/>
            <Text value={"2000$"} position={"0 4 0"} rotation={"0 0 0"}
                  wrap-count={10} negate={"false"} side={"double"} letter-spacing={15}
                  color={"coral"}>
                <a-circle radius={"0.8"} position={"-2 0.3 0"}
                          material={"color: white; side: double; emissive: white;"}>
                    <Image src={"https://image.flaticon.com/icons/svg/1374/1374128.svg"} position={"0 0 0.01"}
                           width={0.6} height={0.6}
                           animation__mouseenter="property: components.material.material.color; type: color; to: blue; startEvents: mouseenter; dur: 500"
                          />
                </a-circle>
            </Text>
        </Cylinder>

            <Cylinder material={"color: black;"}
                      position={"-9 2 -8"} radius={4}
                //animation={"property: position; to: 1 2 -5; dur: 2000; dir: alternate; loop:true;"}
            >
                <Entity gltf-model={sofa}
                        position="0 0.5 1" scale={"0.006 0.006 0.006"} rotation={"0 0 0"}
                        events={{
                            'click': () => {
                                console.log("HELLO");
                            }
                        }}/>
                <a-light type={"spot"} position={"0 25 0"} distance={150} angle={14}
                         penumbra={1} intensity={5} rotation={"-90 0 0"}/>
                <Text value={"best product!"} position={"0 6 0"} rotation={"0 0 0"}
                      wrap-count={13} negate={"false"} side={"double"} letter-spacing={15}
                      color={"white"} opacity={1}
                      animation__position={"property: position; to: 0 6.5 0 ; dur: 2000; loop: true; dir: alternate; delay: " + `${Math.random() * 1000 + " ;"}`}/>
                <Text value={"2000$"} position={"0 4 0"} rotation={"0 0 0"}
                      wrap-count={10} negate={"false"} side={"double"} letter-spacing={15}
                      color={"coral"}>
                    <a-circle radius={"0.8"} position={"-2 0.3 0"}
                              material={"color: white; side: double; emissive: white;"}>
                        <Image src={"https://image.flaticon.com/icons/svg/1374/1374128.svg"} position={"0 0 0.01"}
                               width={0.6} height={0.6}
                               animation__mouseenter="property: components.material.material.color; type: color; to: blue; startEvents: mouseenter; dur: 500"
                        />
                    </a-circle>
                </Text>
            </Cylinder>
        </Sphere>
    )
};

export default VRCollection;