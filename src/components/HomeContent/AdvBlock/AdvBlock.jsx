import React from "react";
import style from "./AdvBlock.module.css";
import {Link} from "react-router-dom";

class AdvBlock extends React.Component{
    render() {
        return (
            <div>
            <div className={style.backgroundBlock}>
                <img src="https://images.pexels.com/photos/775907/pexels-photo-775907.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    className={style.backgroundImg}  alt=""/>
                <div className={style.textUpToAnimImage}>
                    <h3>PLAY IN VR!</h3>
                    <Link to={"/vr"}><i className="fas fa-vr-cardboard"></i></Link>
                </div>
            </div>

            </div>
        );
    }
}

export default AdvBlock;