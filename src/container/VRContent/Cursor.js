import React from "react";
import {connect} from "react-redux";
import Cursor from "./../../components/VRContent/Cursor";


const mapStoreToProps = (store) => (
    {
        cursor_in_load: store.vrReducer.cursor,
    }
);

const mapDispatchToProps = (dispatch) => (
    {

    }
);

export default connect(mapStoreToProps, mapDispatchToProps)(Cursor);
