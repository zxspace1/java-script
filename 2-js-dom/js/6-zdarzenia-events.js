 let naszH2 = document.querySelector("#sectionFirst > h2");

 function pokazNaClicku() {
     console.log(naszH2.innerHTML);
 }
 naszH2.onclick = pokazNaClicku;
 //naszH2.removeEventListener("click", pokazNaClicku);

 let mainHeader = document.querySelector("#main-header");

 function mouseOverEvent() {
     mainHeader.style.color = "red";

 }

 function mouseOutEvent() {
     mainHeader.style.color = "green";

 }


 mainHeader.addEventListener("mouseover", mouseOverEvent);
 mainHeader.removeEventListener("mouseover", mouseOverEvent);


 mainHeader.addEventListener("mouseout", mouseOutEvent);
 mainHeader.removeEventListener("mouseout", mouseOutEvent);

let superLink = document.getElementById("super-link");
function zablokuj(domyslneZachowanie) { 
    domyslneZachowanie.preventDefault();
    
console.log("click");
    
}

superLink.onclick = zablokuj;


superLink.onclick = zablokuj;

// stop propagation
function clickHeader (domyslneZachowanie) {
    domyslneZachowanie.stopPropagation();
    console.log("Kliknieto w header");
}

function clickH1 (domyslneZachowanie) {
    domyslneZachowanie.stopPropagation();
    console.log("Kliknieto w <h1>");
}

document.querySelector("header").onclick = clickHeader;
document.querySelector("#main-header").onclick = clickH1;




