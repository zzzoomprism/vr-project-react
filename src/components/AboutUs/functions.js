import func from "./../Menu/functions";

const visible = {
    add: function(){
        let aboutUsPlane = document.getElementsByClassName("about-us-plane");
        for(let i = 0; i < aboutUsPlane.length; i++){
            aboutUsPlane[i].setAttribute("visible", "true");
            aboutUsPlane[i].setAttribute("animation__scale", "property: scale; to: 1 1 1; dur: 1500; easing: linear;");
            aboutUsPlane[i].setAttribute("material", "transparent: true; opacity: 0.4; color: #00fffb; side: double;");
        }

        let text = document.getElementsByClassName("about-us-planetext");
        func.remove();
       return "completed";
    },
    remove: function(){

    },
};

function visibleLoader(){
    return visible;
}

export default visibleLoader();