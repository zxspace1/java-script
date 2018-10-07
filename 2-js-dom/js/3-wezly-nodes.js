//let pierwszyDiv = document.getElementById("parFirst").parentNode; //-najbliższy węzeł
//let pierwszyDiv = document.getElementById("parFirst").parentElement; //-najbliższy el. HTML
//let pierwszyDiv = document.getElementById("parFirst").parentElement.parentElement;
//
//console.log(pierwszyDiv);

//let header = document.getElementsByTagName("header")[0].childNodes;
//let header = document.getElementsByTagName("header")[0].children;
//let header = document.getElementsByTagName("header")[0].firstElementChild;
//let header = document.getElementsByTagName("header")[0].lastElementChild;
//console.log(header);

let linki = document.querySelectorAll("#sectionFirst .link")[1];

//console.log(linki);

console.log(linki.previousElementSibling); // - nastepny brat