let tablica = ["Monika", "Łukasz", "Konrad"];
console.log(tablica);

tablica[0] = "Karolina";

tablica.push("Adam"); //dodaje na końcu
tablica.unshift("Adam"); // dodaje na początku


tablica.shift(); //usuwa elem na początku
tablica.pop(); // usuwa element na końcu

/*1 - znajdź element pod indexem 1
0 - nic nie usuwaj;
"Przemek, Lorem" dodaj "Przemek, Lorem"*/
tablica.splice(1, 0, "Przemek", "Lorem");
/*1 - znajdź element pod indexem 1
2 - usuń 2 elementy;
"Przemek, Lorem" dodaj "Przemek, Lorem"*/
tablica.splice(1, 2, "Przemek", "Lorem" )

console.log(tablica);