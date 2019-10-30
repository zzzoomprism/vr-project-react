import React from "react";
import style from "./Block.module.css";


class Block extends React.Component{
    render() {
        return (
            <div className={style.gridBlock}>
                <div>
                    <h4>FIRST BLOCK</h4>
                    <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi ducimus fuga laboriosam optio perferendis quas quidem repellat repudiandae ut. Esse fugiat illo iste labore magni! Consectetur modi obcaecati ut?</span>
                       </p>
                </div>
                <div>
                  <h4>SECOND BLOCK</h4>
                   <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi ducimus fuga laboriosam optio perferendis quas quidem repellat repudiandae ut. Esse fugiat illo iste labore magni! Consectetur modi obcaecati ut?</span>
                        </p>
                </div>
                <div>
                  <h4>THIRD BLOCK</h4>
                    <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi ducimus fuga laboriosam optio perferendis quas quidem repellat repudiandae ut. Esse fugiat illo iste labore magni! Consectetur modi obcaecati ut?</span>
                       </p>
                </div>
            </div>
        );
    }
}

export default Block;