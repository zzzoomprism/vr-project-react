const gallery = {
    add: function(){
    let gallery = document.getElementsByClassName("curve-gallery-images");
    let angle = 0;
    let an;
    for(let i = 0; i < gallery.length; i++) {
        gallery[i].setAttribute("visible", 'true');
        let rotation = "0 " + `${angle+=40}` + " 0" ;
        gallery[i].setAttribute("animation", "property: rotation; to: " + rotation + " ; dur: 2500;");
        if(gallery[i].getAttribute("direction") === "right")
            an = angle + 360;
        else an = angle - 360;
        gallery[i].setAttribute("animation__rotation", "property: rotation; from: "
            + rotation + ";to: " + "0 " + an + " 0" + "; loop: true; dur: 80000; delay: 2500; easing: linear;" );
    }
},
    remove: function () {
        let gallery = document.getElementsByClassName("curve-gallery-images");
        for(let i = 0; i < gallery.length; i++){
            gallery[i].removeAttribute("animation__rotation");
            gallery[i].setAttribute("animation", "property: rotation; to: 0; dur: 3000;");
            setTimeout(()=>{gallery[i].setAttribute("visible", "false")}, 3500);

        }
    }
};

function galleryLoader(){
    return gallery;
}

export default galleryLoader();



