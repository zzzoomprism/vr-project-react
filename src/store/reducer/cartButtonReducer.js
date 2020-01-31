const initialState = {
    buttonId: "",
    active: false,
    count: 0,
    cartItems: [],
};

const reducer = (state = initialState, action) => {
    const newState = {...state};
    switch (action.type) {
        case 'UPDATE_CART_COUNT':
            newState.count++;
            newState.cartItems.push(action.item);
            console.log(action.item);
            break;
        case 'MOUSE_ENTER_CART_BUTTON':
            newState.buttonId = action.id;
            newState.active = true;
            break;
        case 'MOUSE_LEAVE_CART_BUTTON':
            newState.buttonId = "";
            newState.active = false;
            break;

    }
    return newState;
};

export default reducer;