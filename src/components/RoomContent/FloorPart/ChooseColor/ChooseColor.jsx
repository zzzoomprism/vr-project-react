import React from "react";
import {Plane} from "react-aframe-ar";
import {Entity} from "aframe-react";
import floorColorMap from "./floor_color";

const ChooseColor = (props) => {
    const flColor = floorColorMap.map((el) =>
        <Plane width={"4"} height={"3"} rotation={props.rotation} material={"color: " + el.title + " ; side: double;"} position={"0 -20 0"}
               animation={(props.visible === true) ? "property: position; to: " + `${props.clr1_position.x + " " + (props.clr1_position.y+=3.5) + " " + props.clr1_position.z}` + "; dur: 2000;" : "" }
               events={{
                   'mouseenter': () => {
                       props.colorMouseEnter(el.rgb);
                   },
               }}
        />
    );

    return (
        <Entity>
            {flColor}
        </Entity>
    )
};

export default ChooseColor;