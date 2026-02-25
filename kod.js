function nagyitKep(melyikKep) {
    document.getElementById("nagykep").src = melyikKep;
}

function visszaKep() {
    document.getElementById("nagykep").src = "ures.jpg";
}

function kivalaszt(melyikTermek) {
    let mennyiseg = prompt("Hány darabot szeretne?"); 
    if (mennyiseg !== null && mennyiseg !== "") {
        let kosarDiv = document.getElementById("kosar");
        let ujElem = document.createElement("p");
        ujElem.textContent = mennyiseg + " db " + melyikTermek;
        kosarDiv.appendChild(ujElem);
    }
}1