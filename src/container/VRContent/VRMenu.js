import React from "react";
import {connect} from "react-redux";
import VRMenu from "./../../components/VRContent/VRMenu";

const mapStoreToProps = (store) => {
    return{
        cartId: store.vrMenuReducer.cartId,
        modelId: store.vrMenuReducer.modelId,
        products_count: store.cartButtonReducer.count,
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        vrCartMouseEnter: (cartId) => dispatch({type: "VR_CART_MOUSE_ENTER", value: cartId}),
        vrCartMouseLeave: () => dispatch({type: "VR_CART_MOUSE_LEAVE"}),
        updateCartCount: (item) => dispatch({type: 'UPDATE_CART_COUNT_CHECK', item: item}),
        modelMouseEnter: (modelId) => dispatch({type: 'MODEL_MOUSE_ENTER', item: modelId}),
        modelMouseLeave: () => dispatch({type: 'MODEL_MOUSE_LEAVE'}),
        cursorChange: (data, cursor)=>dispatch({type: "CHECK_CURSOR_WATCH",  data: data, cursor: cursor }),
    }
};

export default connect(mapStoreToProps, mapDispatchToProps)(VRMenu);