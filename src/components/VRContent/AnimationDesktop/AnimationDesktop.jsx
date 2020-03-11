import React, {Fragment} from "react";
import {Box, Cylinder, Sphere, Plane, Sky, Text, Curvedimage, Camera, Cursor, Image, Ring, Event,Circle} from "react-aframe-ar";
import {Entity, Scene} from "aframe-react";
import "./../button";
import DesktopMenu from "./DesktopMenu";
import {animationSteps} from "./animationGenerator";
import "./stars";
import sofa from "../../../media/models/Koltuk.obj";
import sofa3 from "../../../media/models/sofa.obj";
import sofaModern from "./../../../media/models/bed.obj";
import table from "./../../../media/models/table.obj";
import chairs from "./../../../media/models/DesignChair1.obj";

function* generator(){
    yield {
        step: 0,
        text: "caroline.",
    };
    yield {
        step: 1,
        text: "if you wanna see next animation, click next button",
    };
    yield {
        step: 2,
        text: "if you wanna see menu, click menu button"
    };
    yield {
        step: 3,
        text: "caroline."
    };
}



//????? _ BIG QUESTION!
let step = generator();
let seconds = -5000;
////////////////////////

let animationStepGenerator = animationSteps();



const AnimationDesktop = (props) => {
        for(let val of step){
            setTimeout(()=>{props.updateText(val)}, seconds+=10100);
        }
        let stars;
        if(props.animation_run) {
            stars = <Entity stars={"radius: 5"} position={"-1 -2 0"}
                            animation={"property: rotation; to: 360 360 360; loop: true; easing: linear; dur: 100000;"}
                            animation__scale={"property: scale; from: 0 0 0; to: 5 5 5; dur: 5000; easing: linear;"}
                            scale={"5 5 5"}/>;
            for(let val of animationStepGenerator) {
                setTimeout(() => props.nextStep(val), val.timer);
                console.log(val);
                }
            }
        else
            stars = "";

        return <Sphere  radius={80} material={"color: black; side: double;"}>
           {stars}
            <Entity nothing={"power: 50;"} position={"1 6 -2"}
                    // animation={"property: nothing.power; from: 500; to: 50; easing: easeOutQuad; dur: 10000;"}
            animation__rotation={"property: rotation; to: 0 360 0; dur: 15000; loop: true;"}
            light={"type: point; distance: 80; "}/>
            <Text value={props.stepTextAnimation.text} font={"sourcecodepro"} width={1} height={2} wrap-count={25} color={'white'} position={"1 6 -1"} align={"center"} opacity={0}
            animation={"property: opacity; to: 1; loop: 8; dur: 5000; dir: alternate; easing: linear; delay: 5000;"}
                  animation__position={"property: position; to: 1 6 -0.7; dur: 5000; easing: linear; delay: 5000;"}
                />

                {/*NEXT BUTTON*/}
            <Plane width={1} height={0.3} position={"2 5 -1"} material={"color: white; opacity: 0.1; emissive: white;"}
                   events={{
                       "click": ()=>props.nextStep(animationStepGenerator.next().value)
                   }} >
                <Text value={"next"} color={"white"} width={1.5} height={0.3} align={"center"} wrap-count={20}
                       alphaTest={20}
                     />
            </Plane>
                {/*END NEXT BUTTON*/}


                {/*MENU BUTTON*/}
            <Plane width={1} height={0.3} position={"0 5 -1"} material={"color: white; opacity: 0.1;emissive: white;"}
            events={{
                "click": ()=>props.menuToggle()
            }}>
                <Text value={"menu"} color={"white"} width={1.5} height={0.3} align={"center"} wrap-count={20}
                      alphaTest={20}
                />
            </Plane>
                {/*END MENU BUTTON*/}

            <DesktopMenu open={props.menu_open}/>
             {/*ANIMATION STEPS*/}
            {props.animation_step.code}
            {/*END ANIMATION STEPS*/}





            <a-entity obj-model={"obj: url(" + sofa + ");"} material={"color: white; wireframe: true; opacity: 0;"}  rotation={"0 -190 0"}
                      scale={"4 4 4"} position={"10 14 9"}
                      animation__step3={"property: material.opacity; from: 0; to: 1; dur: 3000; easing: linear; "}
                      animation__rotation={"property: rotation; to: 360 360 360; dur: 50000; easing: linear; delay: 4000; loop: true; dir: reverse;"}/>
            <a-entity obj-model={"obj: url(" + sofa + ");"} material={"color: white; wireframe: true; opacity: 0;"}  rotation={"60 -190 60"}
                      scale={"6 6 6"} position={"-10 15 15"}
                      animation__step3={"property: material.opacity; from: 0; to: 1; dur: 3000; easing: linear; delay: 4000;"}
                      animation__rotation={"property: rotation; to: 360 360 360; dur: 50000; easing: linear; delay: 4000; loop: true; dir: reverse;"}/>
            <a-entity obj-model={"obj: url(" + sofa3 + ");"} material={"color: white; wireframe: true; opacity: 0; "}  rotation={"20 0 40"}
                      scale={"0.05 0.05 0.05"} position={"15 20 -9"}
                      animation__step5={"property: material.opacity; from: 0; to: 1; dur: 3000; easing: linear; delay: 2000;"}
                      animation__rotation={"property: rotation; to: 360 360 360; dur: 50000; easing: linear; delay: 4000; loop: true; dir: reverse;"}/>
            <a-entity obj-model={"obj: url(" + sofa + ");"} material={"color: white; wireframe: true; opacity: 0;"}  rotation={"0 -190 0"}
                      scale={"6 6 6"} position={"-15 11 -10"}
                      animation__step3={"property: material.opacity; from: 0; to: 1; dur: 3000; easing: linear; delay: 4000;"}
                      animation__rotation={"property: rotation; to: 360 360 360; dur: 50000; easing: linear; delay: 4000; loop: true; dir: reverse;"}/>
            <a-entity obj-model={"obj: url(" + sofa3 + ");"} material={"color: white; wireframe: true; opacity: 0; "}  rotation={"20 0 40"}
                      scale={"0.05 0.05 0.05"} position={"1 20 10"}
                      animation__step5={"property: material.opacity; from: 0; to: 1; dur: 3000; easing: linear; delay: 2000;"}
                      animation__rotation={"property: rotation; to: 360 360 360; dur: 50000; easing: linear; delay: 4000; loop: true; dir: reverse;"}/>
            <a-entity obj-model={"obj: url(" + sofa + ");"} material={"color: white; wireframe: true; opacity: 0;"}  rotation={"0 -190 0"}
                      scale={"6 6 6"} position={"-3 25 -5"}
                      animation__step3={"property: material.opacity; from: 0; to: 1; dur: 3000; easing: linear; delay: 4000;"}
                      animation__rotation={"property: rotation; to: 360 360 360; dur: 50000; easing: linear; delay: 4000; loop: true;dir: reverse;"}/>



            <a-entity obj-model={"obj: url(" + sofa + ");"} material={"color: white; wireframe: true; opacity: 0;"}  rotation={"0 -190 0"}
                      scale={"4 4 4"} position={"10 -14 9"}
                      animation__step3={"property: material.opacity; from: 0; to: 1; dur: 3000; easing: linear; "}
                      animation__rotation={"property: rotation; to: 360 360 360; dur: 50000; easing: linear; delay: 4000; loop: true; dir: reverse;"}/>
            <a-entity obj-model={"obj: url(" + table + ");"} material={"color: white; wireframe: true; opacity: 0;"}  rotation={"60 -190 60"}
                      scale={"6 6 6"} position={"-10 -25 15"}
                      animation__step3={"property: material.opacity; from: 0; to: 1; dur: 3000; easing: linear; delay: 4000;"}
                      animation__rotation={"property: rotation; to: 360 360 360; dur: 50000; easing: linear; delay: 4000; loop: true; dir: reverse;"}/>
            <a-entity obj-model={"obj: url(" + chairs + ");"} material={"color: white; wireframe: true; opacity: 0; "}  rotation={"20 0 40"}
                      scale={"3 3 3"} position={"15 -20 -9"}
                      animation__step5={"property: material.opacity; from: 0; to: 1; dur: 3000; easing: linear; delay: 2000;"}
                      animation__rotation={"property: rotation; to: 360 360 360; dur: 50000; easing: linear; delay: 4000; loop: true; dir: reverse;"}/>
            <a-entity obj-model={"obj: url(" + sofaModern + ");"} material={"color: white; wireframe: true; opacity: 0;"}  rotation={"0 -190 0"}
                      scale={"0.05 0.05 0.05"} position={"-15 -18 -10"}
                      animation__step3={"property: material.opacity; from: 0; to: 1; dur: 3000; easing: linear; delay: 4000;"}
                      animation__rotation={"property: rotation; to: 360 360 360; dur: 50000; easing: linear; delay: 4000; loop: true; dir: reverse;"}/>
            <a-entity obj-model={"obj: url(" + sofa3 + ");"} material={"color: white; wireframe: true; opacity: 0; "}  rotation={"20 0 40"}
                      scale={"0.05 0.05 0.05"} position={"1 -20 10"}
                      animation__step5={"property: material.opacity; from: 0; to: 1; dur: 3000; easing: linear; delay: 2000;"}
                      animation__rotation={"property: rotation; to: 360 360 360; dur: 50000; easing: linear; delay: 4000; loop: true; dir: reverse;"}/>
            <a-entity obj-model={"obj: url(" + sofa + ");"} material={"color: white; wireframe: true; opacity: 0;"}  rotation={"0 -190 0"}
                      scale={"6 6 6"} position={"-3 -25 -5"}
                      animation__step3={"property: material.opacity; from: 0; to: 1; dur: 3000; easing: linear; delay: 4000;"}
                      animation__rotation={"property: rotation; to: 360 360 360; dur: 50000; easing: linear; delay: 4000; loop: true;dir: reverse;"}/>

        </Sphere>
};

export default AnimationDesktop;


