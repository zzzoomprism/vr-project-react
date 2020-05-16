import React from "react";
import {connect} from "react-redux";
import VRCartButton from "../../components/VRContent/components/VRCartButton";

const mapStoreToProps = (store) =>{
    return{

    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        cursorChange: (data, cursor)=>dispatch({type: "CHECK_CURSOR_WATCH",  data: data, cursor: cursor }),
    }
};

export default connect(mapStoreToProps, mapDispatchToProps)(VRCartButton);