let myLink1 = document.querySelector("#myLink1");

myLink1.addEventListener("mouseover", function () {
    myLink1.style.color = "black";
    });
    
myLink1.addEventListener("mouseout", function () {
    myLink1.style.color = "rgb(76, 76, 76)";

    });
        
//----------------------------------------------------------------------------------------------

let myLink2 = document.querySelector("#myLink2");

        
myLink2.addEventListener("mouseover", function () {
    myLink2.style.color = "black";
});

myLink2.addEventListener("mouseout", function () {
    myLink2.style.color = "rgb(76, 76, 76)";

});

//----------------------------------------------------------------------------------------------

let myLink3 = document.querySelector("#myLink3");

myLink3.addEventListener("mouseover", function () {
    myLink3.style.color = "black";
});

myLink3.addEventListener("mouseout", function () {
    myLink3.style.color = "rgb(76, 76, 76)";

});

//----------------------------------------------------------------------------------------------

let myLink4 = document.querySelector("#myLink4");

myLink4.addEventListener("mouseover", function () {
    myLink4.style.color = "black";
});

myLink4.addEventListener("mouseout", function () {
    myLink4.style.color = "rgb(76, 76, 76)";
});

//----------------------------------------------------------------------------------------------

let header = document.querySelector("header");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {

<<<<<<< Updated upstream
    let scrollThreshold = window.innerHeight * 0.2;

    if (document.body.scrollTop > 65 || document.documentElement.scrollTop > 65) {
      header.style.paddingTop = "0.5vw";
    } else {
      header.style.paddingTop = "2vw";
=======
    let scrollThreshold = window.innerHeight * 0.03;
    let myName = document.querySelector(".myName");
    if (document.body.scrollTop > scrollThreshold || document.documentElement.scrollTop > scrollThreshold) {
      header.style.paddingTop = "0vw";
      header.style.paddingBottom = "0vw";
      myName.style.paddingTop = "6vw";
    } else {
      header.style.paddingTop = "1vw";
      header.style.paddingBottom = "1vw";
      myName.style.paddingTop = "5";
>>>>>>> Stashed changes
    }
}
// MAKE IT SO THE HEADER LINKS GET MOVED CLOSER TO THE TITLE WHEN YOU SCROLL DOWN