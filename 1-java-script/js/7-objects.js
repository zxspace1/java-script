let adam = {
    wiek: 10000,
    włosy: false,
    oczy: true,
    nazwisko: 'Dou'
};

//console.log(adam.nazwisko, adam.włosy);


class Osoba {
    constructor (imie, nazwisko,wiek, kolorOczu) {
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