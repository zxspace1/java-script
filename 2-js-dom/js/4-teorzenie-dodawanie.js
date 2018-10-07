let istniejacyWezel = document.getElementById("parFirst");

let newPargraph = document.createElement("p"); // - pusty "p"
//let newPargraphText = document.createTextNode("Tekst z Java Scriptu");
//newPargraph.appendChild(newPargraphText);
newPargraph.appendChild(document.createTextNode("Tekst z Java Scriptu")); //-appendChild dodajemy text
console.log(newPargraph);

newPargraph.setAttribute("class", "custom-class");
newPargraph.removeAttribute("class");

istniejacyWezel.appendChild(newPargraph);
istniejacyWezel.removeChild(newPargraph);

//console.log(istniejacyWezel);
