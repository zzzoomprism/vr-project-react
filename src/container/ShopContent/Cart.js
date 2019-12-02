import {connect} from "react-redux";
import Cart from "./../../components/ShopContent/Cart/Cart";

const mapStoreToProps = (store) =>{
    return{
        isOpen: store.cartReducer.isOpen,
        cartCountItems: store.cartButtonReducer.count
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        cartToggle: () => dispatch({type: 'CART_TOGGLE'}),
        cartAddItem: () => dispatch({type: 'CART_ADD_ITEM'})
    }
};

export default connect(mapStoreToProps, mapDispatchToProps)(Cart);