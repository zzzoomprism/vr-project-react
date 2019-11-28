const initialState = {
    position: {
        x: 0,
        z: 0
    }
};

const reducer = (state = initialState, action) => {
    const newState = {...state};
    switch(action.type){
        case 'UPDATE_POSITION':
            newState.position.x = action.value.x;
            newState.position.z = action.value.z;
            console.log(newState.position);
            break;
    }

    return newState;
};

export default reducer;