import React from "react";
import {connect} from "react-redux";
import Alert from "../../components/ShopContent/Alert/Alert";

const mapStoreToProps = (store) => {
    return{
        alertShow: store.cartButtonReducer.alert.show,
        alertMessage: store.cartButtonReducer.alert.message
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        closeAlert: ()=>dispatch({type: "HIDE_ALERT"})
    }
};

export default connect(mapStoreToProps, mapDispatchToProps)(Alert);