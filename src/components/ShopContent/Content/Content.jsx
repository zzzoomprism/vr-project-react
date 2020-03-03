import React from "react";
import style from "./Content.module.css";
import {modelLoading} from "./../../../info";
import CartButton from "./../../../container/ShopContent/CartButton";
import {Link} from "react-router-dom";
import Button from "./../Button/Button";
import ModalFilter from "./../../../container/ShopContent/ModalFilter";
import TopMenu from "./../../../container/ShopContent/TopMenu";

class Content extends React.Component{
    render() {
        const style_open = {
            width: "calc(100% - 460px)",
        };
        const style_close = {
            width: "calc(100% - 140px)"
        };
        const info = modelLoading();
        this.props.setItems(info, this.props.sort);
        const furnitureInfo = this.props.items.map((el) => {
            return  <div className={style.furnitureSection} key={el.id}>
                <Link to={`/shop/${el.id}`}>
                <div className={style.funitureImageContent}>
                    <img
                        src={el.image}
                        alt=""/>
                    <div className={style.furniturePrice}>
                        <h3>{el.price}$</h3>
                    </div>
                </div>
                </Link>
                <div className={style.funitureInformationContent}>
                   <Link to={`/shop/${el.id}`}><h3>{el.name}</h3></Link>
                    <p><span>{el.short_description}</span>
                    </p>
                    <div>
                        <CartButton btnId={el.id} item={el}/>
                        <Button icon={"fas fa-vr-cardboard"} btnId={el.id} content={"Look at VR"}/>
                    </div>
                </div>
            </div>

        });
        return <div >
            <TopMenu/>
            <div className={style.mainFurnitureBlock} style={(this.props.filter_open) ? style_open : style_close}>
            {(this.props.isReady) ? furnitureInfo : "Загружаем..."}
            </div>
            <ModalFilter/>
        </div>

    }
}

export default Content;