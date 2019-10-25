const manipulation= {
    firstPlane: {
        visible: {
            animation__scale: "property: scale; to: 1 1 1; dur: 1000; easing: linear;",
            animation__segmentsH: "property: segments-height; to: 40; easing: linear; delay: 300;",
            animation__segmentsW: "property: segments-width; to: 40; easing: linear; delay: 300;",
            animation__opacity: "property: material.opacity; to: 0; dur: 2000; easing: linear; delay: 2000;"
        },
        not_visible: {
            animation__scale: "property: scale; to: 1 0 1; dur: 1000; easing: linear;",
            animation__segmentsH: "property: segments-height; to: 0; easing: linear; ",
            animation__segmentsW: "property: segments-width; to: 0; easing: linear;",
            animation__opacity: "property: material.opacity; to: 1; dur: 2000; easing: linear; "
        }
    },
    secondPlane: {
        visible: {
            animation__scale: "property: scale; to: 1 1 1; dur: 2000; ",
        },
        not_visible: {
            animation__scale: "property: scale; to: 1 0 1; dur: 2000; "
        }
    },
    image: {
        visible: {
            animation__opacity: "property: material.opacity; to: 1; dur: 1000; delay: 3500;",
            animation__color: "property: material.color; to: #fff; dur: 1000; delay: 4100;"
        },
        not_visible: {
            animation__opacity: "property: material.opacity; to: 0; dur: 1000; delay: 3500;",
            animation__color: "property: material.color; to: #00fffb; dur: 1000; delay: 4100;"
        }
    }
};

function loader(){
    return manipulation;
}

export default loader();