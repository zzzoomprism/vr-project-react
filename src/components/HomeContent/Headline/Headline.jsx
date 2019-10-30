import React from "react";
import style from "./Headline.module.css";

class Headline extends React.Component{
    state={
        headline: "WELCOME TO IT_COMPANY!",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad, aliquid architecto culpa dolore esse et exercitationem fugit harum, id illo illum iste labore laboriosam magnam nesciunt quae quis repellendus?",
        displayH: "",
        displayD: "",
    };

    constructor(props) {
        super(props);
        this.changeHeadline = this.changeHeadline.bind(this);
        this.changeText = this.changeText.bind(this);
        setInterval(this.changeHeadline, 3000 );
        setInterval(this.changeText, 8000 );
    }

    changeHeadline(){
        let timer = 0;
        let headline = this.state.headline;
        this.setState({displayH: ""});
        for(let i = 0; i < headline.length; i++){
            setTimeout(()=>{this.setState({displayH: this.state.displayH + headline[i]});
            }, timer);
            timer+=100;
        }
    }

    changeText(){
        let timer = 0;
        let text = this.state.description;
        this.setState({displayD: ""});
        for(let i = 0; i < text.length; i++){
            setTimeout(()=>{this.setState({displayD: this.state.displayD + text[i]});
            }, timer);
            timer+=50;
        }
    }
    render() {
        return (
            <div className={style.headline}>
                <h1><span className={style.rootColor}>$root: </span>{this.state.displayH}<span className={style.cursor}>|</span></h1>
                {/*<p>{this.state.displayD}<span className={style.cursor}>|</span></p>*/}
            </div>
        );
    }
}

export default Headline;