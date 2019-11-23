const initialState = {
    open: false
};

const reducer = (state = initialState, action) => {
    const newState = {...state};
    switch(action.type){
        case 'UPDATE_MESSAGE':
            newState.open = !state.open;
            break;
    }
    return newState;
};

export default reducer;