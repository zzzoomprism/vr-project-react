import React from "react";
import style from "./HomeContent.module.css";
import MenuObject from "./Objects/MenuObjects";
import Demonstrate from "./Demonstrate/Demonstrate";
import MenuButton from "./MenuButton/MenuButton";
import Block from "./Block/Block";
import AdvBlock from "./AdvBlock/AdvBlock";
import Employees from "./Employees/Employees";
import Gallery from "./Gallery/Gallery";
import employees from "./../contacts_info";
import Footer from "./Footer/Footer";


class HomeContent extends React.Component{
    state={
        fullWidth: false,
        leftPosition: 0,
        step: null,
    };

    constructor(props){
        super(props);
        this.onPrevHandleClick = this.onPrevHandleClick.bind(this);
        this.onNextHandleClick = this.onNextHandleClick.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    componentDidMount() {
        if(window.innerWidth <= 960) {
            this.setState({step: 100});
            this.setState({fullWidth: true});
        }
        else{
            this.setState({step: 50});
            this.setState({fullWidth: false});
        }
    }

    componentWillMount() {
        window.addEventListener("resize", this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions)
    }

    updateWindowDimensions() {
        if(window.innerWidth <= 960){
            this.setState({leftPosition: 0});
            this.setState({step: 100});
            this.setState({fullWidth: true});
        }
        else {
            this.setState({leftPosition: 0});
            this.setState({step: 50});
            this.setState({fullWidth: false});
        }
    }

    onPrevHandleClick(){
        if(this.state.leftPosition !== 0) {
            this.setState({leftPosition: this.state.leftPosition + this.state.step});
        }
    }

    onNextHandleClick(){
        if(this.state.fullWidth === false && this.state.leftPosition !== (employees.length * this.state.step /2) *(-1) ){
                this.setState({leftPosition: this.state.leftPosition - this.state.step});
        }
        if(this.state.fullWidth === true && this.state.leftPosition !== (employees.length * this.state.step - this.state.step) *(-1)){
            this.setState({leftPosition: this.state.leftPosition - this.state.step});
        }
    }

    render() {
        let leftPx = this.state.leftPosition;
        this.employeesInformation = employees.map(info=>
            <Employees key={info.id} title={info.title} img={info.img} description={info.description} left={ `${leftPx+=this.state.step}` - this.state.step + "%"}/>);
        return(
            <div className={style.home}>
                    <MenuButton/>
                    <Demonstrate/>
                    <Block/>
                    <AdvBlock/>
                <div className={style.employeeHeadline}>
                    <h3>OUR TEAM</h3>
                </div>
                <div className={style.mainEmpContainer}>
                    {this.employeesInformation}
                </div>
                <div className={style.slideButton}>
                    <a onClick={this.onPrevHandleClick}><i className="fas fa-long-arrow-alt-left"></i> prev</a>
                    <a onClick={this.onNextHandleClick}>next <i className="fas fa-long-arrow-alt-right"></i></a>
                </div>
                <Gallery/>
                <Footer/>
            </div>
        )
    }
}

export default HomeContent;