import React from "react";
import {Box, Image, Text} from "react-aframe-ar";

const VRCart = (props) => {
    return  <a-circle radius={3} material={"color: white; side: double; emissive: white;"} position={props.position} segments={128}
    rotation={props.rotation}>
        <Image src={"https://image.flaticon.com/icons/svg/1374/1374128.svg"} position={"0 0 -0.01"}
               width={1.5} height={1.5} rotation={"0 180 0"}
               animation__mouseenter="property: components.material.material.color; type: color; to: blue; startEvents: mouseenter; dur: 500"
               events={{
                   'click': () => {
                       window.location="#/shop/checkout";
                   }
               }}/>
        <a-circle position={"2 -2 -0.02"}
                  radius={1} material={"side: double; color:black; emissive: black;"}>
            <Text width={3} height={3} align={"center"} value={props.count} rotation={"0 -180 0"}
                  color={"white"} side={"double"} wrap-count={"10"} position={"0 0 -0.04"}/>
        </a-circle>
    </a-circle>
};

export default VRCart;