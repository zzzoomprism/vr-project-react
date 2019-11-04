import React from "react";
import style from "./Footer.module.css";
import MenuObjects from "../Objects/MenuObjects";

class Footer extends React.Component{
    render() {
        return (
            <div className={style.footer}>
                <div className={style.contactUsFooter}>
                    <h5>CONTACT US: </h5>
                    <p>+375-(44)-562-49-47 (VELCOME)</p>
                    <p>+375-(44)-562-49-47 (MTC) </p>
                    <p>s96k92@gmail.com</p>
                </div>
                <div className={style.footerText}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto aspernatur autem
                        deleniti doloremque eligendi, facilis id ipsa ipsum iusto laboriosam, magnam maiores natus neque
                        pariatur porro ratione repellendus voluptate?
                    </p>
                </div>
                <div className={style.menuVisible}>
                    <ul>
                        <li><a href="">ABOUT US</a></li>
                        <li><a href="">CONTACT US</a></li>
                        <li><a href="">VR PLAY</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Footer;