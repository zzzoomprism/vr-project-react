import React from "react";
import {connect} from "react-redux";
import Floor from "./../../components/RoomContent/FloorPart/Floor";

const mapStoreToProps = (store) => {
    return{
        mouseEnterPosition: store.vrReducer.mouseEnterPosition,
        color: store.vrReducer.mouseEnterPosition.color,
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        floorMouseEnter: () => dispatch({type: 'FLOOR_MOUSE_ENTER'}),
        floorMouseLeave: () => dispatch({type: 'FLOOR_MOUSE_LEAVE'}),
    }
};

export default connect(mapStoreToProps, mapDispatchToProps)(Floor);