import React from "react";
import {Box, Plane, Sphere, Text} from "react-aframe-ar";
import {Entity, Scene} from "aframe-react";
import ChooseColor from "./../../../container/VRContent/ChooseColor";


const Floor = (props) => {
    return (
        <Entity>
            <Plane width={"30"} height={"40"} position={"0 -9.9 0"} rotation={"-90 0 0"}
                   src={"https://images.pexels.com/photos/235994/pexels-photo-235994.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}
                   repeat={"4 1"} roughness={1}
                   material={"opacity: 0.8; color: " + props.color}
                    >
                <Entity geometry={"primitive: circle; radius: 3;"} material={"color: black; emissive: black; side: double;"} position={"-10 15 0.03"}
                          events={{
                              'mouseenter': () => {
                                  props.floorMouseEnter();
                              },

                          }}>
                    <Text value={"Change Color!"} position={"0 -2 2"} rotation={"90 0 0"} wrap-count={15}/>
                </Entity>
            </Plane>

            <ChooseColor />
        </Entity>

    )
};

export default Floor;