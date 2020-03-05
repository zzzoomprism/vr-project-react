import sofa from "../../../media/models/Koltuk.obj";
import human from "./../../../media/models/human.obj";
import {Text, Cylinder} from "react-aframe-ar";
import React, {Fragment} from "react";
import srcImg from "./../../../media/2.jpg";
import sofa2 from "./../../../media/models/sofa1.obj";
import sofa3 from "./../../../media/models/sofa.obj";
import human2 from "./../../../media/models/270.obj";

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
        code: <Cylinder position={"8 -2 8"} radius={3} height={0.3} material={"color: black; opacity: 0.5;"} light={"type: point;"}>
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
        code: <Cylinder position={"8 -2 8"} radius={20} height={0.3} material={"color: black; opacity: 0.4;"} light={"type: point;"}>
            <a-entity obj-model={"obj: url(" + human + ");"} material={"color: white; wireframe: true; opacity: 0;"}  rotation={"0 -100 0"}
                      scale={"0.05 0.05 0.05"} position={"3 0.3 0"}
                      animation__step3={"property: material.opacity; from: 0; to: 1; dur: 3000; easing: linear;"}/>
            <a-entity obj-model={"obj: url(" + sofa + ");"} material={"color: white; wireframe: true; opacity: 0; emissive: white;"}  rotation={"0 -190 0"}
                      scale={"6 6 6"} position={"-8 1.2 2"}
                      animation__step3={"property: material.opacity; from: 0; to: 1; dur: 3000; easing: linear; delay: 2000;"}/>
                      <Text value={"He was always tell NO for every our work."} color={"white"} align="center" width={"6"} height={6} position={"-6 8 4"} wrap-count={10} opacity={1} side={"double"} rotation={"0 -190 0"}
                            animation__step3={"property: opacity; from: 0; to: 1; dur: 3000; easing: linear;"}/>
        </Cylinder>,
        timer: 24000,
    };
    yield {
        step: 5,
        code: <Cylinder position={"8 -2 8"} radius={20} height={0.3} material={"color: black;"} light={"type: point;"}>
            <a-entity obj-model={"obj: url(" + human + ");"} material={"color: white; wireframe: true; opacity: 0;"}  rotation={"0 -100 0"}
                      scale={"0.05 0.05 0.05"} position={"3 0.3 0"}
                      animation__step3={"property: material.opacity; from: 0; to: 1; dur: 3000; easing: linear;"}/>
            <a-entity obj-model={"obj: url(" + sofa3 + ");"} material={"color: white; wireframe: true; opacity: 0; emissive: white;"}  rotation={"0 -190 0"}
                      scale={"0.05 0.05 0.05"} position={"-9 3.2 2"}
                      animation__step5={"property: material.opacity; from: 0; to: 1; dur: 3000; easing: linear; delay: 2000;"}/>
            <Text value={"NO."} color={"white"} align="center" width={"6"} height={6} position={"-6 8 4"} wrap-count={10} opacity={1} side={"double"} rotation={"0 -190 0"}
                  animation__step4={"property: opacity; from: 0; to: 1; dur: 3000; easing: linear;"}/>
        </Cylinder>,
        timer: 40000,
    };
    yield {
        step: 6,
        code: <Cylinder position={"8 -2 8"} radius={20} height={0.3} material={"color: black;"} light={"type: point;"}>
            <a-entity obj-model={"obj: url(" + human2 + ");"} material={"color: white; wireframe: true; opacity: 0;"}  rotation={"-90 0 0"}
                      scale={"2 2 2"} position={"-8 3 -4.5"}
                      animation__step6={"property: material.opacity; from: 0; to: 1; dur: 3000; easing: linear;"}/>
            <a-entity obj-model={"obj: url(" + sofa + ");"} material={"color: white; wireframe: true; opacity: 0;"}  rotation={"0 -190 0"}
                      scale={"6 6 6"} position={"-8 1.2 2"}
                      animation__step3={"property: material.opacity; from: 0; to: 1; dur: 3000; easing: linear; delay: 4000;"}/>
            <Text value={"One day, the another man came to us with his dream. He has a daughter Caroline, which was very talent and young. She would like to has not ordinary, exlusive room."} color={"white"} align="center" width={"10"} height={6} position={"-6 8 4"} wrap-count={25} opacity={1} side={"double"} rotation={"0 -190 0"}
                  animation__step6={"property: opacity; from: 0; to: 1; dur: 3000; easing: linear;"}/>
        </Cylinder>,
        timer: 50000,
    };
    yield {
        step: 7,
        code: <Cylinder position={"8 -2 8"} radius={20} height={0.3} material={"color: black;"} light={"type: point;"}>
            <a-entity obj-model={"obj: url(" + human2 + ");"} material={"color: white; wireframe: true; opacity: 0;"}  rotation={"-90 0 0"}
                      scale={"2 2 2"} position={"-8 3 -4.5"}
                      animation__step6={"property: material.opacity; from: 0; to: 1; dur: 3000; easing: linear;"}/>
            <a-entity obj-model={"obj: url(" + sofa + ");"} material={"color: #00ffff; wireframe: false; opacity: 0; emissive: black;"}  rotation={"0 -190 0"}
                      scale={"6 6 6"} position={"-8 1.5 2"}
                      animation__step7={"property: material.opacity; from: 0; to: 1; dur: 3000; easing: linear; delay: 4000;"}/>
            <Text value={"And we did this."} color={"white"} align="center" width={"10"} height={6} position={"-6 8 4"} wrap-count={25} opacity={1} side={"double"} rotation={"0 -190 0"}
                  animation__step7={"property: opacity; from: 0; to: 1; dur: 3000; easing: linear;"}/>
        </Cylinder>,
        timer: 60000,
    };
    return 0;
}