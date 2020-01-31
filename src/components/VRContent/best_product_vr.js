import sofa from "./../../media/models/out.glb";

const products = [
    {
        id: "12233sdasf",
        title: "Caroline",
        price: "2500$",
        position_x: -10,
        position_y: 2.3,
        position_z: 2 ,
        rotation: "0 90 0",
        model_src: sofa,
        text_rotation: "0 90 0",
        key_words: "top"
    },
    {
        id: "134233sdasf",
        title: "Caroline",
        price: "2500$",
        position_x: 11,
        position_y: 2.3,
        position_z: 2,
        rotation: "0 -90 0",
        model_src: sofa,
        text_rotation: "0 -90 0",
        key_words: "top"
    },
    {
        id: "122342dsdfgsdasf",
        title: "Caroline",
        price: "2500$",
        position_x: -5,
        position_y: 2.3,
        position_z: 10,
        rotation: "0 150 0",
        model_src: sofa,
        text_rotation: "0 150 0",
        key_words: "top"
    },
    {
        id: "12123gsf33sdasf",
        title: "Caroline",
        price: "2500$",
        position_x: 6,
        position_y: 2.3,
        position_z: 10,
        rotation: "0 -150 0",
        model_src: sofa,
        text_rotation: "0 -150 0",
    },
];

function infoLoader(){
    return products;
}

export default infoLoader();