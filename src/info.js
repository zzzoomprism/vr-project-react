import sofa from "./media/models/out.glb";
import sofa2 from "./media/models/out2.glb";


const models = [
    {
        id: "1enckj342lk",
        name: "Sofa Caroline",
        short_description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci blanditiis consequatur consequuntur magni? Est\n" +
            "    hic illum numquam odit quidem quo repellendus suscipit voluptate. Aut corporis nobis quidem sit ullam? Vero.",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci blanditiis consequatur consequuntur magni? Est\n" +
            "    hic illum numquam odit quidem quo repellendus suscipit voluptate. Aut corporis nobis quidem sit ullam? Vero.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci blanditiis consequatur consequuntur magni? Est\n" +
            "    hic illum numquam odit quidem quo repellendus suscipit voluptate. Aut corporis nobis quidem sit ullam? Vero.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci blanditiis consequatur consequuntur magni? Est\n" +
            "    hic illum numquam odit quidem quo repellendus suscipit voluptate. Aut corporis nobis quidem sit ullam? Vero.",
        price: 2000,
        buy_count: 1000,
        image: "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        model: sofa,
        position: "0 -10 -10",
        scale: "0.01 0.01 0.01",
        visible: true,
    },
    {
        id: "21kjfsoih3k24j",
        name: "Sofa Brutality",
        short_description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci blanditiis consequatur consequuntur magni? Est\n" +
            "    hic illum numquam odit quidem quo repellendus suscipit voluptate. Aut corporis nobis quidem sit ullam? Vero.",
        description: "lorem Impsum ...",
        price: 3050,
        buy_count: 20,
        image: "https://images.pexels.com/photos/3264493/pexels-photo-3264493.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        model: sofa2,
        position: "0 0 -17",
        scale: "0.05 0.05 0.05",
        visible: false
    },
    {
        id: "21ewrth3k24j",
        name: "Sofa Brutality",
        short_description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci blanditiis consequatur consequuntur magni? Est\n" +
            "    hic illum numquam odit quidem quo repellendus suscipit voluptate. Aut corporis nobis quidem sit ullam? Vero.",
        description: "lorem Impsum ...",
        price: 1050,
        buy_count: 45,
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