const initialState = {
  isReady: false,
  items: null,
};

const reducer = (state = initialState, action) => {
    const newState = {...state};
    switch (action.type) {
        case 'SET_ITEMS':
            newState.items = action.payload;
            newState.isReady = true;
    }
    return newState;
};

export default reducer;