import {get} from "./../../info";


const initialState = {
    count: 0,
    cartItems: [],
    sum: 0,
    onLoad: false,
    alert: {
        show: false,
        message: "",
    },
    services:{
        deliver: {
            need: false,
            price: 20,
        },
        uptofloor: {
            need: false,
            price: 30,
        },
        furnitureassets: {
            need: false,
            price: 10,
        },
    },
    total_sum: 0,
    otherCartItems: {},
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

            let count = (!action.count) ? 1 : action.count;
            let newItems2 = {
                [action.value.id]: {
                    count: count,
                    price: action.value.price
                },
            };
            Object.assign(newState.otherCartItems, state.otherCartItems, newItems2);
            newState.sum = state.sum + (action.value.price * count);
            newState.total_sum = newState.sum;

            newState.onLoad = false;
            break;
        case 'SHOW_ALERT':
            newState.alert.show = true;
            newState.alert.message = "Product is adding to cart successfully!";
            break;
        case 'HIDE_ALERT':
            newState.alert.show = false;
            break;
        case 'FETCH_ERROR':
            console.log(action.error);
            break;
        case 'DELETE_ITEM':
            newState.cartItems = state.cartItems.filter(item => item !== action.value);
            delete state.otherCartItems[action.value.id];
            newState.otherCartItems = state.otherCartItems;
            newState.count--;
            console.log(action.value);
            newState.sum = state.sum - (action.value.price * action.count);
            console.log(newState.sum);
            newState.total_sum = newState.sum;
            break;
        case 'UPDATE_COUNT_OF_ITEM':
            let count2 = (!action.count) ? 1 : action.count;
            let newItems = {
                [action.value.id]: {
                    count: count2,
                    price: action.value.price
                },
            };
            Object.assign(newState.otherCartItems, state.otherCartItems, newItems);
            newState.sum = 0;
            for(let el in newState.otherCartItems){
                newState.sum += (+newState.otherCartItems[el].count * newState.otherCartItems[el].price);
            }
            newState.total_sum = newState.sum;
            break;

        case 'CHANGE_DELIVER':
            newState.total_sum = state.sum;
            newState.services.deliver.need = action.value;
            for(let key in newState.services){
                if(newState.services[key].need){
                    newState.total_sum = newState.total_sum + state.services[key].price;
                }

            }
            break;

        case 'CHANGE_SERVICE_UP_TO_FLOOR':
            newState.total_sum = state.sum;
            newState.services.uptofloor.need = action.value;
            for(let key in newState.services){
                if(newState.services[key].need){
                    newState.total_sum = newState.total_sum + state.services[key].price;
                }

            }
            break;

        case 'CHANGE_SERVICE_FURNITURE_ASS':
            newState.total_sum = state.sum;
            newState.services.furnitureassets.need = action.value;
            for(let key in newState.services){
                if(newState.services[key].need){
                    newState.total_sum = newState.total_sum + state.services[key].price;
                }

            }
            break;
    }
    return newState;
};

export default reducer;