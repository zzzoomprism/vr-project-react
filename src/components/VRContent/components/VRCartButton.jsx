import React, {useState, useEffect} from "react";
import {Image, Text} from "react-aframe-ar";

const VRCartButton = (props) =>{
    let [mouseEnter, setMouseEnter] = useState(false);
    return  <Text value={props.price + "$"} position={props.position} rotation={props.rotation}
                  wrap-count={10} negate={"false"} side={"double"} letter-spacing={15}
                  color={"coral"}>
        <a-circle radius={"0.8"} position={"-2 0.3 0"}
                  material={(mouseEnter) ? "color: coral; side: double; emissive: coral;" : "color: white; side: double; emissive: white;"}>
            <Image src={"https://image.flaticon.com/icons/svg/1374/1374128.svg"} position={"0 0 0.01"}
                   width={0.6} height={0.6}
                   animation__mouseenter="property: components.material.material.color; type: color; to: blue; startEvents: mouseenter; dur: 500"
                   events={{
                       'mouseenter': () => {
                           setMouseEnter(true);
                           props.cursorChange(props.obj, true);

                       },
                       'mouseleave': () => {
                            setMouseEnter(false);
                           props.cursorChange(false)
                       },

                   }}/>
        </a-circle>
    </Text>
};


export default VRCartButton;