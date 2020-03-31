import React from "react";
import {connect} from "react-redux";
import ListCartItems from "./../../components/ShopContent/Cart/ListOfCartItems/ListOfCartItems";


const mapStoreToProps = (store) => {
    return{
        cart: store.cartButtonReducer.cartItems
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        deleteItem: (item) => dispatch({type: 'DELETE_ITEM', value: item})
    }
};

export default connect(mapStoreToProps, mapDispatchToProps)(ListCartItems);