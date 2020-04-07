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
        // case 'UPDATE_POSITION':
        //     newState.position.x = action.value.x;
        //     newState.position.z = action.value.z;
        //     break;
        // case 'FLOOR_MOUSE_ENTER':
        //     newState.mouseEnterPosition.visible = true;
        //     break;
        // case 'FLOOR_MOUSE_LEAVE':
        //     newState.mouseEnterPosition.visible = false;
        //     break;

        // case 'COLOR_MOUSE_ENTER':
        //     newState.mouseEnterPosition.color = action.color;
        //     newState.mouseEnterPosition.visible = false;
        //     break;

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