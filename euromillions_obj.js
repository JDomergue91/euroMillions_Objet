const numerosTirage = document.getElementById('numerosTirage');
let stockNbType = "";

window.addEventListener("load", (event) => {

    Tirage.tirageNum(5, 50).concat(Tirage.tirageNum(2, 12)).forEach((numeros, index) => {
       if (index < 5) {
            stockNbType = "ronds";
        } else {
            stockNbType = "etoiles";
        }
        const boules = new Tirage(numeros, stockNbType);

        console.log(boules);
        
        setTimeout(() => {
            boules.getHtml.style.visibility = 'visible';
        }, 500*index);
     
        numerosTirage.append(boules.getHtml);
    });
});