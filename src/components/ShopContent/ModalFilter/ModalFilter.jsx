import React from "react";
import style from "./ModalFilter.module.css";


class ModalFilter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            checkbox: this.props.filter_key
        }
    }

    inputChange(event){
        if(event.target.checked)
            this.props.setFilterStock(event.target.value);
        else
            this.props.deleteFilterStock(event.target.value);
        this.setState({checkbox: this.props.filter_key});
    }
    render() {
        const display_none = {display: "none"};
        return <div className={(this.props.filter_open) ? style.modalWindow : style.modalWindowClose}>
            <div className={ style.modalBody} >
                <div>
                    <h3>What kind of furniture?</h3>
                    <div className={style.inputFilterBlock}>
                        <label className={style.container}>
                            <input type="checkbox" value={"chair"} onChange={this.inputChange.bind(this)} checked={ this.state.checkbox.indexOf("chair") > -1 }/>
                            <p className={style.checkmark}>Chair</p>
                        </label>
                        <label className={style.container}>
                            <input type="checkbox" value={"sofa"} onChange={this.inputChange.bind(this)} checked={ this.state.checkbox.indexOf("sofa") > -1 } />
                            <p className={style.checkmark}>Sofa</p>
                        </label>
                        <label className={style.container}>
                            <input type="checkbox" value={"table"} onChange={this.inputChange.bind(this)} checked={ this.state.checkbox.indexOf("table") > -1 }/>
                            <p className={style.checkmark}>Table</p>
                        </label>
                        <label className={style.container}>
                            <input type="checkbox" value={"blocks"} onChange={this.inputChange.bind(this)} checked={ this.state.checkbox.indexOf("blocks") > -1 }/>
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
    }


};

export default ModalFilter;