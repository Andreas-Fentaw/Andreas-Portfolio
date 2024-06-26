let myLink1 = document.querySelector("#myLink1");

mylinksColor = "white";
myLinksColorOut = "rgb(157, 157, 157)";


myLink1.addEventListener("mouseover", function () {
    myLink1.style.color = mylinksColor;
    });
    
myLink1.addEventListener("mouseout", function () {
    myLink1.style.color = myLinksColorOut;
    });
        
//----------------------------------------------------------------------------------------------

let myLink2 = document.querySelector("#myLink2");

        
myLink2.addEventListener("mouseover", function () {
    myLink2.style.color = mylinksColor;
});

myLink2.addEventListener("mouseout", function () {
    myLink2.style.color = myLinksColorOut;

});

//----------------------------------------------------------------------------------------------

let myLink3 = document.querySelector("#myLink3");

myLink3.addEventListener("mouseover", function () {
    myLink3.style.color =  mylinksColor;
});

myLink3.addEventListener("mouseout", function () {
    myLink3.style.color = myLinksColorOut;

});

//----------------------------------------------------------------------------------------------

let myLink4 = document.querySelector("#myLink4");

myLink4.addEventListener("mouseover", function () {
    myLink4.style.color = mylinksColor;
});

myLink4.addEventListener("mouseout", function () {
    myLink4.style.color = myLinksColorOut;
});

// HEADER COLLAPSE JS ------------------------------------------------------------------------------------------

let header = document.querySelector("header");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {

    let scrollThreshold = window.innerHeight * 0.2;

    if (document.body.scrollTop > 65 || document.documentElement.scrollTop > 65) {
      header.style.paddingTop = "0.5vw";
    } else {
      header.style.paddingTop = "2vw";
    }
}