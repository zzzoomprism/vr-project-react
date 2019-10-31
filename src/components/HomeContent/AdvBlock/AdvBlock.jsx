import React from "react";
import style from "./AdvBlock.module.css";

class AdvBlock extends React.Component{
    render() {
        return (
            <div>
            <div className={style.backgroundBlock}>
                <img src="https://images.pexels.com/photos/775907/pexels-photo-775907.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    className={style.backgroundImg}  alt=""/>
                <div className={style.textUpToAnimImage}>
                    <h3>VISIT OUR VR_SITE!</h3>
                    <a href={'/vr'} target="_blank"><i className="fas fa-vr-cardboard"></i></a>
                </div>
            </div>

            </div>
        );
    }
}

export default AdvBlock;