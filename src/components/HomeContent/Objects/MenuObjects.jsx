import React from "react";
import style from "./MenuObject.module.css";
import s from "./../Headline/Headline.module.css";

class MenuObjects extends React.Component{
    state={mouseEnter: false, target: ""};
    constructor(props){
        super(props);
        this.getRandomColor = this.getRandomColor.bind(this);
        this.getColor = this.getColor.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    getColor(){
        let color = "rgb(" + this.getRandomColor(0, 255) + " " + this.getRandomColor(0,255) + " " + this.getRandomColor(0, 255) + ")";
        return color;
    }

    getRandomColor(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    handleMouseEnter(event){
        this.setState({mouseEnter: true});
        this.setState({target: event.target.id});
    }

    handleMouseLeave(event){
        this.setState({mouseLeave: false});
        this.setState({target: ""});
    }

    render() {
        return(<div>
            <div className={style.menuVisible} >
                <ul>
                    <li><span className={s.rootColor}>$root:</span> MAIN_MENU</li>
                    <li><a style={{color: this.getColor()}} id="about_us_component"
                           className={(this.state.mouseEnter===true && this.state.target==="about_us_component") ? style.showArrow : style.noneArrow}
                           onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}
                           href={"/about-us"}>ABOUT_US <span>
                        <i className="fas fa-long-arrow-alt-left"></i></span></a></li>
                    <li> <a style={{color: this.getColor()}} href={"/about-us"} id={"contact_us_component"}
                            className={(this.state.mouseEnter===true && this.state.target==="contact_us_component") ? style.showArrow : style.noneArrow}
                            onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>CONTACT_US <span>
                        <i className="fas fa-long-arrow-alt-left"></i></span></a></li>
                    <li> <a style={{color: this.getColor()}} href={"/vr"} id={"vr_component"}
                            className={(this.state.mouseEnter===true && this.state.target==="vr_component") ? style.showArrow : style.noneArrow}
                            onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>PLAY_IN_VR <span>
                        <i className="fas fa-long-arrow-alt-left"></i></span></a></li>
                 </ul>
            </div>
            </div>
        )
    }
}

export default MenuObjects;