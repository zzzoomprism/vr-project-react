import React from 'react';
import {Box, Cylinder, Sphere, Plane, Sky, Text, Curvedimage, Camera, Cursor, Image, Ring, Event,Circle} from "react-aframe-ar";
import {Entity, Scene} from "aframe-react";
import MenuContent from "./../../container/VRContent/MenuContent";
import products from "./../../info";
import sofa from "./../../media/models/out.glb";

const VRMenu = (props) => {
    const best_products = products.map((el) => {
        if(el.key_word === "top")
        return <Cylinder material={"color: black;"}
                      position={el.position_x + " " + `${el.position_y - 0.3}` + " " + el.position_z} radius={4}>
                <Entity gltf-model={el.model}
                        position="0 0.5 0" scale={el.scale} rotation={el.rotation}
                        events={{
                            'click': () => {
                                console.log("HELLO");
                            }
                        }}/>
                <a-light type={"spot"} position={"0 25 0"} distance={150} angle={14}
                         penumbra={1} intensity={5} rotation={"-90 0 0"}/>
                <Text value={"best product!"} position={"3 6 0"} rotation={el.text_rotation}
                      wrap-count={13} negate={"false"} side={"double"} letter-spacing={15}
                      color={"white"} opacity={1}
                      animation__position={"property: position; to: 3 6.5 0 ; dur: 2000; loop: true; dir: alternate; delay: " + `${Math.random() * 1000 + " ;"}`}/>
                <Text value={el.price + "$"} position={"0 4 0"} rotation={el.text_rotation}
                      wrap-count={10} negate={"false"} side={"double"} letter-spacing={15}
                      color={"coral"}>
                    <a-circle radius={"0.8"} position={"-2 0.3 0"}
                              material={(props.cartId === el.id) ? "color: coral; side: double; emissive: coral;" : "color: white; side: double; emissive: white;"}>
                        <Image src={"https://image.flaticon.com/icons/svg/1374/1374128.svg"} position={"0 0 0.01"}
                               width={0.6} height={0.6}
                               animation__mouseenter="property: components.material.material.color; type: color; to: blue; startEvents: mouseenter; dur: 500"
                               events={{
                                   'mouseenter': () => {
                                       props.vrCartMouseEnter(el.id);
                                   },
                                   'mouseleave': () => {
                                       props.vrCartMouseLeave();
                                   },
                                   'click': () => {
                                       props.updateCartCount(el);
                                       window.location = "#/shop/" + el.id;
                                   }
                               }}/>
                    </a-circle>
                </Text>
            </Cylinder>
        }
    );
    return (
        <Sphere radius={100} material={"color: #111; side: double;" }>

            <MenuContent/>
            {best_products}
            </Sphere>
    );
};

export default VRMenu;