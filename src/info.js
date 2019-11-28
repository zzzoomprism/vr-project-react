import sofa from "./media/models/out.glb";
import sofa2 from "./media/models/out2.glb";


const models = [
    {
        id: "1enckj342lk",
        name: "Sofa Caroline",
        description: "lorem Impsum ...",
        price: "2000$",
        image: "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
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
        image: "https://images.pexels.com/photos/3264493/pexels-photo-3264493.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        model: sofa2,
        position: "0 0 -17",
        scale: "0.05 0.05 0.05",
        visible: false
    },
    {
        id: "21ewrth3k24j",
        name: "Sofa Brutality",
        description: "lorem Impsum ...",
        price: "2000$",
        image: "https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
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