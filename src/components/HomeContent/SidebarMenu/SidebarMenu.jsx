import React from "react";
import style from "./SidebarMenu.module.css";
import {Link} from "react-router-dom";

const SidebarMenu = (props) => {
    return (
        <div className={(props.open) ? style.mainMenuDiv : style.mainMenuDivNoneActive}>
                <div className={style.sidebarDiv}>
                    <div className={style.menuLogo}>
                        <Link to={"/"}><h1>caroline.</h1></Link>
                    </div>
                    <div className={style.menuButton}>
                        <span>Menu</span>
                        <a onClick={props.updateMessage}><i className={(props.open) ? "fas fa-times" :"fas fa-bars"}></i></a>
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
                    <menu id={"menu"}>
                        <li onClick={props.updateMessage}><Link to="/">Home </Link><span><i className='fas fa-chevron-right'></i></span></li>
                        <li onClick={props.updateMessage}><Link to={"/vr"}>VR</Link><span><i className='fas fa-chevron-right'></i></span></li>
                        <li onClick={props.updateMessage}><Link to={"/shop/collection"}>Collection</Link><span><i className='fas fa-chevron-right'></i></span></li>
                        <li onClick={props.updateMessage}><a href="">About Us </a><span><i className='fas fa-chevron-right'></i></span></li>
                    </menu>
                </div>

        </div>
    )
};

export default SidebarMenu;