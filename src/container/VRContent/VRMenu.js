import React from "react";
import {connect} from "react-redux";
import VRMenu from "./../../components/VRContent/VRMenu";

const mapStoreToProps = (store) => {
    return{
        cartId: store.vrMenuReducer.cartId,
        modelId: store.vrMenuReducer.modelId,
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        vrCartMouseEnter: (cartId) => dispatch({type: "VR_CART_MOUSE_ENTER", value: cartId}),
        vrCartMouseLeave: () => dispatch({type: "VR_CART_MOUSE_LEAVE"}),
        updateCartCount: (item) => dispatch({type: 'UPDATE_CART_COUNT', item: item}),
        modelMouseEnter: (modelId) => dispatch({type: 'MODEL_MOUSE_ENTER', item: modelId}),
        modelMouseLeave: () => dispatch({type: 'MODEL_MOUSE_LEAVE'}),
    }
};

export default connect(mapStoreToProps, mapDispatchToProps)(VRMenu);