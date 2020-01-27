const initialState = {
    menuId: "",
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
    }
    return newState;
};

export default reducer;