import React from "react";
import style from "./Content.module.css";
import info from "./../../../info";
import CartButton from "./../../../container/ShopContent/CartButton";
import {Link} from "react-router-dom";
import Button from "./../Button/Button";

class Content extends React.Component{
    render() {
        this.props.setItems(info, this.props.sort);
        const furnitureInfo = this.props.items.map((el) => {
            return  <div className={style.furnitureSection} key={el.id}>
                <div className={style.funitureImageContent}>
                    <img
                        src={el.image}
                        alt=""/>
                    <div className={style.furniturePrice}>
                        <h3>{el.price}$</h3>
                    </div>
                </div>
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
        return <div className={style.mainFurnitureBlock}>
            {(this.props.isReady) ? furnitureInfo : "Загружаем..."}
        </div>
    }
}

export default Content;