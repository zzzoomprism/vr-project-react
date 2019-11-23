import React from "react";
import style from "./Loader.module.css";

class Loader extends React.Component{
    constructor(props){
        super(props);
        this.state={
            text: "$_We are loading shaders and libraries...",
            displayText: ""
        };
        this.changeText = this.changeText.bind(this);
        let t = setInterval(this.changeText, 5000 );
    }

    changeText(){
        let timer = 0;
        let text = this.state.text;
        this.setState({displayText: ""});
        for(let i = 0; i < text.length; i++){
            setTimeout(()=>{this.setState({displayText: this.state.displayText + text[i]});
           }, timer);
            timer+=100;
        }
    }


    render() {
        return(
            <div className={(this.props.visible) ? style.loaderDivVisible : style.loaderDivNotVisible}>
                <h1 className={style.loaderText}>Please wait ... </h1>
                <p className={style.loaderDesc}>{this.state.displayText} <span>|</span> </p>
            </div>
        )
    }
}

export default Loader;