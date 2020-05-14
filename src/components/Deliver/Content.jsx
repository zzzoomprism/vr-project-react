import React from "react";
import SidebarMenu from "../../container/HomeContent/SidebarMenu";
import Footer from "../ShopContent/Footer/Footer";
import style from "./Deliver.module.css";

const Content = (props) => {
    return <div>
        <SidebarMenu/>
        <div className={"content"}>
            <div className={style.title}><h1>Deliver</h1></div>
            <div className={style.statistics}>
                <div>
                    <h4>Already deliver</h4>
                    <p>1250</p>
                </div>
                <div>
                    <h4>Already sold</h4>
                    <p>3600</p>
                </div>
                <div>
                    <h4>Already sold</h4>
                    <p>1050</p>
                </div>
            </div>
            <div className={style.firstRow}>
                <div><h4>We deliver to next cities: </h4>
                    <p>Minsk</p>
                    <p>Soligorsk</p>
                    <p>Slutsk</p>
                    <p>Smolevichi</p>
                    <p>Zhodino</p>
                    <p>Borisov</p>
                    <p>Vitebsk</p>
                </div>
                <div><h4>Our services: </h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores beatae blanditiis consequuntur, cum cumque delectus, deleniti dolores earum exercitationem inventore itaque labore laboriosam odit officiis omnis provident quae sequi voluptatibus!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dignissimos eos illum ipsum labore minima minus optio quasi, vel voluptatibus. Aspernatur excepturi magni odit placeat tempora. Dignissimos perspiciatis quasi sequi.</p>
                </div>
            </div>
            <div className={style.secondRow}>
                <h4>Rules:</h4>
                <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius est excepturi maxime minima, quasi tempora veniam. A adipisci earum excepturi, inventore ipsa labore nostrum quam quas quia quibusdam, temporibus, voluptatum?</span><span>Error exercitationem explicabo impedit minus nemo, praesentium provident vel? Aliquid cum deleniti, dolores error eum, exercitationem facilis id impedit labore nam non quia quibusdam quisquam ratione sint voluptas voluptates voluptatibus.</span><span>Accusamus, aperiam dolore esse itaque iusto maxime molestias ratione recusandae reiciendis voluptatum. Aliquid aperiam asperiores atque aut consequuntur, corporis dolorem dolorum facilis neque repellat repudiandae sapiente, sed sint velit voluptates!</span></p>
            </div>

            <div>

            </div>
            <Footer/>
        </div>
    </div>
};

export default Content;