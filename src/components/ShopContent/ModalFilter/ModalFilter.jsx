import React from "react";
import style from "./ModalFilter.module.css";

const ModalFilter = (props) => {
    const display_none = {display: "none"};
    return <div className={(props.filter_open) ? style.modalWindow : style.modalWindowClose}>
                <div className={ style.modalBody} >
                    <div>
                        <h3>What kind of furniture?</h3>
                        <div className={style.inputFilterBlock}>
                            <label className={style.container}>
                                <input type="checkbox"/>
                                    <p className={style.checkmark}>Chair</p>
                            </label>
                            <label className={style.container}>
                                <input type="checkbox"/>
                                <p className={style.checkmark}>Sofa</p>
                            </label>
                            <label className={style.container}>
                                <input type="checkbox"/>
                                <p className={style.checkmark}>Table</p>
                            </label>
                            <label className={style.container}>
                                <input type="checkbox"/>
                                <p className={style.checkmark}>Blocks</p>
                            </label>
                        </div>
                    </div>
                    <div>
                        <h3>Width of furniture? </h3>
                        <div className={style.inputFilterBlock}>
                            <label className={style.container}>
                                <input type="checkbox"/>
                                <p className={style.checkmark}> more than 2000sm </p>
                            </label>
                            <label className={style.container}>
                                <input type="checkbox"/>
                                <p className={style.checkmark}>more than 2000sm</p>
                            </label>
                            <label className={style.container}>
                                <input type="checkbox"/>
                                <p className={style.checkmark}>more than 2000sm</p>
                            </label>
                        </div>
                    </div>
                </div>
             </div>
};

export default ModalFilter;