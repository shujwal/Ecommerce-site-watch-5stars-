// function for showing and hiding the text by pressing ('Read More' and 'Read Less')
function myfun() {
    // variables
    let dots = document.getElementById("dots");
    let more = document.getElementById("more");
    let button = document.getElementById("button");

    // condition 
    if(more.style.display == "none"){
        more.style.display="inline";
        button.innerHTML="Read Less";
        dots.style.display="none";

    } else{
        more.style.display="none";
        button.innerHTML="Read More";
        dots.style.display="inline";
    }
};