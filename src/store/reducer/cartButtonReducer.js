const initialState = {
    buttonId: "",
    active: false,
    count: 0,
    itemsId: [],
};

const reducer = (state = initialState, action) => {
    const newState = {...state};
    switch (action.type) {
        case 'UPDATE_CART_COUNT':
            newState.count++;
            console.log(newState);
            break;
        case 'MOUSE_ENTER_CART_BUTTON':
            newState.buttonId = action.id;
            newState.active = true;
            console.log(newState.button + " ??????? " + newState.active);
            break;

    }
    return newState;
};

export default reducer;