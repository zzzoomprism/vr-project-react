import React from "react";
import style from "./Gallery.module.css";

class Gallery extends React.Component{
    render() {
        return(
            <div>
                <div className={style.galleryBlock}>

                    <div>
                        <img src="https://images.pexels.com/photos/7361/startup-photos.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                    </div>
                    <div>
                        <img src="https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""
                             />
                    </div>
                    <div>
                        <img src="https://images.pexels.com/photos/7374/startup-photos.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""
                              />
                    </div>

                    <div>
                        <img src="https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""
                             height={300}/>
                    </div>
                    <div>
                        <img src="https://images.pexels.com/photos/7112/woman-typing-writing-windows.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""
                             height={300}/>
                    </div>
                    <div>
                        <img src="https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""
                             height={300} />
                    </div>
                </div>
            </div>

        )
    }
}

export default Gallery;