import React from "react";
import style from "./Content.module.css";
import info from "./../../../info";
import Button from "./../Button/Button";

class Content extends React.Component{

    render() {
        return <div className={style.mainFurnitureBlock}>
            <div className={style.furnitureSection}>
                <div className={style.funitureImageContent}>
                    <img
                        src="https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt=""/>
                </div>
                <div className={style.funitureInformationContent}>
                    <h3>Title of furniture</h3>
                    <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium debitis dicta in ipsa iste minima molestiae, nesciunt, officiis praesentium quaerat repellat soluta vel voluptatum? Facere hic itaque nulla obcaecati sapiente!</span>
                    </p>
                    <div>
                        <Button icon={"fas fa-shopping-cart"} btnId={"1"} content={"Add to card"}/>
                        <Button icon={"fas fa-vr-cardboard"} btnId={"1vr"} content={"Look at VR"}/>
                    </div>
                </div>
            </div>
            <div className={style.furnitureSection}>
                <div className={style.funitureImageContent}>
                    <img
                        src="https://images.pexels.com/photos/3264493/pexels-photo-3264493.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt=""/>
                </div>
                <div className={style.funitureInformationContent}>
                    <h3>Title of furniture</h3>
                    <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium debitis dicta in ipsa iste minima molestiae, nesciunt, officiis praesentium quaerat repellat soluta vel voluptatum? Facere hic itaque nulla obcaecati sapiente!</span>
                    </p>
                    <div>
                        <Button icon={"fas fa-shopping-cart"} btnId={"1"} content={"Add to card"}/>
                        <Button icon={"fas fa-vr-cardboard"} btnId={"1vr"} content={"Look at VR"}/>
                    </div>
                </div>
            </div>
            <div className={style.furnitureSection}>
                <div className={style.funitureImageContent}>
                    <img
                        src="https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt=""/>
                </div>
                <div className={style.funitureInformationContent}>
                    <h3>Title of furniture</h3>
                    <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium debitis dicta in ipsa iste minima molestiae, nesciunt, officiis praesentium quaerat repellat soluta vel voluptatum? Facere hic itaque nulla obcaecati sapiente!</span>
                    </p>
                    <div>
                        <Button icon={"fas fa-shopping-cart"} btnId={"1"} content={"Add to card"}/>
                        <Button icon={"fas fa-vr-cardboard"} btnId={"1vr"} content={"Look at VR"}/>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Content;