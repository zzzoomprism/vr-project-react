import {connect} from "react-redux";
import Cart from "./../../components/ShopContent/Cart/Cart";

const mapStoreToProps = (store) =>{
    return{
        isOpen: store.cartReducer.isOpen,
        cartCountItems: store.cartButtonReducer.count,
        cartItems: store.cartButtonReducer.cartItems,
        sum: store.cartButtonReducer.sum,
        other_cart: store.cartButtonReducer.otherCartItems
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        cartToggle: (ex_value) => dispatch({type: 'CART_TOGGLE', value: ex_value}),
        deleteItem: (item) => dispatch({type: 'DELETE_ITEM', value: item})
    }
};

export default connect(mapStoreToProps, mapDispatchToProps)(Cart);