import React from "react";
import {connect} from "react-redux";
import ChooseColor from "../../components/RoomContent/ChooseColor/ChooseColor";

const mapStoreToProps = (store) => {
    return{
        visible: store.vrReducer.mouseEnterPosition.visible,
        clr1_position: store.vrReducer.mouseEnterPosition.clr1_position,
        rotation: store.vrReducer.mouseEnterPosition.rotation,
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        colorMouseEnter: (color_id) => dispatch({type: "COLOR_MOUSE_ENTER", color: color_id})
    }
};

export default connect(mapStoreToProps, mapDispatchToProps)(ChooseColor);