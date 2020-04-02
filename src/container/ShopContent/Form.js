import React from "react";
import {connect} from "react-redux";
import Form from "./../../components/ShopContent/OrderCheckout/Form/Form";

const mapStoreToProps = (store) => (
    {
        deliver: store.cartButtonReducer.services.deliver,
        uptofloor: store.cartButtonReducer.services.uptofloor,
        furnitureassets: store.cartButtonReducer.services.furnitureassets,
       total_sum: store.cartButtonReducer.total_sum,
    }
);


const mapDispatchToProps = (dispatch) => (
    {
        updateDeliver: (value) => dispatch({type: 'CHANGE_DELIVER', value: value}),
        updateServiceUpToFloor: (value, sum) => dispatch({type: 'CHANGE_SERVICE_UP_TO_FLOOR', value: value}),
        updateServiceFurnitureAss: (value, sum) => dispatch({type: 'CHANGE_SERVICE_FURNITURE_ASS', value: value}),
    }
);


export default connect(mapStoreToProps, mapDispatchToProps)(Form);

