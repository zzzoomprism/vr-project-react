import React from "react";
import {connect} from "react-redux";
import AnimationDesktop from "./../../components/VRContent/AnimationDesktop/AnimationDesktop";

const mapStoreToProps = (store) => {
    return{
        stepTextAnimation: store.vrAnimationDesktop.textStepAnimation,
        menu_open: store.vrAnimationDesktop.menu_open,
        animation_step: store.vrAnimationDesktop.animation_step,
        animation_run: store.vrAnimationDesktop.animation_run,
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        updateText: (stepValue)=>dispatch({type: "UPDATE_TEXT_STEP", value: stepValue}),
        menuToggle: ()=>dispatch({type: "VR_MENU_TOGGLE"}),
        nextStep: (step)=>dispatch({type: "NEXT_STEP_ANIMATION", value: step}),
    }
};

export default connect(mapStoreToProps, mapDispatchToProps)(AnimationDesktop);