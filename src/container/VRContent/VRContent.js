import React from "react";
import {connect} from "react-redux";
import VRContent from "./../../components/VRContent/VRContent";

const mapStoreToProps = (store) => {
    return {
        position: store.vrReducer.position,
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        updatePosition: (position) => dispatch({type: 'UPDATE_POSITION', value: position})
    }
};

export default connect(mapStoreToProps, mapDispatchToProps)(VRContent);