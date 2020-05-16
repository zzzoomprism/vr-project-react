import React from "react";
import {modelLoading} from "./../../../info";
import style from "./Furniture.module.css";
import Cart from "./../../../container/ShopContent/Cart";
import CartButton from "../../../container/ShopContent/CartButton";
import {Link} from "react-router-dom"
import cartBtnStyle from "./../Button/CartButton.module.css";

class Furniture extends React.Component{
    state = {
        left: 0
    };

    handleNextClick(){
        if(this.state.left > -200)
        this.setState({left: this.state.left - 100});
    }

    handlePrevClick(){
        if(this.state.left < 0)
        this.setState({left: this.state.left + 100});
    }

    render() {
        const furniture = modelLoading();
        const info = furniture.find(item => item.id === this.props.match.params.id);
        console.log(info);
        return (
            <div className={style.mainBlockOfDescription}>
                <div className={style.topFurMenu}>
                    <Link to={"/shop/collection"} className={style.backBtn}>
                        <i className="fas fa-long-arrow-alt-left"></i>
                    </Link>
                    <span></span>
                    <div>
                        <Cart/>
                    </div>
                </div>
                <div className={style.imageBlock}>
                    <img src={info.image} alt="" style={{left: this.state.left + "%"}}/>
                    <img src={info.image} alt="" style={{left: this.state.left + 100 + "%"}}/>
                    <img src={info.image} alt="" style={{left: this.state.left + 200 + "%"}}/>
                    <span onClick={this.handleNextClick.bind(this)} className={style.slideNextBtn}><i className="fas fa-angle-right"></i></span>
                    <span onClick={this.handlePrevClick.bind(this)} className={style.slidePrevBtn}><i className="fas fa-angle-left"></i></span>
                </div>
                <div className={style.functionLine}>
                    <h2>{info.name}</h2>
                    <h2>{info.price + "$"}</h2>
                    <div className={style.cartBtnBlock}>
                        <button className={style.vrBtn}><i className="fas fa-vr-cardboard"></i><span>Look at vr!</span></button>
                        <CartButton btnId={info.id} item={info} btnStyle={cartBtnStyle.cartButtonStyle2}/>
                    </div>
                </div>
                <div className={style.description}>
                    <p>{info.description}</p>
                    <table>
                        <tbody>
                        <tr><td>Materials</td><td> Polyester, Metal, Wood</td></tr>
                        <tr><td>Seatback Height</td><td>15"</td></tr>
                        <tr><td>Place count</td><td>3</td></tr>
                        <tr><td>Sleep place</td><td> + </td></tr>
                        <tr><td>Transformation mechanism</td><td>euro book</td></tr>
                        <tr><td>Color name</td><td>verso dimrose/teos dark brown</td></tr>
                        <tr><td>Upholstery</td><td>eco leather, fabric</td></tr>
                        <tr><td>Upholstery color</td><td>gray, brown</td></tr>
                        <tr><td>Upholstery pattern</td><td>without pattern</td></tr>
                        <tr><td>Delivery form</td><td>disassembled</td></tr>
                        <tr><td>Back</td><td>pillows</td></tr>
                        <tr><td>Corner location</td><td>right</td></tr>
                        <tr><td>Shelf availability</td><td> - </td></tr>
                        <tr><td>Cargo in the armrest</td><td> - </td></tr>
                        <tr><td>Removable cover</td><td> - </td></tr>
                        <tr><td>Length</td><td>305 sm</td></tr>
                        <tr><td>Depth</td><td>196 sm</td></tr>
                        <tr><td>Height</td><td>45 sm</td></tr>
                        <tr><td>Width of sleep place</td><td>196 sm</td></tr>
                        <tr><td>Length of sleep place</td><td>240 sm</td></tr>
                        </tbody>
                    </table>
                </div>
                <div className={style.furnitureGallery}>
                    <img src={info.image} alt=""/>
                    <img src={info.image} alt=""/>
                    <img src={info.image} alt=""/>
                    <img src={info.image} alt=""/>
                    <img src={info.image} alt=""/>
                    <img src={info.image} alt=""/>
                </div>
            </div>
        )
    }
};

export default Furniture;
