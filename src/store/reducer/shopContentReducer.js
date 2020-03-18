import {modelLoading} from "./../../info";

const initialState = {
  isReady: false,
  items: modelLoading(),
    filter_key_words: [],
};

const reducer = (state = initialState, action) => {
    const newState = {...state};
    switch (action.type) {
        case 'SET_ITEMS':
            if(action.sort === 'price_up'){
                newState.items = state.items.sort(function(a,b){
                    return (a.price - b.price);
                });
            }
            else if (action.sort === 'price_down'){
                newState.items = state.items.sort(function(a,b){
                    return (b.price - a.price);
                });
            }
            else if(action.sort === 'top')
                newState.items = state.items.sort((a,b)=>b.buy_count-a.buy_count);

            newState.isReady = true;
            break;

        case 'SET_FILTER':
            if(action.sort)
            newState.filter_key_words.push(action.sort);
            let items = modelLoading();
            if(newState.filter_key_words.length === 0)
                newState.items = items;
            else
            newState.items = items.filter((item)=>{
                let words = item.key_word.split(' ');
                return newState.filter_key_words.find((word)=>words.includes(word));
            });
            break;
        case 'DELETE_FILTER':
            let index = state.filter_key_words.indexOf(action.value);
            newState.filter_key_words.splice(index, 1);
            break;
        }
    return newState;
};

export default reducer;