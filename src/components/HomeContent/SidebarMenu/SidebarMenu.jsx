import React from "react";
import style from "./SidebarMenu.module.css";
import {Link} from "react-router-dom";

const SidebarMenu = (props) => {
    return (
        <div className={(props.open) ? style.mainMenuDiv : style.mainMenuDivNoneActive}>
                <div className={style.sidebarDiv}>
                    <div className={style.menuLogo}>
                        <h1>caroline.</h1>
                    </div>
                    <div className={style.menuButton}>
                        <span>Menu</span>
                        <a onClick={props.updateMessage}><i className="fas fa-bars"></i></a>
                    </div>
                    <div className={style.socialLink}>
                        <ul>
                            <li><i className="fab fa-instagram"></i></li>
                            <li><i className="fab fa-twitter"></i></li>
                            <li><i className="fab fa-instagram"></i></li>
                            <li><i className="fab fa-twitter"></i></li>
                        </ul>
                    </div>
                </div>
                <div className={(props.open) ? style.sidebarContentActive : style.sidebarContentNoneActive}>
                    <ul>
                        <li><a href="">Home </a><span><i className='fas fa-chevron-right'></i></span></li>
                        <li><Link to={"/vr"}>VR</Link><span><i className='fas fa-chevron-right'></i></span></li>
                        <li><a href="">Collection</a> <span><i className='fas fa-chevron-right'></i></span></li>
                        <li><a href="">About Us </a><span><i className='fas fa-chevron-right'></i></span></li>
                    </ul>
                </div>
        </div>
    )
};

export default SidebarMenu;