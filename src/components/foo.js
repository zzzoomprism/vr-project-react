import menu from "./Menu/functions";
import aboutUs from "./AboutUs/functions";
import gallery from "./Gallery/functions";

const foo = {
    remove: function(){
        menu.remove();
        aboutUs.remove();
        gallery.remove();
        return "Removed all!";
    }
};

function fooLoader(){
    return foo;
}

export default fooLoader();
