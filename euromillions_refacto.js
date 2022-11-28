let stockNbType = "";
const numerosTirage = document.getElementById('numerosTirage');
window.addEventListener("load", (event) => {
    numGenerator(5, 50).concat(numGenerator(2, 12)).forEach((numeros, index) => {
        if (index < 5) {
             stockNbType = "ronds";
        } else {
            stockNbType = "etoiles";
        };
        const div = document.createElement('div');
        div.classList.add(stockNbType, "numeros");
        div.textContent = numeros;
        setTimeout(() => {
            div.style.visibility = 'visible';
        }, 500*index);
        numerosTirage.appendChild(div);
})
});
function numGenerator (nb, range) {
    let arrayNb = []
    while (arrayNb.length < nb) {
        let newNb = Math.ceil(Math.random() * range);
        if(arrayNb.indexOf(newNb) == -1) {
            arrayNb.push(newNb);
        }
    }
    console.log(arrayNb);
    return arrayNb;
};
