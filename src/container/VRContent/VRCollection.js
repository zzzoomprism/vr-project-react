import React from "react";
import {connect} from "react-redux";
import VRCollection from "./../../components/VRContent/VRCollection";

const mapStoreToProps = (store) => {
  return{
      item: store.vrCollectionReducer.item,
  }
};

const mapDispatchToProps = (dispatch) => {
    return{
        nextFurniture: () => dispatch({type: "NEXT_FURN"}),
        prevFurniture: () => dispatch({type: "PREV_FURN"}),
        updateCartCount: (item) => dispatch({type: 'UPDATE_CART_COUNT', item: item}),
    }
};

export default connect(mapStoreToProps, mapDispatchToProps)(VRCollection);