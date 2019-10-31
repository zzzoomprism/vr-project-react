import React from "react";
import style from "./AdvBlock.module.css";

class AdvBlock extends React.Component{
    render() {
        return (
            <div>
            <div className={style.backgroundBlock}>
                <img src="https://images.pexels.com/photos/775907/pexels-photo-775907.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    className={style.backgroundImg}  alt=""/>
            </div>
                 <div>
                    <h3>VISIT OUR VR_SITE!</h3>
                     <a>VISITE!</a>
                </div>
            </div>
        );
    }
}

export default AdvBlock;