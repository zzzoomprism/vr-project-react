import React from "react";
import {Box, Plane, Sphere} from "react-aframe-ar";
import {Entity, Scene} from "aframe-react";
import ChooseColor from "./../../../container/VRContent/ChooseColor";


const Floor = (props) => {
    return (
        <Entity>
            <Plane width={"30"} height={"40"} position={"0 -9.9 0"} rotation={"-90 0 0"}
                   src={"https://images.pexels.com/photos/235994/pexels-photo-235994.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}
                   repeat={"4 1"} roughness={1}
                   material={"opacity: 0.8; color: " + props.color}
                   events={{
                       'mouseenter': () => {
                           let cursor = document.querySelector('a-cursor');
                           let point = cursor.components.raycaster.intersections[0].point;
                           console.log(cursor.components.raycaster);
                           props.floorMouseEnter(point);
                       },
                       'mouseleave': () => {
                           props.floorMouseLeave();
                       }
                   }} />

            <ChooseColor />
        </Entity>

    )
};

export default Floor;