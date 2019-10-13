let html = document.getElementById("htmlProgress");
let css =  document.getElementById("cssProgress");
let js = document.getElementById("jsProgress");
let figma = document.getElementById("figmaProgress");

setTimeout(
    function(){
        html.style.width = "90%";
        html.style.color = "#25557c";

        css.style.width = "85%";
        css.style.color = "#25557c";
        
        js.style.width = "60%";
        js.style.color = "#25557c";

        figma.style.width = "50%";
        figma.style.color = "#25557c";
    },1000
);