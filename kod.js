function nagyitKep(melyikKep) {
    document.getElementById("nagykep").src = melyikKep;
}

function visszaKep() {
    document.getElementById("nagykep").src = "ures.jpg";
}

function szamolas() {
    let vegosszeg = 0;
    for (let i = 1; i <= 5; i++) {
        let mennyisegInput = document.getElementById("ertek" + i);
        let egysegarCella = document.getElementById("ar" + i);
        let reszosszegCella = document.getElementById("resz" + i);
        let darab = Number(mennyisegInput.value);
        let ar = Number(egysegarCella.innerText);
        let reszosszeg = ar * darab;
        reszosszegCella.innerText = reszosszeg;
        vegosszeg = vegosszeg + reszosszeg;
    }
    document.getElementById("osszesen").innerText = vegosszeg;
}
