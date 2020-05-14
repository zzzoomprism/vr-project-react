import sofa from "../../../media/models/Koltuk.obj";
import human from "./../../../media/models/human.obj";
import {Text, Cylinder} from "react-aframe-ar";
import React, {Fragment} from "react";
import srcImg from "./../../../media/2.jpg";
import sofa2 from "./../../../media/models/sofa1.obj";
import sofa3 from "./../../../media/models/sofa.obj";
import human2 from "./../../../media/models/270.obj";
import chairs from "./../../../media/models/DesignChair1.obj";

export function* animationSteps(){
    yield {
        step: 1,
        code: <Cylinder position={"2 4 3"} height={0.3} radius={1.8} material={"color: black;"}>
            <a-entity obj-model={"obj: url(" + chairs + ");"} material={"color: white; wireframe: true; opacity: 0;"}  rotation={"0 150 0"}
                        scale={"0.5 0.5 0.5"} position={"0 0.5 -0.3"}
                        animation={"property: material.opacity; from: 0; to: 1; dur: 3000; easing: linear; "}>
                     <Text value={"It was our first design of chairs. We created only chairs in 2009. And start price was 20$."} color={"white"} align="center" width={"2"} height={0.8} position={"5 3 -3"} wrap-count={25} opacity={0} scale={"4 4 4"} rotation={"0 30 0"}
                  animation={"property: opacity; from: 0; to: 1; dur: 3000; easing: linear;"}/>
                    </a-entity>
        </Cylinder>,
        timer: 3000,
    };
    yield {
        step: 2,
        code: <Cylinder position={"8 -2 8"} radius={3} height={0.3} material={"color: black; "}>
            <a-entity obj-model={"obj: url(" + human + ");"} material={"color: white; wireframe: true; opacity: 0;"}  rotation={"0 -100 0"}
                        scale={"0.05 0.05 0.05"} position={"0 0.3 0"}
                        animation__step2={"property: material.opacity; from: 0; to: 1; dur: 3000; easing: linear;"}>
        </a-entity>
            <Text value={"But once client asked us did the same type of sofa. It was in 2010. "} color={"white"} align="center" width={"6"} height={6} position={"-6 6 4"} wrap-count={10} opacity={1} side={"double"} rotation={"0 -170 0"}
                  animation__step2={"property: opacity; from: 0; to: 1; dur: 3000; easing: linear;"}/>
        </Cylinder>,
        timer: 11000,
    };
    yield {
        step: 3,
        code: <Cylinder position={"8 -2 8"} radius={20} height={0.3} material={"color: black; opacity: 0.4;"}>
            <a-entity obj-model={"obj: url(" + human + ");"} material={"color: white; wireframe: true; opacity: 0;"}  rotation={"0 -100 0"}
                      scale={"0.05 0.05 0.05"} position={"3 0.3 0"}
                      animation__step3={"property: material.opacity; from: 0; to: 1; dur: 3000; easing: linear;"}/>
            <a-entity obj-model={"obj: url(" + sofa + ");"} material={"color: white; wireframe: true; opacity: 0; emissive: white;"}  rotation={"0 -190 0"}
                      scale={"6 6 6"} position={"-8 1.2 2"}
                      animation__step3={"property: material.opacity; from: 0; to: 1; dur: 3000; easing: linear; delay: 2000;"}/>
                      <Text value={"And we did two type of sofa and he loved one and bought. It was in 2014. After a year we had a crisis. We didn't have any ordered. To save our company we started the kickstarter in 2015."} color={"white"} align="center" width={"12"} height={6} position={"-6 8 4"} wrap-count={25} opacity={1} side={"double"} rotation={"0 -190 0"}
                            animation__step3={"property: opacity; from: 0; to: 1; dur: 3000; easing: linear;"}/>
        </Cylinder>,
        timer: 19000,
    };
    yield {
        step: 5,
        code: <Cylinder position={"8 -2 8"} radius={20} height={0.3} material={"color: black;"}>
            <a-entity obj-model={"obj: url(" + human + ");"} material={"color: white; wireframe: true; opacity: 0;"}  rotation={"0 -100 0"}
                      scale={"0.05 0.05 0.05"} position={"3 0.3 0"}
                      animation__step3={"property: material.opacity; from: 0; to: 1; dur: 3000; easing: linear;"}/>
            <a-entity obj-model={"obj: url(" + sofa3 + ");"} material={"color: white; wireframe: true; opacity: 0; emissive: white;"}  rotation={"0 -190 0"}
                      scale={"0.05 0.05 0.05"} position={"-9 3.2 2"}
                      animation__step5={"property: material.opacity; from: 0; to: 1; dur: 3000; easing: linear; delay: 2000;"}/>
            <Text value={"After published our company in this service "} color={"white"} align="center" width={"6"} height={6} position={"-6 8 4"} wrap-count={10} opacity={1} side={"double"} rotation={"0 -190 0"}
                  animation__step4={"property: opacity; from: 0; to: 1; dur: 3000; easing: linear;"}/>
        </Cylinder>,
        timer: 27000,
    };
    yield {
        step: 6,
        code: <Cylinder position={"8 -2 8"} radius={20} height={0.3} material={"color: black;"}>
            <a-entity obj-model={"obj: url(" + human2 + ");"} material={"color: white; wireframe: true; opacity: 0;"}  rotation={"-90 0 0"}
                      scale={"2 2 2"} position={"-8 3 -4.5"}
                      animation__step6={"property: material.opacity; from: 0; to: 1; dur: 3000; easing: linear;"}/>
            <a-entity obj-model={"obj: url(" + sofa + ");"} material={"color: white; wireframe: true; opacity: 0;"}  rotation={"0 -190 0"}
                      scale={"6 6 6"} position={"-8 1.2 2"}
                      animation__step3={"property: material.opacity; from: 0; to: 1; dur: 3000; easing: linear; delay: 4000;"}/>
            <Text value={"ANOTHER SMTH"} color={"white"} align="center" width={"10"} height={6} position={"-6 8 4"} wrap-count={25} opacity={1} side={"double"} rotation={"0 -190 0"}
                  animation__step6={"property: opacity; from: 0; to: 1; dur: 3000; easing: linear;"}/>
        </Cylinder>,
        timer: 35000,
    };
    yield {
        step: 7,
        code: <Cylinder position={"8 -2 8"} radius={20} height={0.3} material={"color: black;"}>
            <a-entity obj-model={"obj: url(" + human2 + ");"} material={"color: white; wireframe: true; opacity: 0;"}  rotation={"-90 0 0"}
                      scale={"2 2 2"} position={"-8 3 -4.5"}
                      animation__step6={"property: material.opacity; from: 0; to: 1; dur: 3000; easing: linear;"}/>
            <a-entity obj-model={"obj: url(" + sofa + ");"} material={"wireframe: true; opacity: 0; "}  rotation={"0 -190 0"}
                      scale={"6 6 6"} position={"-8 1.5 2"}
                      animation__step7={"property: material.opacity; from: 0; to: 1; dur: 3000; easing: linear; delay: 4000;"}/>
            <Text value={"And we did this."} color={"white"} align="center" width={"10"} height={6} position={"-6 8 4"} wrap-count={25} opacity={1} side={"double"} rotation={"0 -190 0"}
                  animation__step7={"property: opacity; from: 0; to: 1; dur: 3000; easing: linear;"}/>
        </Cylinder>,
        timer: 43000,
    };
    return 0;
}