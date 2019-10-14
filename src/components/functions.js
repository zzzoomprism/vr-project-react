const visible = {
    add: function(className){
        console.log("add something" + className);
    },
    remove: function(className){

    },
    animate: function(){

    }
};

function visibleLoader(){
    return visible;
}

export default visibleLoader();