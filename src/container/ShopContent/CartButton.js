import React from "react";
import CartButton from "./../../components/ShopContent/Button/CartButton";
import {connect} from "react-redux";

const mapStoreToProps = (store) => {
    return{
        cartItems: store.cartButtonReducer.cartItems,
    }
};


const mapDispatchToProps = (dispatch) => {
    return{
        updateCartCount: (item) => dispatch({type: 'FETCH_REQUESTED', item: item}),
    }
};

export default connect(mapStoreToProps, mapDispatchToProps)(CartButton);