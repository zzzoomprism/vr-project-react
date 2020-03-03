const initialState = {
    count: 0,
    cartItems: [],
    done: false,
    onLoad: false,
};

const reducer = (state = initialState, action) => {
    const newState = {...state};
    switch (action.type) {

        case 'FETCH_SUCCEEDED':
            newState.count++;
            newState.cartItems.push(action.value);
            break;
        case 'FETCH_ERROR':
            console.log(action.error);
            break;
        case 'CART_LOAD':
            newState.done = false;
            console.log("CART_LOAD");
            break;
        case 'UPDATE_CART_COUNT_ASYNC':
            newState.count++;
            newState.cartItems.push(action.item);
            break;
        case 'CART_DONE':
            newState.done = true;
            break;
    }
    return newState;
};

export default reducer;