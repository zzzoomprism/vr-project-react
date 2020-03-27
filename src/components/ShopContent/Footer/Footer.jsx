import React from "react";
import style from "./Footer.module.css";
import {Link} from "react-router-dom";

const Footer = (props) =>{
    return <div className={style.footerMainBlock}>
        <div className={style.footerInfo}>
        <div>
           <ul>
               <li>+385 48 488 590 59</li>
               <li>+385 48 488 590 59</li>
               <li>+385 48 488 590 59</li>
           </ul>
            <p>Footer br street 25, Belarus, 223710</p>
        </div>
        <div>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/shop"}>Collection</Link></li>
                <li><Link to={"/shop"}>Deliver</Link></li>
                <li><Link to={"/shop"}>VR</Link></li>
                <li><Link to={"/shop"}>Contact us</Link></li>
            </ul>
        </div>
            <div>
                <ul>
                <li><Link to={"/vr"}>Animation/Menu</Link></li>
                <li><Link to={"/vr/vr-collection"}>Collection</Link></li>
                <li><Link to={"/shop"}>Deliver</Link></li>
                </ul>
            </div>
        </div>
        <div className={style.copyRightRow}>
            Copyright by Alex Susha 2019-2020. All right is protected.
        </div>
    </div>
};

export default Footer;