const initialState = {
    sofa: {
        top: 0,
        left: 0,
    }
};

const reducer = (state = initialState, action) =>{
    const newState = {...state};
    switch(action.type){
        case 'UPDATE_BLOCKS_POSITION':
            if(action.position.y/100 > 0.5)
                newState.sofa.top = action.position.y/100 * (-1);
            else
                newState.sofa.top = action.position.y/100;

            if(action.position.x/100 > 0.5)
                newState.sofa.left = action.position.x/100 * (-1);
            else
                newState.sofa.left = action.position.x/100;
            break;
    }
    return newState;
};

export default reducer;