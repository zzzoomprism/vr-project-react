import React from "react";
import {connect} from "react-redux";
import ModalFilter from "../../components/ShopContent/ModalFilter/ModalFilter";

const mapStoreToProps = (store) => {
    return{
        filter_open: store.topMenuRed.filter_open,
        filter_key: store.shopReducer.filter_key_words
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        setFilterStock: (filter) => dispatch({type: 'SET_FILTER', sort: filter}),
        deleteFilterStock: (filter)=>dispatch({type: 'DELETE_FILTER_STOCK', value: filter})
    }
};

export default connect(mapStoreToProps, mapDispatchToProps)(ModalFilter);