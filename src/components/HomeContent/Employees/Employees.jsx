import React from "react";
import style from "./Employees.module.css";
import cur from "./../Headline/Headline.module.css";

class Employees extends React.Component{
    state={
        headline: "",
        description: "",
        displayH: "",
        displayD: "",
        colorH: "",
        colorD: ""
    };

    constructor(props){
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
        this.setState({headline: this.props.title});
        this.setState({description: this.props.description});
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
            let color = "rgb(" + this.getRandomColor(0, 255) + " " + this.getRandomColor(0,255) + " " + this.getRandomColor(50, 255) + ")";
            this.setState({colorH: color});
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
            let color = "rgb(" + this.getRandomColor(0, 255) + " " + this.getRandomColor(0,255) + " " + this.getRandomColor(50, 255) + ")";
            this.setState({colorD: color});
            setTimeout(()=>{this.setState({displayD: this.state.displayD + " " +  text[i]});
            }, timer);
        }
    }
    render() {
        return (
                <div className={style.innerEmpBlock} style={{left: this.props.left}} >
                    <div className={style.innerBlockImageFilter}>
                    <img src={this.props.img}
                         alt="" height={350}/>
                    </div>
                    <div className={style.innerBlockEmpTitle}>
                        <h4 style={{color: this.state.colorH}}>{this.state.displayH} <span className={cur.cursor}>|</span></h4>
                        <p style={{color: this.state.colorD}}>{this.state.displayD} <span className={cur.cursor}>|</span></p>
                    </div>
                </div>

        );
    }
}

export default Employees;