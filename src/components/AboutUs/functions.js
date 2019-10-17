import func from "./../Menu/functions";

const visible = {
    add: function(){
        let wireframes = document.getElementsByClassName("about-us-plane-wireframe");
        let aboutUsPlane = document.getElementsByClassName("about-us-plane");
        for(let i = 0; i < aboutUsPlane.length; i++){
            wireframes[i].setAttribute("visible", "true");
            wireframes[i].setAttribute("animation__scale", "property: scale; to: 1 1 1; dur: 500; easing: linear;");
            wireframes[i].setAttribute("animation__segmentsHeight", "property: segments-height; to: 60; dur: 1500;");
            wireframes[i].setAttribute("animation__segmentsWidth", "property: segments-width; to: 60; dur: 1500;");
            wireframes[i].setAttribute("animation__opacity", "property: material.opacity; to: 0; dur: 1500; delay: 2000;");
            aboutUsPlane[i].setAttribute("visible", "true");
            aboutUsPlane[i].setAttribute("animation__scale", "property: scale; to: 1 1 1; dur: 1500; easing: linear; delay: 2000;");
        }

        let text = document.getElementsByClassName("about-us-plane-text");
        for(let i = 0; i < text.length; i++){
            text[i].setAttribute("animation__op", "property: opacity; to: 0.7; dur: 1500; delay: 3500;")
        }
        func.remove();
       return "completed";
    },
    remove: function(){
        let wireframes = document.getElementsByClassName("about-us-plane-wireframe");
        let aboutUsPlane = document.getElementsByClassName("about-us-plane");
        for(let i = 0; i < aboutUsPlane.length; i++){
            aboutUsPlane[i].setAttribute("animation__scale", "property: scale; to: 0 0 0; dur: 1500; easing: linear;");
            aboutUsPlane[i].setAttribute("visible", "false");
            wireframes[i].setAttribute("animation__opacity", "property: material.opacity; to: 1; dur: 1000; delay: 1200;");
            wireframes[i].setAttribute("animation__segmentsHeight", "property: segments-height; to: 0; dur: 1500; delay: 1600;");
            wireframes[i].setAttribute("animation__segmentsWidth", "property: segments-width; to: 0; dur: 1500; delay: 1600;");
            wireframes[i].setAttribute("animation__scale", "property: scale; to: 0 0 0; dur: 500; easing: linear; delay: 3000");
            wireframes[i].setAttribute("visible", "false");
        }

        let text = document.getElementsByClassName("about-us-plane-text");
        for(let i = 0; i < text.length; i++){
            text[i].setAttribute("animation__op", "property: opacity; to: 0.0; dur: 500;")
        }
        func.remove();
        return "completed";
    },
};

function visibleLoader(){
    return visible;
}

export default visibleLoader();