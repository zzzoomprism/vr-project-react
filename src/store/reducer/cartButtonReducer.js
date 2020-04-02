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
            newState.sum = state.sum + action.value.price;
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
            newState.count--;
            newState.sum = state.sum - action.value.price;
            break;
        case 'CHANGE_DELIVER':
            newState.total_sum = state.sum;
            newState.services.deliver.need = action.value;
            for(let key in newState.services){
                if(newState.services[key].need){
                    newState.total_sum = newState.total_sum + state.services[key].price;
                    console.log(newState.total_sum + " = " + state.sum + " + " + state.services[key].price);
                }

            }
            break;

        case 'CHANGE_SERVICE_UP_TO_FLOOR':
            newState.total_sum = state.sum;
            newState.services.uptofloor.need = action.value;
            for(let key in newState.services){
                if(newState.services[key].need){
                    newState.total_sum = newState.total_sum + state.services[key].price;
                    console.log(newState.total_sum + " = " + state.sum + " + " + state.services[key].price);
                }

            }
            break;

        case 'CHANGE_SERVICE_FURNITURE_ASS':
            newState.total_sum = state.sum;
            newState.services.furnitureassets.need = action.value;
            for(let key in newState.services){
                if(newState.services[key].need){
                    newState.total_sum = newState.total_sum + state.services[key].price;
                    console.log(newState.total_sum + " = " + state.sum + " + " + state.services[key].price);
                }

            }
            break;
    }
    return newState;
};

export default reducer;