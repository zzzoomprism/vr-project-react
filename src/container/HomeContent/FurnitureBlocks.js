import {connect} from "react-redux";
import FurnitureBlocks from "./../../components/HomeContent/FutnitureBlocks/FurnitureBlock";


const mapStoreToProps = (store) => {
    return{
        top: store.furnitureBlock.sofa.top,
        left: store.furnitureBlock.sofa.left,
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        updatePosition: (val) => dispatch({type: 'UPDATE_BLOCKS_POSITION', position: val})
    }
};

export default connect(mapStoreToProps, mapDispatchToProps)(FurnitureBlocks);