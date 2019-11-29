import React from "react";
import TopMenu from "./../../components/ShopContent/TopMenu/TopMenu";
import {connect} from "react-redux";

const mapStoreToProps = (store) => {
    return {
        open : store.topMenuRed.open,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        sortByClick: ()=>dispatch({type: 'SORT_BY_CLICK'})
    }
};

export default connect(mapStoreToProps, mapDispatchToProps)(TopMenu);