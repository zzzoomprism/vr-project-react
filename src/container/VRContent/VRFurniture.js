import React from "react";
import {connect} from "react-redux";
import VRFurniture from "../../components/VRContent/VRFurniture";

const mapStoreToProps = (store) => {
    return{
        products_count: store.cartButtonReducer.count,
    }
};


const mapDispatchToProps = (dispatch) => {
    return{

    }
};

export default connect(mapStoreToProps, mapDispatchToProps)(VRFurniture);