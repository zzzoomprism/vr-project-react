import React from "react";
import SidebarMenu from "../../container/HomeContent/SidebarMenu";
import style from "./AboutUs.module.css";
import Footer from "../ShopContent/Footer/Footer";

const Content = (props) => {
   return <div>
       <SidebarMenu/>
       <div className={"content"}>
           <div className={style.title}><h1>About Us</h1></div>
           <div className={style.firstRow}>
               <div>
                   <h3>Numbers</h3>
                   <p><a href="">+375-44-502-502-1</a></p>
                   <p><a href="">+375-44-502-502-1</a></p>
                   <p><a href="">+375-44-502-502-1</a></p>
               </div>
               <div>
                   <h3>Other information</h3>
                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis commodi debitis
                       doloribus ex, hic incidunt ipsum magni natus quae quasi, quis rem suscipit tempore temporibus
                       totam voluptas voluptatem voluptatum. Autem culpa cum delectus dolore error id iure laudantium, quibusdam quo rerum saepe sapiente
                       sint soluta. A aliquid autem corporis, dicta doloremque ducimus illo laborum nesciunt porro quasi
                       quidem, similique.</p>
               </div>
           </div>
           <div>
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1398.0126816157065!2d27.54628360361813!3d53.89322310183472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfe79c5d5f91%3A0x4a6f20abe71d30b!2z0JPQu9Cw0LLQvdGL0Lkg0JrQvtGA0L_Rg9GBINCR0JPQow!5e0!3m2!1sru!2sby!4v1589438073830!5m2!1sru!2sby" style={{width: "100%", height: "500px", border: "none"}}></iframe>
           </div>
           <Footer/>
       </div>
   </div>
};

export default Content;