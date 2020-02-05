import React from "react";
import {connect} from "react-redux";
import ModalFilter from "../../components/ShopContent/ModalFilter/ModalFilter";

const mapStoreToProps = (store) => {
    return{
        filter_open: store.topMenuRed.filter_open
    }
};

const mapDispatchToProps = (dispatch) => {
    return{

    }
};

export default connect(mapStoreToProps, mapDispatchToProps)(ModalFilter);