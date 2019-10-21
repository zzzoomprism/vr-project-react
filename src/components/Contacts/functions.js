const cont = {
    add: function(){
        let contactsPlane = document.getElementsByClassName("contacts-plane");
        let contactsSecondPlane = document.getElementsByClassName("contacts-second-plane");
        let contactsImages = document.getElementsByClassName("contact-us-images");
        for(let i = 0; i < contactsPlane.length; i++){
            contactsPlane[i].setAttribute("visible", "true");
            contactsPlane[i].setAttribute("animation__scale", "property: scale; to: 1 1 1; dur: 1000; easing: linear;");
            contactsPlane[i].setAttribute("animation__segmentsH", "property: segments-height; to: 40; easing: linear; delay: 300;");
            contactsPlane[i].setAttribute("animation__segmentsW", "property: segments-width; to: 40; easing: linear; delay: 300;");
            contactsPlane[i].setAttribute("animation__opacity", "property: material.opacity; to: 0; dur: 2000; easing: linear; delay: 2000;");
            contactsSecondPlane[i].setAttribute("animation__scale", "property: scale; to: 1 1 1; dur: 2000; delay: 2000;");
            contactsImages[i].setAttribute("animation__opacity", "property: material.opacity; to: 1; dur: 1000; delay: 3500;");
            contactsImages[i].setAttribute("animation__color", "property: material.color; to: #fff; dur: 1000; delay: 4100;");
        }
    },
    remove: function(){
        let contactsPlane = document.getElementsByClassName("contacts-plane");
        let contactsSecondPlane = document.getElementsByClassName("contacts-second-plane");
        let contactsImages = document.getElementsByClassName("contact-us-images");
        let contactTitle = document.getElementsByClassName("contacts-title");
        let contactDescription = document.getElementsByClassName("contacts-description");
        for(let i = 0; i < contactsPlane.length; i++){
            contactsPlane[i].setAttribute("visible", "false");
            contactsPlane[i].setAttribute("animation__scale", "property: scale; to: 1 0 1;");
            contactsPlane[i].setAttribute("animation__segmentsH", "property: segments-height; to: 0; easing: linear;");
            contactsPlane[i].setAttribute("animation__segmentsW", "property: segments-width; to: 0; easing: linear; ");
            contactsPlane[i].setAttribute("animation__opacity", "property: material.opacity; to: 1; dur: 100; easing: linear;");
            contactsSecondPlane[i].setAttribute("animation__scale", "property: scale; to: 1 0 1; dur: 100;");
            contactsImages[i].setAttribute("animation__opacity", "property: material.opacity; to: 0; dur: 100;");
            contactsImages[i].setAttribute("animation__color", "property: material.color; to: #00fffb; dur: 100;");
        }
    },
};

function contactLoader(){
    return cont;
}

export default contactLoader();