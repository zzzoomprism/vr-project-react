import React, {useState, useEffect, Fragment} from 'react';
import {Box, Cylinder, Sphere, Plane, Sky, Text, Curvedimage, Camera, Cursor, Image, Ring, Event,Circle} from "react-aframe-ar";
import {Entity, Scene} from "aframe-react";
import MenuContent from "./../../container/VRContent/MenuContent";
import {modelLoading} from "./../../info";
import VRCart from "./components/VRCart";

const VRMenu = (props) => {
    let [count, setCount] = useState(0);
    useEffect(()=>setCount(props.products_count));
    let [loaded, setLoaded] = useState(false);
    let [models, setModels] = useState({data: [], loaded: false});
    useEffect(()=>{
        setTimeout(()=>setLoaded(true), 2000);
        setModels({data: modelLoading(), loaded: true});
    },[]);

    let [modelId, setModelId] = useState("");
    useEffect(()=>{
        setModelId(props.modelId);
    }, [props.modelId]);
    const best_products = models.data.map((el) => {
        if(el.key_word.split(' ').includes("top"))
        return <Entity key={el.id + "helloworld"}>
            <Cylinder segments-height={64} sefments-radial={64}
                material={"color: black;"} position={el.position_x + " " + `${el.position_y - 5}` + " " + el.position_z} radius={4}
                      animation={(modelId === el.id) ? "property: position; to: 0 -10 4; dur: 2000; " : "property: position; to: " + el.position_x + " " + `${el.position_y - 5}` + " " + el.position_z + "; dur: 2000;"}
                      animation__rotation={(modelId === el.id) ? "property: rotation; to: 0 " + `${(el.rotation > 0) ? 180 - el.rotation : -180 - el.rotation}` + " 0; dur: 2000; " : "property: rotation; to: 0 0 0; dur: 2000;"}
                         >
                <Entity gltf-model={el.model} rotation={"0 " + el.rotation + " 0"}
                        position="0 0.5 0" scale={el.scale}
                        events={{
                            'click': () => {
                                props.modelMouseEnter(el.id);
                            },

                        }}/>
            <a-light type={"spot"} position={"0 11 0"} distance={90} angle={25}
                     penumbra={1} intensity={6} rotation={"-90 0 0"} groundColor={"black"}/></Cylinder>

                <Text value={"best product!"} position={el.position_x + " -3 " + el.position_z} rotation={el.text_rotation}
                      wrap-count={13} negate={"false"} side={"double"} letter-spacing={15}
                      color={"white"} opacity={1}
                      animation__position={"property: position; to: " + el.position_x + " -3.5 " + el.position_z + "; dur: 2000; loop: true; dir: alternate; delay: " + `${Math.random() * 1000 + " ;"}`}
                />

                <Text value={el.price + "$"} position={el.position_x + " -5 " + el.position_z} rotation={el.text_rotation}
                      wrap-count={10} negate={"false"} side={"double"} letter-spacing={15}
                      color={"coral"}>
                    <a-circle radius={"0.8"} position={"-2 0.3 0"}
                              material={(props.cartId === el.id) ? "color: coral; side: double; emissive: coral;" : "color: white; side: double; emissive: white;"}>
                        <Image src={"https://image.flaticon.com/icons/svg/1374/1374128.svg"} position={"0 0 0.01"}
                               width={0.6} height={0.6}
                               animation__mouseenter="property: components.material.material.color; type: color; to: blue; startEvents: mouseenter; dur: 500"
                               events={{
                                   'mouseenter': () => {
                                       props.vrCartMouseEnter(el.id);
                                       props.cursorChange(el, true);

                                   },
                                   'mouseleave': () => {
                                       props.vrCartMouseLeave();
                                       props.cursorChange(false)
                                   },

                               }}/>
                    </a-circle>
                </Text>
        </Entity>
        }
    );
    return (
        <Fragment>
            {!loaded && <div className={"vr-loading"}><h3>LOADING...</h3></div>}
        <Box width={30} height={20} depth={30} material={"color: white; side: double;" } position={"0 10 0"}>
            <MenuContent/>
            <div className={(!models.loaded) ? "vr-loading" : "vr-loading-false"}>Loading models... </div>
            {best_products}


           <VRCart count={count}/>
            </Box>
        </Fragment>
    );
};

export default VRMenu;