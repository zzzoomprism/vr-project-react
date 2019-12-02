import React from "react";
import CartButton from "./../../components/ShopContent/Button/CartButton";
import {connect} from "react-redux";

const mapStoreToProps = (store) => {
    return{
        buttonId: store.cartButtonReducer.buttonId,
        active: store.cartButtonReducer.active,
    }
};


const mapDispatchToProps = (dispatch) => {
    return{
        updateCartCount: () => dispatch({type: 'UPDATE_CART_COUNT'}),
        updateStateOfButton: (button_id) => dispatch({type: 'MOUSE_ENTER_CART_BUTTON', id: button_id}),
    }
};

export default connect(mapStoreToProps, mapDispatchToProps)(CartButton);