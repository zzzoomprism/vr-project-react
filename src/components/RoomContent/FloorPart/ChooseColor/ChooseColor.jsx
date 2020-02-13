import React from "react";
import {Plane} from "react-aframe-ar";
import {Entity} from "aframe-react";
import floorColorMap from "./floor_color";

const ChooseColor = (props) => {
    let height = -9;
    const flColor = floorColorMap.map((el) =>
        <Plane width={"4"} height={"3"} rotation={"0 0 0"} material={"color: " + el.title + " ; side: double;"} position={"0 -20 0"}
               animation={(props.visible === true) ? "property: position; to: -6 " + `${height+=3}` + " -15; dur: 2000;" : "property: position; to: 0 -20 0; dur: 2000;" }
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