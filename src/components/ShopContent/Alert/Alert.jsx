import React from "react";
import style from "./Alert.module.css";

const Alert = (props) => {
    const alert_position = {
        show: {
            left: "calc(100% - 310px)"
        },
        hide: {
            left: "100%"
        }
    };
        return (
            <div className={style.alertDiv} style={(props.alertShow) ? alert_position.show : alert_position.hide}>
                <span className={style.closeIcon} onClick={props.closeAlert}><i className="fas fa-times"></i></span>
                <div className={style.alertContent}>
                    <p>{props.alertMessage}</p>
                </div>
            </div>
        );
};

export default Alert;