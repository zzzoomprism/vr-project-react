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
};

const reducer = (state = initialState, action) => {
    const newState = {...state};
    switch(action.type){
        case 'UPDATE_POSITION':
            newState.position.x = action.value.x;
            newState.position.z = action.value.z;
            break;
        case 'FLOOR_MOUSE_ENTER':
            newState.mouseEnterPosition.visible = true;
            newState.mouseEnterPosition.clr1_position ={x: action.points.x + 3, y : -10, z: action.points.z};
            if(action.points.z > 9)
                newState.mouseEnterPosition.rotation = "0 0 0";
            else
                newState.mouseEnterPosition.rotation = "0 90 0";
            console.log(newState.mouseEnterPosition.position);
            break;
        case 'FLOOR_MOUSE_LEAVE':
            newState.mouseEnterPosition.visible = false;
            break;

        case 'COLOR_MOUSE_ENTER':
            newState.mouseEnterPosition.color = action.color;
            break;
    }

    return newState;
};

export default reducer;