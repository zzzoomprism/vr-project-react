const initialState = {
    open: false,
};

const reducer = (state = initialState, action) => {
    const newState = {...state};
    switch (action.type) {
        case 'SORT_BY_CLICK':
            if(window.innerWidth <= 940)
            newState.open = !newState.open;
            break;
    }

    return newState;
};

export default reducer;