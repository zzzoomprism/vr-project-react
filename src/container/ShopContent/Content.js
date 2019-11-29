import Content from "./../../components/ShopContent/Content/Content";
import {connect} from "react-redux";

const mapStoreToProps = (store) => {
    return {
        isReady: store.shopReducer.isReady,
        items: store.shopReducer.items
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setItems: (items) => dispatch({type: 'SET_ITEMS', payload: items})
    }
};

export default connect(mapStoreToProps, mapDispatchToProps)(Content);