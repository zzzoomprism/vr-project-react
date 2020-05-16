import React, {Fragment, useState, useEffect} from "react";
import {Cylinder, Plane, Text} from "react-aframe-ar";
import {Entity} from "aframe-react";
import VRCartButton from "../../container/VRContent/VRCartButton";
import VRCart from "./components/VRCart";
import VRDescription from "./components/VRDescription.";
import * as api from "../../info";


const VRFurniture = (props) => {
    let [item, setItem] = useState({});
    useEffect(()=>{
        api.get(props.match.params.id).then((result)=>{
            setItem(result);
        });
    }, [props.data]);
    return        <Fragment>
        <Cylinder material={"color: black;"}
                  position={"1 2 -8"} radius={4}>
            <Entity gltf-model={item.model}
                    position="0 0.5 0" scale={item.scale} rotation={"0 0 0"}/>
            <a-light type={"spot"} position={"0 25 0"} distance={150} angle={14}
                     penumbra={1} intensity={5} rotation={"-90 0 0"}/>
            <Text value={item.name} position={"0 8 0"} rotation={"0 0 0"}
                  wrap-count={13} negate={"false"} side={"double"} letter-spacing={15}
                  color={"white"} opacity={1}
                  animation__position={"property: position; to: 0 7.5 0 ; dur: 2000; loop: true; dir: alternate; delay: " + `${Math.random() * 1000 + " ;"}`}/>
            <VRCartButton price={item.price} position={"0 6 0"}
                          rotation={"0 0 0"} obj={item}/>
        </Cylinder>
        <Plane width={40} height={40} rotation={"-90 0 0"} position={"0 1 0"} material={"color: black; emissive: black; side: double"}/>
        <VRCart count={props.products_count} position={"-15 10 -0"} rotation={"0 -90 0"}/>
        <VRDescription description={item.description}/>

        <Plane width={10} height={4} material={"color: black; side: double; "}  position={"-10 15 -10"} rotation={"0 45 0"}
            events={{
                'click': ()=>{
                    window.location = "#/vr/vr-menu"
                }
            }}
        >
            <Text value={"menu"} width={8} height={4} wrap-count={10} side={"double"} color={"white"} position={"0 0 0.01"}
                  letter-spacing={15} negate={"false"} align={"center"}/>
        </Plane>
    </Fragment>
};


export default VRFurniture;