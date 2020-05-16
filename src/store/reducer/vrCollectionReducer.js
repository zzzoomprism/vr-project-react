import {countOfAll} from "./../../info";

const initialState = {
    item: 0,
    all_items: 0
};


const reducer = (state = initialState, action)=>{
    const newState = {...state};
    switch(action.type){
        case "NEXT_FURN":
            if(state.item < action.count - 1) {
                newState.item += 1;
            }
            break;
        case "PREV_FURN":
            if(state.item > 0 ){
                newState.item -= 1;
            }
    }

    return newState;
};

export default reducer;

