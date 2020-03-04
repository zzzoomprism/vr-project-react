import sofa from "../../../media/models/Koltuk.obj";
import human from "./../../../media/models/human.obj";
import {Text, Cylinder} from "react-aframe-ar";
import React, {Fragment} from "react";
import srcImg from "./../../../media/2.jpg";

export function* animationSteps(){
    yield {
        step: 1,
        code: <Cylinder position={"2 4 3"} height={0.3} radius={1.8} material={"color: black;"}>
            <a-entity obj-model={"obj: url(" + sofa + ");"} material={"color: white; wireframe: true; opacity: 0;"}  rotation={"0 -150 0"}
                        scale={"1.3 1.3 1.3"} position={"0 0.5 -0.3"}
                        animation={"property: material.opacity; from: 0; to: 1; dur: 3000; easing: linear; delay: 2000;"}>
                     <Text value={"it's our first design of sofa and our first sketch with all details. our start price was 200$."} color={"white"} align="center" width={"2"} height={0.8} position={"0 1.5 0"} wrap-count={25} opacity={0}
                  animation={"property: opacity; from: 0; to: 1; dur: 3000; easing: linear; delay: 2000; "}/>
                    </a-entity>
        </Cylinder>,
        timer: 8000,
    };
    yield {
        step: 2,
        code: <Cylinder position={"8 -2 8"} radius={3} height={0.3} material={"color: black;"}>
            <a-entity obj-model={"obj: url(" + human + ");"} material={"color: white; wireframe: true; opacity: 0;"}  rotation={"0 -100 0"}
                        scale={"0.05 0.05 0.05"} position={"0 0.3 0"}
                        animation__step2={"property: material.opacity; from: 0; to: 1; dur: 3000; easing: linear;"}>
        </a-entity>
            <Text value={"Something happened in that time. Our client was a very pure person, but very reach."} color={"white"} align="center" width={"6"} height={6} position={"-6 6 4"} wrap-count={10} opacity={1} side={"double"} rotation={"0 -170 0"}
                  animation__step2={"property: opacity; from: 0; to: 1; dur: 3000; easing: linear;"}/>
        </Cylinder>,
        timer: 16000,
    };
    yield {
        step: 3,
        code: <Cylinder position={"8 -2 8"} radius={9} height={0.3} material={"color: black;"}>
            <a-entity obj-model={"obj: url(" + human + ");"} material={"color: white; wireframe: true; opacity: 0;"}  rotation={"0 -100 0"}
                      scale={"0.05 0.05 0.05"} position={"0 0.3 0"}
                      animation__step2={"property: material.opacity; from: 0; to: 1; dur: 3000; easing: linear;"}/>
            <a-entity obj-model={"obj: url(" + sofa + ");"} material={"color: white; wireframe: true; opacity: 0;"}  rotation={"0 -150 0"}
                      scale={"1.3 1.3 1.3"} position={"2 4 3"}
                      animation={"property: material.opacity; from: 0; to: 1; dur: 3000; easing: linear; delay: 2000;"}/>
        </Cylinder>,
        timer: 24000,
    };
    return 0;
}