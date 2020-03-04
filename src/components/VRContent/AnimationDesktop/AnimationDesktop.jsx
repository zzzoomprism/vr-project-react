import React, {Fragment} from "react";
import {Box, Cylinder, Sphere, Plane, Sky, Text, Curvedimage, Camera, Cursor, Image, Ring, Event,Circle} from "react-aframe-ar";
import {Entity, Scene} from "aframe-react";
import "./../button";
import DesktopMenu from "./DesktopMenu";
import {animationSteps} from "./animationGenerator";
import "./stars";

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
    return 2;
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
                            animation={"property: rotation; to: 0 360 0; loop: true; easing: linear; dur: 100000;"}
                            animation__scale={"property: scale; from: 0 0 0; to: 5 5 5; dur: 5000; easing: linear;"}
                            scale={"5 5 5"}/>;
            for(let val of animationStepGenerator) {
                setTimeout(() => props.nextStep(val), val.timer);
                console.log(val);
                }
            }
        else
            stars = "";

        return <Sphere  radius={40} material={"color: black; side: double;"}>
           {stars}
            <Entity nothing={"power: 50;"} position={"1 6 -2"} animation={"property: nothing.power; from: 500; to: 50; easing: easeOutQuad; dur: 10000;"}
            animation__rotation={"property: rotation; to: 360 360 360; dur: 15000; loop: true;"}/>
            <Text value={props.stepTextAnimation.text} font={"sourcecodepro"} width={1} height={2} wrap-count={25} color={'white'} position={"1 6 -1"} align={"center"} opacity={0}
            animation={"property: opacity; to: 1; loop: 6; dur: 5000; dir: alternate; easing: linear; delay: 5000;"}
                  animation__position={"property: position; to: 1 6 -0.7; dur: 5000; easing: linear; delay: 5000;"}
                />

                {/*NEXT BUTTON*/}
            <Plane width={1} height={0.3} position={"2 5 -1"} material={"color: white; opacity: 0.1"}
                   events={{
                       "click": ()=>props.nextStep(animationStepGenerator.next().value)
                   }} >
                <Text value={"next"} color={"white"} width={1.5} height={0.3} align={"center"} wrap-count={20}
                       alphaTest={20}
                     />
            </Plane>
                {/*END NEXT BUTTON*/}


            {/*    /!*MENU BUTTON*!/*/}
            {/*<Plane width={1} height={0.3} position={"0 5 -1"} material={"color: white; opacity: 0.1"}*/}
            {/*events={{*/}
            {/*    "click": ()=>props.menuToggle()*/}
            {/*}}>*/}
            {/*    <Text value={"menu"} color={"white"} width={1.5} height={0.3} align={"center"} wrap-count={20}*/}
            {/*          alphaTest={20}*/}
            {/*    />*/}
            {/*</Plane>*/}
            {/*    /!*END MENU BUTTON*!/*/}


             {/*ANIMATION STEPS*/}
            {props.animation_step.code}
            {/*END ANIMATION STEPS*/}

           <DesktopMenu open={props.menu_open}/>
        </Sphere>
};

export default AnimationDesktop;


