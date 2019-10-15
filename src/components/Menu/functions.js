const menu = {
    add: function(){

    },
    remove: function(){
        let menuElement = document.getElementsByClassName("menu");
        for(let i = 0; i < menuElement.length; i++){
            menuElement[i].setAttribute("animation", "property: scale; to: 0 0 0; dur: 500;");
            setTimeout(()=>{menuElement[i].setAttribute("visible", "false");},600 )

        }
    }
};

function menuLoader(){
    return menu;
}

export default menuLoader();