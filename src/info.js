import sofa from "./media/models/out.glb";
import sofa2 from "./media/models/out2.glb";


const models = [
    {
        id: "1enckj342lk",
        name: "Sofa Caroline",
        description: "lorem Impsum ...",
        price: "2000$",
        image: "",
        model: sofa,
        position: "0 0 -10",
        scale: "0.01 0.01 0.01",
        visible: true,
    },
    {
        id: "21kjfsoih3k24j",
        name: "Sofa Brutality",
        description: "lorem Impsum ...",
        price: "2000$",
        image: "",
        model: sofa2,
        position: "0 0 -17",
        scale: "0.05 0.05 0.05",
        visible: false
    },
    ];

function modelLoading(){
    return models;
}

export default modelLoading();