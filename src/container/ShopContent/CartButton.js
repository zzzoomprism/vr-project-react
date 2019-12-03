import React from "react";
import CartButton from "./../../components/ShopContent/Button/CartButton";
import {connect} from "react-redux";

const mapStoreToProps = (store) => {
    return{
        buttonId: store.cartButtonReducer.buttonId,
        active: store.cartButtonReducer.active,
        cartItems: store.cartButtonReducer.cartItems
    }
};


const mapDispatchToProps = (dispatch) => {
    return{
        updateCartCount: (item) => dispatch({type: 'UPDATE_CART_COUNT', item: item}),
        mouseEnterButton: (button_id) => dispatch({type: 'MOUSE_ENTER_CART_BUTTON', id: button_id}),
        mouseLeaveButton: () => dispatch({type: 'MOUSE_LEAVE_CART_BUTTON'}),
    }
};

export default connect(mapStoreToProps, mapDispatchToProps)(CartButton);