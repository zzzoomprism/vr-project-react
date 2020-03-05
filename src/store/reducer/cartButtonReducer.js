const initialState = {
    count: 0,
    cartItems: [],
    onLoad: false,
};

const reducer = (state = initialState, action) => {
    const newState = {...state};
    switch (action.type) {
        case 'CART_ADD_ONLOAD':
            newState.onLoad = true;
            break;
        case 'UPDATE_CART_COUNT':
            newState.count++;
            newState.cartItems.push(action.value);
            newState.onLoad = false;
            break;
        case 'FETCH_ERROR':
            console.log(action.error);
            break;
    }
    return newState;
};

export default reducer;