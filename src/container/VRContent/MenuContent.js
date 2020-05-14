import React from "react";
import {connect} from "react-redux";
import MenuContent from "./../../components/VRContent/MenuContent";

const mapStoreToProps = (store) => {
    return{
        menuId: store.vrMenuReducer.menuId
    }
};

const mapDispatchToProps = (dispatch) => {
  return{
      menuMouseEnter: (value) => dispatch({type: "VR_MENU_MOUSE_ENTER", menu: value}),
      menuMouseLeave: () => dispatch({type: "VR_MENU_MOUSE_LEAVE"}),
      cursorChange: (action, page, cursor)=>dispatch({type: "CHANGE_VR_PAGE_ASYNC", action: action,  page: page, cursor: cursor }),
      menuClick: (href) => dispatch({type: "VR_MENU_CLICK", address: href})
  }
};

export default connect(mapStoreToProps, mapDispatchToProps)(MenuContent);
