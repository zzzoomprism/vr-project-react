import {connect} from "react-redux";
import SidebarMenu from "./../../components/HomeContent/SidebarMenu/SidebarMenu";

const mapStoreToProps = (store) => {
    return {
        open: store.sidebar.open,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateMessage: () => dispatch({type: 'UPDATE_MESSAGE'})
    }
};

export default connect(mapStoreToProps, mapDispatchToProps)(SidebarMenu);