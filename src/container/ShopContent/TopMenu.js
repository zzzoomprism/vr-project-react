import React from "react";
import TopMenu from "./../../components/ShopContent/TopMenu/TopMenu";
import {connect} from "react-redux";

const mapStoreToProps = (store) => {
    return {
        open : store.topMenuRed.open,
        sort: store.topMenuRed.sort,
        filter_open: store.topMenuRed.filter_open
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        sortByClick: ()=>dispatch({type: 'SORT_BY_CLICK'}),
        sortPriceUp: ()=>dispatch({type: 'PRICE_UP'}),
        sortPriceDown: ()=>dispatch({type: 'PRICE_DOWN'}),
        sortTop: ()=>dispatch({type: 'TOP'}),
        filterButtonToggle: () => dispatch({type: "FILTER_BUTTON_TOGGLE"}),
    }
};

export default connect(mapStoreToProps, mapDispatchToProps)(TopMenu);