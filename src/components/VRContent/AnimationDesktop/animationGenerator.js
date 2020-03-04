import sofa from "../../../media/models/Koltuk.obj";
import {Text, Cylinder} from "react-aframe-ar";
import React from "react";

export function* animationSteps(){
    yield {
        step: 1,
        code: <Cylinder position={"2 4 3"}><a-entity obj-model={"obj: url(" + sofa + ");"} material={"color: white; wireframe: true; opacity: 0;"}  rotation={"0 -150 0"}
                        scale={"1.3 1.3 1.3"}
                        animation={"property: material.opacity; from: 0; to: 1; dur: 3000; easing: linear; delay: 2000;"}
        >
                     <Text value={"it's our first design of sofa. It's our first sketch with all details. our start price was 200$."} color={"white"} align="center" width={"2"} height={0.8} position={"0 1.5 0"} wrap-count={25} opacity={0}
                  animation={"property: opacity; from: 0; to: 1; dur: 3000; easing: linear; delay: 2000; "}/>
                    </a-entity>
        </Cylinder>
    };
    yield {
        step: 2,
        code: <a-entity obj-model={"obj: url(" + sofa + ");"} material={"color: white; wireframe: true; opacity: 0;"} position={"5 4 3"} rotation={"0 -100 0"}
                        scale={"1.3 1.3 1.3"}
                        animation__step2={"property: material.opacity; from: 0; to: 1; dur: 3000; easing: linear;"}
        >
            <Text value={"Step 2"} color={"white"} align="center" width={"2"} height={0.8} position={"0 1.5 0"} wrap-count={25} opacity={0}
                  animation__step2={"property: opacity; from: 0; to: 1; dur: 3000; easing: linear;"}/>
        </a-entity>
    };
    return 0;
}