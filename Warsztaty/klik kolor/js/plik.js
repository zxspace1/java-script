let par1 = document.getElementById("par1");
let par2 = document.getElementById("par2");

function ustawTlo() {
    
    par1.style.backgroundColor="green";
    par2.style.backgroundColor="gold";
    
}

document.querySelector('button').onclick = ustawTlo;
