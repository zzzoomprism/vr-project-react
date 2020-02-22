const initialState = {
    textStepAnimation: {
        text: "",
        step: 0,
    },
    menu_open: false,
    animation_step: 0
};

const reducer = (state = initialState, action) => {
    const newState = {...state};
    switch(action.type){
        case "UPDATE_TEXT_STEP":
            newState.textStepAnimation = action.value;
            console.log(newState.textStepAnimation);
            break;
        case "VR_MENU_TOGGLE":
            newState.menu_open = !state.menu_open;
            console.log(newState.menu_open);
            break;
        case "NEXT_STEP_ANIMATION":
            newState.animation_step = action.value;
            console.log(newState.animation_step);
            break;
    }

    return newState;
};

export default reducer;