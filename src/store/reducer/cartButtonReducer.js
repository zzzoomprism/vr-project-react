const initialState = {
    count: 0,
    cartItems: [],
    onLoad: false,
    alert: {
        show: false,
        message: "",
    },
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
        case 'SHOW_ALERT':
            newState.alert.show = true;
            newState.alert.message = "Product is adding to cart successfully!";
            break;
        case 'HIDE_ALERT':
            newState.alert.show = false;
            newState.alert.message = "";
            break;
        case 'FETCH_ERROR':
            console.log(action.error);
            break;
        case 'DELETE_ITEM':
            newState.cartItems = state.cartItems.filter(item => item !== action.value);
            newState.count--;
            break;
    }
    return newState;
};

export default reducer;