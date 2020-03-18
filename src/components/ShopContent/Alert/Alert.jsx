import React from "react";
import style from "./Alert.module.css";

const Alert = (props) => {
        return (
            <div className={(props.alertShow) ? style.alertDiv : style.alertDivHide}>
                <span className={style.closeIcon} onClick={props.closeAlert}><i className="fas fa-times"></i></span>
                <div className={style.alertContent}>
                    <p>{props.alertMessage}</p>
                </div>
            </div>
        );
};

export default Alert;