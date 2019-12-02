const initialState = {
    open: false,
    sort: "top",
};

const reducer = (state = initialState, action) => {
    const newState = {...state};
    switch (action.type) {
        case 'SORT_BY_CLICK':
            if(window.innerWidth <= 940)
            newState.open = !newState.open;
            break;
        case 'PRICE_UP':
            newState.open = false;
            newState.sort = "price_up";
            break;
        case 'PRICE_DOWN':
            newState.open = false;
            newState.sort = "price_down";
            break;
        case 'TOP':
            newState.open = false;
            newState.sort = "top";
            break;
    }

    return newState;
};

export default reducer;