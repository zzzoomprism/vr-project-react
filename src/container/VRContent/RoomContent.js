import React from "react";
import {connect} from "react-redux";
import RoomContent from "./../../components/RoomContent/RoomContent";

const mapStoreToProps = (store) => {
    return {
        position: store.vrReducer.position,
        mouseEnterPosition: store.vrReducer.mouseEnterPosition,
        color: store.vrReducer.mouseEnterPosition.color,
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        updatePosition: (position) => dispatch({type: 'UPDATE_POSITION', value: position}),
        floorMouseEnter: (value) => dispatch({type: 'FLOOR_MOUSE_ENTER', points: value}),
        floorMouseLeave: () => dispatch({type: 'FLOOR_MOUSE_LEAVE'}),
    }
};

export default connect(mapStoreToProps, mapDispatchToProps)(RoomContent);