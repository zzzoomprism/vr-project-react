import React from "react";
import style from "./Block.module.css";


class Block extends React.Component{
    render() {
        return (
            <div className={style.gridBlock}>
                <div>
                    <h3 className={style.blockIcon}><i className="fas fa-comments"></i></h3>
                    <h4>OUT CONTACTS</h4>
                    <p>+375 (44) 562 49 47 (VELCOME)</p>
                    <p>+375 (44) 562 49 47 (MTC)</p>
                    <p>s96k92@gmail.com</p>
                </div>
                <div>
                    <h3 className={style.blockIcon}><i className="fas fa-crow"></i></h3>
                    <h4>OUR OFFICE</h4>
                    <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span></p>
                    <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span></p>
                </div>
                <div>
                    <h3 className={style.blockIcon}><i className="fas fa-file-code"></i></h3>
                  <h4>WE WORK</h4>
                    <p>MON-FRI : 9:00-16:00 </p>
                    <p>SAT-SUN : 11:00-16:00 </p>
                </div>
            </div>
        );
    }
}

export default Block;