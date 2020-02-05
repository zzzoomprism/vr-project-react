const initialState = {
    menuId: "",
    cartId: "",
    modelId: "",
};

const reducer = (state = initialState, action) => {
    const newState = {...state};
    switch(action.type){
        case "VR_MENU_MOUSE_ENTER":
            newState.menuId = action.menu;
            break;
        case "VR_MENU_MOUSE_LEAVE":
            newState.menuId = "";
            break;

        case "VR_MENU_CLICK":
            window.location = action.address;
            break;

        case "VR_CART_MOUSE_ENTER":
            newState.cartId = action.value;
            break;
        case "VR_CART_MOUSE_LEAVE":
            newState.cartId = "";
            break;

        case "MODEL_MOUSE_ENTER":
            newState.modelId = action.item;
            break;

        case "MODEL_MOUSE_LEAVE":
            newState.modelId = "";
            break;


    }
    return newState;
};

export default reducer;