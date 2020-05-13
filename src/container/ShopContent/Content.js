import Content from "./../../components/ShopContent/Content/Content";
import {connect} from "react-redux";

const mapStoreToProps = (store) => {
    return {
        isReady: store.shopReducer.isReady,
        items: store.shopReducer.items,
        sort: store.topMenuRed.sort,
        filter_open: store.topMenuRed.filter_open,
        isLoading: store.shopReducer.isLoading,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setItems: (items, sort) => dispatch({type: 'SET_ITEMS', info: items, sort: sort}),
    }
};

export default connect(mapStoreToProps, mapDispatchToProps)(Content);