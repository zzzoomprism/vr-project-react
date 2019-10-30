import React from "react";
import style from "./Headline.module.css";

class Headline extends React.Component{
    state={
        headline: "WELCOME TO IT_COMPANY!",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad, aliquid architecto culpa dolore esse et exercitationem fugit harum, id illo illum iste labore laboriosam magnam nesciunt quae quis repellendus?",
        displayH: "",
        displayD: "",
        colorD: ""
    };

    constructor(props) {
        super(props);
        this.changeHeadline = this.changeHeadline.bind(this);
        this.changeText = this.changeText.bind(this);
        this.getRandomColor = this.getRandomColor.bind(this);
        this.handleLoad = this.handleLoad.bind(this);

    }

    componentDidMount() {
        window.addEventListener('load', this.handleLoad);
    }

    componentWillUnmount() {
        clearInterval(this.timerH);
        clearInterval(this.timerD);
    }

    handleLoad(){
        this.timerH = setInterval(this.changeHeadline, 3000 );
        this.timerD = setInterval(this.changeText, 8000 );
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

    getRandomColor(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }


    changeText(){
        let timer = 0;
        let text = this.state.description.split(" ");
        this.setState({displayD: ""});
        for(let i = 0; i < text.length; i++){
            timer+=50;
            let color = "rgb(" + this.getRandomColor(0, 255) + " " + this.getRandomColor(0,255) + " " + this.getRandomColor(0, 255) + ")";
            this.setState({colorD: color});
            setTimeout(()=>{this.setState({displayD: this.state.displayD + " " +  text[i]});
            }, timer);
        }
    }
    render() {
        return (
            <div className={style.headline}>
                <h1><span className={style.rootColor}>$root: </span>{this.state.displayH}<span className={style.cursor}>|</span></h1>
                <p style={{color: this.state.colorD}} className={style.description}>{this.state.displayD}<span className={style.cursor}>|</span></p>
            </div>
        );
    }
}

export default Headline;