import React from "react";
import {connect} from "react-redux";
import OrderCheckout from "../../components/ShopContent/OrderCheckout/OrderCheckout";

const mapStoreToProps = (store) => {
    return{
        cartItems: store.cartButtonReducer.cartItems,
        sum: store.cartButtonReducer.sum,
        total_sum: store.cartButtonReducer.total_sum,
    }
};

const mapDispatchToProps = (dispatch) => {
    return{

    }
};

export default connect(mapStoreToProps, mapDispatchToProps)(OrderCheckout);