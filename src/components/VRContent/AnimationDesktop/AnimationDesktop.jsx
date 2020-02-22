import React from "react";
import {Box, Cylinder, Sphere, Plane, Sky, Text, Curvedimage, Camera, Cursor, Image, Ring, Event,Circle} from "react-aframe-ar";
import {Entity, Scene} from "aframe-react";
import "./../button";
import DesktopMenu from "./DesktopMenu";
import sofa from "./../../../media/models/Koltuk.obj";
import chair from "./../../../media/models/modernchairj.obj";

function* generator(){
    yield {
        step: 0,
        text: "caroline",
    };
    yield {
        step: 1,
        text: "if you wanna see next animation, click next button",
    };
    yield {
        step: 2,
        text: "if you wanna see menu, click menu button"
    };
    return 2;
}

function* animationSteps(){
    yield 1;
    yield 2;
    return 0;
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
        return <Sphere radius={40} material={"color: black; side: double;"}>
            <Entity nothing={"power: 50;"} position={"1 6 -2"} animation={"property: nothing.power; from: 500; to: 50; easing: easeOutQuad; dur: 10000;"}
            animation__rotation={"property: rotation; to: 360 360 360; dur: 15000; loop: true;"}/>
            <Text value={props.stepTextAnimation.text} font={"sourcecodepro"} width={1} height={2} wrap-count={25} color={'white'} position={"1 6 -1"} align={"center"} opacity={0}
            animation={"property: opacity; to: 1; loop: 6; dur: 5000; dir: alternate; easing: linear; delay: 5000;"}
                />

                {/*NEXT BUTTON*/}
            <Plane width={1} height={0.3} position={"2 5 -1"} material={"color: white; opacity: 0.1"}
                   events={{
                       "click": ()=>props.nextStep(animationStepGenerator.next().value)
                   }}
            >
                <Text value={"next"} color={"white"} width={1.5} height={0.3} align={"center"} wrap-count={20}
                       alphaTest={20}
                     />
            </Plane>
                {/*END NEXT BUTTON*/}
                {/*MENU BUTTON*/}
            <Plane width={1} height={0.3} position={"0 5 -1"} material={"color: white; opacity: 0.1"}
            events={{
                "click": ()=>props.menuToggle()
            }}>
                <Text value={"menu"} color={"white"} width={1.5} height={0.3} align={"center"} wrap-count={20}
                      alphaTest={20}
                />
            </Plane>
                {/*END MENU BUTTON*/}

                {/*FIRST STEP OF ANIMATION*/}
            <a-entity obj-model={"obj: url(" + sofa + ");"} material={"color: white; wireframe: true; opacity: 0;"} position={"2 4 3"} rotation={"0 -150 0"}
                      scale={"1.3 1.3 1.3"}
                animation={(props.animation_step === 1) ? "property: material.opacity; from: 0; to: 1; dur: 3000; easing: linear; delay: 2000;" : ""}
            >
                <Text value={"it's our first design of sofa. It's our first sketch with all details. our start price was 200$."} color={"white"} align="center" width={"2"} height={0.8} position={"0 1.5 0"} wrap-count={25}/>
            </a-entity>
            {/*END STEP OF ANIMATION*/}


           <DesktopMenu open={props.menu_open}/>
        </Sphere>
};

export default AnimationDesktop;


