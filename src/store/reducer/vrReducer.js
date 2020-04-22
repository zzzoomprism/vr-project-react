const initialState = {
    position: {
        x: 0,
        z: 0
    },
    mouseEnterPosition:{
        clr1_position: " ",
        rotation: "90",
        visible: false,
        color: "",
    },
    cursor: false,
};

const reducer = (state = initialState, action) => {
    const newState = {...state};
    switch(action.type){
        case "MOUSE_ENTER_ANIMATION":
            newState.cursor = action.cursor;
            break;

        case "CHANGE_VR_PAGE":
            window.location = action.page;
            break;
    }

    return newState;
};

export default reducer;