import React, {Fragment} from "react";
import {Plane, Text} from "react-aframe-ar";
import VRCart from "./VRCart";

const VRDescription = (props) => {
    return <Plane width={15} height={20} position={"15 5 -0"} rotation={"0 -90 0"}
    material={"side: double; color: white; emissive: white;"}>
            <Text value={props.description} color={"black"} side={"double"} width={13} height={18} position={"-7 4 0.01"}
            />
        </Plane>
};

export default VRDescription;