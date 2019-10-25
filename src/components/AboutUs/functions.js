const manipulation={
    wireframe: {
        visible: {
            animation_scale: "property: scale; to: 1 1 1; dur: 500; easing: linear;",
            animation_segmentsHeight: "property: segments-height; to: 60; dur: 1500;",
            animation_segmentsWidth: "property: segments-width; to: 60; dur: 1500;",
            animation_opacity: "property: material.opacity; to: 0; dur: 1500; delay: 2000;",
        },
        not_visible: {
            animation_scale: "property: scale; to: 1 0 1; dur: 500; easing: linear;",
            animation_segmentsHeight: "property: segments-height; to: 0; dur: 1500;",
            animation_segmentsWidth: "property: segments-width; to: 0; dur: 1500;",
            animation_opacity: "property: material.opacity; to: 1; dur: 1500; delay: 2000;",
        },
    },
    plane:{
        visible:{
            animation_scale: "property: scale; to: 1 1 1; dur: 1500; easing: linear; delay: 2000;"
        },
        not_visible: {
            animation_scale: "property: scale; to: 1 0 1; dur: 1500; easing: linear; delay: 2000;"
        }
    },
    text: {
        visible: {
            animation_opacity: "property: opacity; to: 0.7; dur: 1500; delay: 3500;"
        },
        not_visible: {
            animation_opacity: "property: opacity; to: 0; dur: 1500; delay: 3500;"
        }
    }
};

function loader(){
    return manipulation;
}

export default loader();