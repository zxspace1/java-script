/*
function wyswietlImie (imie) {
//    return imie;
    console.log(imie);
}

let wyswietlImie = function (imie) {
    console.log(imie);
}
//console.log(wyswietlImie("Tomek"));
let wynikWyswietlImie = wyswietlImie("Krystian");

console.log(wynikWyswietlImie);

//wyswietlImie("Tomek");
*/
/*
function dodaj(jeden, dwa, trzy) {
    let result = jeden + dwa + trzy;
    return result;
}

//let sum = dodaj(1, 2, 3);
//console.log(sum);
console.log(dodaj(1, 2, 3))*/

//ES6 functions

//// = jeden parametr
//
//let wyswietlImie = imie => return imie;
//
//console.log(wyswietlImie("Ala"));

//// = wiecej niż jeden parametr

//let wyswietlImie = (imie, imie2) => "Imie : " + imie +  "imie2" + imie2;

let wyswietlImie = (imie, imie2) => {
    return " Imie : " + imie +  " imie2 " + imie2;
}

console.log(wyswietlImie("Ala", "Karol"));

