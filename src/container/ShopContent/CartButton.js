import React from "react";
import CartButton from "./../../components/ShopContent/Button/CartButton";
import {connect} from "react-redux";

const mapStoreToProps = (store) => {
    return{
        cartItems: store.cartButtonReducer.cartItems,
        onLoad: store.cartButtonReducer.onLoad,
    }
};


const mapDispatchToProps = (dispatch) => {
    return{
        updateCartCount: (item) => dispatch({type: 'UPDATE_CART_COUNT_CHECK', item: item}),
    }
};

export default connect(mapStoreToProps, mapDispatchToProps)(CartButton);