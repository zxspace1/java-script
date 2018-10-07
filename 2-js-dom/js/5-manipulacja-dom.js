let tablicaParagrafów = document.querySelectorAll("#parSecond p");


tablicaParagrafów.forEach(function(element, index) {
    element.setAttribute("class", "pierwsza-klasa");
    
//    element.style.color = "red";
//    element.innerHTML = "nowy tekst";
//    element.outerHTML = "<a href='#' >Teraz link</a><br />";
//tablicaParagrafów.forEach(function(mati, index) {
 
    let allLinks = document.getElementsByClassName("link");
    
    allLinks[1].href = "https://www.google.com";

    allLinks[1].className = "google class";
    console.log(allLinks[1].classList);
    
//    console.log(mati, index);


//    console.log(element);
});
//console.log(parSecond);