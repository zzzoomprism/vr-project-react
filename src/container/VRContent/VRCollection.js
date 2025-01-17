import React from "react";
import {connect} from "react-redux";
import VRCollection from "./../../components/VRContent/VRCollection";

const mapStoreToProps = (store) => {
  return{
      item: store.vrCollectionReducer.item,
      products_count: store.cartButtonReducer.count,
      info: store.shopReducer.items,
  }
};

const mapDispatchToProps = (dispatch) => {
    return{
        nextFurniture: (count) => dispatch({type: "NEXT_FURN", count: count}),
        prevFurniture: () => dispatch({type: "PREV_FURN"}),
        updateCartCount: (item) => dispatch({type: 'UPDATE_CART_COUNT_CHECK', item: item}),
        cursorChange: (data, cursor)=>dispatch({type: "CHECK_CURSOR_WATCH",  data: data, cursor: cursor }),
    }
};

export default connect(mapStoreToProps, mapDispatchToProps)(VRCollection);