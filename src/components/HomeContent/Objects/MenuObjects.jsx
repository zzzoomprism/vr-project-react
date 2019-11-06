import React from "react";
import style from "./MenuObject.module.css";
import s from "./../Headline/Headline.module.css";
import {Link, NavLink} from "react-router-dom";

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
                           href={"/about-us"}>OUR_TEAM <span>
                        <i className="fas fa-long-arrow-alt-left"></i></span></a></li>
                    <li><Link  id={"vr_component"} to={"/vr"}
                               className={(this.state.mouseEnter===true && this.state.target==="vr_component") ? style.showArrow : style.noneArrow}
                               onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>PLAY_IN_VR <span>
                        <i className="fas fa-long-arrow-alt-left"></i></span></Link>
                    </li>
                    <li> <a style={{color: this.getColor()}} href={"#gallery"} id={"gallery"}
                            className={(this.state.mouseEnter===true && this.state.target==="gallery") ? style.showArrow : style.noneArrow}
                            onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>GALLERY <span>
                        <i className="fas fa-long-arrow-alt-left"></i></span></a></li>
                 </ul>
            </div>
            </div>
        )
    }
}

export default MenuObjects;