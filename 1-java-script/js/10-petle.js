//let number = 10;
//// for lop
//for (let i = 0; i <= number; i++) {
//    console.log(i);
//}

// forEach loop

//let tablica = ["Ania", "Konrad", "Mateusz"];
//
//tablica.forEach(function(element, index) {
//    console.log("Imie " + element + " znajduje sie pod indexem" + index); 
//});

// while loop

//let number = 10;
//let index = 0;
//
//while(number > 0)  {
////    console.log(index++);
//    number--; // to samo number = number - 1;
//    console.log(number);
//   if (number === 5) {
//       
//       
//       break;
//   }
//}

let adam = {
    wiek: 10000,
    włosy: false,
    oczy: true,
    nazwisko: 'Dou'
};

//console.log(adam.nazwisko, adam.włosy);


class Osoba {
    constructor (imie, nazwisko, wiek, kolorOczu) {
        this.name = imie;
        this.lastName = nazwisko;
        this.age = wiek;
        this.eyeColor = kolorOczu;
    }
    printInfo() {
        let info = `Name: ${this.name}, last name: ${this.lastName}, wiek: ${this.age}`;
        console.log(info);

    }
}

let mateusz = new Osoba("Mateusz", "Górski");
//mateusz.age = 30;
//mateusz.kolorOczu = "zielony";
//
//mateusz.kolorOczu = null;

let lukasz = new Osoba("Łukasz", "Nowak", 50, "piwny");

console.log(lukasz.age, lukasz.eyeColor);

lukasz.printInfo();

for (let i in adam) {
    console.log("Klucz " + i + "wartość: " + adam[i]);
}