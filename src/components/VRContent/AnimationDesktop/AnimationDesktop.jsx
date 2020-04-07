import React, {useState, useEffect} from "react";
import {Box, Cylinder, Sphere, Plane, Sky, Text, Curvedimage, Camera, Cursor, Image, Ring, Event,Circle} from "react-aframe-ar";
import {Entity} from "aframe-react";
import "./../button";
import {animationSteps} from "./animationGenerator";
import "./stars";

import ObjectsModel from "./ObjectsModel";

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


let step = generator();
let seconds = -5000;


let animationStepGenerator = animationSteps();



const AnimationDesktop = (props) => {
    let [loaded, setLoaded] = useState(false);
        useEffect(()=>{
            setTimeout(()=>{
                setLoaded(true)
            }, 3000);
        }, []);
        for(let val of step){
            setTimeout(()=>{props.updateText(val)}, seconds+=10100);
        }

        let [animation, setAnimation] = useState(false);
        useEffect(()=>{
            setAnimation(props.animation_run);
        }, [props.animation_run]);


        if(animation) {
            for(let val of animationStepGenerator) {
                setTimeout(() => props.nextStep(val), val.timer);
                console.log(val);
                }
            }

        return <Sphere  radius={80} material={"color: black; side: double;"}>
            {!loaded && <div className={"vr-loading"}><h3>LOADING...</h3></div>}
            <Entity stars={"radius: 60"} position={"-1 -2 0"}
                    animation={"property: rotation; to: 0 360 0; loop: true; easing: linear; dur: 100000;"}
                    />
            <Entity nothing={"power: 50;"} position={"1 6 -2"}
                    // animation={"property: nothing.power; from: 500; to: 50; easing: easeOutQuad; dur: 10000;"}
            animation__rotation={"property: rotation; to: 0 360 0; dur: 15000; loop: true;"}
            light={"type: point; distance: 80; "}/>
            <Text value={props.stepTextAnimation.text} font={"sourcecodepro"} width={1} height={2} wrap-count={25} color={'white'} position={"1 6 -1"} align={"center"} opacity={0}
            animation={"property: opacity; to: 1; loop: 8; dur: 5000; dir: alternate; easing: linear; delay: 5000;"}
                  animation__position={"property: position; to: 1 6 -0.7; dur: 5000; easing: linear; delay: 5000;"}
                />

                {/*NEXT BUTTON*/}
            {!props.animation_run && <Plane width={1} height={0.3} position={"2 5 -1"} material={"color: white; opacity: 0.1; emissive: white;"}
                                           events={{
                                               "mouseenter": ()=>props.nextStepBtn(true),
                                               "mouseleave": ()=>props.nextStepBtn(null,false),
                                           }} >
                <Text value={"next"} color={"white"} width={1.5} height={0.3} align={"center"} wrap-count={20}
                      alphaTest={20}
                />
            </Plane>}

                {/*END NEXT BUTTON*/}


                {/*MENU BUTTON*/}
            <Plane width={1} height={0.3} position={"0 5 -1"} material={"color: white; opacity: 0.1;emissive: white;"}
            events={{
                "mouseenter": ()=>{props.changePage("#/vr/vr-menu", true)},
                "mouseleave": ()=>{props.changePage("", false)},
            }}>
                <Text value={"menu"} color={"white"} width={1.5} height={0.3} align={"center"} wrap-count={20}
                      alphaTest={20}
                />
            </Plane>
                {/*END MENU BUTTON*/}

             {/*ANIMATION STEPS*/}
            {props.animation_step.code}
            {/*END ANIMATION STEPS*/}




        <ObjectsModel/>

        </Sphere>
};

export default AnimationDesktop;


