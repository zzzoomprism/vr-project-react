const initialState = {
  isReady: false,
  items: [],
};

const reducer = (state = initialState, action) => {
    const newState = {...state};
    switch (action.type) {
        case 'SET_ITEMS':
            if(action.sort === 'price_up'){
                newState.items = action.info.sort(function(a,b){
                    return (a.price - b.price);
                });
            }
            else if (action.sort === 'price_down'){
                newState.items = action.info.sort(function(a,b){
                    return (b.price - a.price);
                });
            }
            else if(action.sort === 'top')
                newState.items = action.info.sort((a,b)=>b.buy_count-a.buy_count);

            newState.isReady = true;
            break;

        }
    return newState;
};

export default reducer;