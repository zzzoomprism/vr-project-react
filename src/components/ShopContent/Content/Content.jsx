import React, {useState, useEffect} from "react";
import style from "./Content.module.css";
import {modelLoading} from "./../../../info";
import CartButton from "./../../../container/ShopContent/CartButton";
import {Link} from "react-router-dom";
import Button from "./../Button/Button";
import ModalFilter from "./../../../container/ShopContent/ModalFilter";
import TopMenu from "./../../../container/ShopContent/TopMenu";
import cartBtnStyle from "./../Button/CartButton.module.css";

const Content = (props) => {
        const style_open = {
            width: "calc(100% - 480px)",
        };
        const style_close = {
            width: "calc(100% - 140px)"
        };
        const info = modelLoading();
        props.setItems(info, props.sort);
        const furnitureInfo = props.items.map((el) => {
            return  <div className={style.furnitureSection} key={el.id}>
                <Link to={`/shop/collection/${el.id}`}>
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
                   <Link to={`/shop/collection/${el.id}`}><h3>{el.name}</h3></Link>
                    <p><span>{el.short_description}</span>
                    </p>
                    <div>
                        <CartButton btnId={el.id} item={el} btnStyle={cartBtnStyle.cartButton}/>
                        <Button icon={"fas fa-vr-cardboard"} btnId={el.id} content={"Look at VR"}/>
                    </div>
                </div>
            </div>

        });

    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        setTimeout(()=>setLoaded(true), 2000);
    }, []);
        return <div>
            {!loaded && <div className={"loading"}><span>Loading...</span></div>}
            <TopMenu/>
            <div className={style.mainFurnitureBlock} style={(props.filter_open) ? style_open : style_close}>
            {(props.isReady) ? furnitureInfo : "Loading..."}
            </div>
            <ModalFilter/>
        </div>
};

export default Content;