const initialState = {
    isOpen: false,
};

const reducer = (state = initialState, action) => {
    const newState = {...state};
    switch (action.type) {
        case 'CART_TOGGLE':
            newState.isOpen = !state.isOpen;
            break;

    }

    return newState;
};


export default reducer;