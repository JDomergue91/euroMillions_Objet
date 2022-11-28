let numerosRond = [];
let numerosEtoile = [];
const numerosTirage = document.getElementById('numerosTirage');
window.addEventListener("load", (event) => {
while (numerosRond.length < 5) {
    let newNumberRond = Math.ceil(Math.random() * 50);
    if (numerosRond.indexOf(newNumberRond) == -1) {
        numerosRond.push(newNumberRond);
    }
}
console.log(numerosRond);
while (numerosEtoile.length < 2) {
    let newNumberEtoile = Math.ceil(Math.random() * 12);
    if (numerosEtoile.indexOf(newNumberEtoile) == -1) {
        numerosEtoile.push(newNumberEtoile);
    }
}
console.log(numerosEtoile)
// creation dynamique des numeros du tirage
numerosRond.forEach((rond, index) =>{
    const divRond = document.createElement('div');
    divRond.classList.add("ronds", "numeros");
    divRond.textContent = rond;
    setTimeout(() => {
        divRond.style.visibility = 'visible';
    }, 500*index); 
    numerosTirage.appendChild(divRond);
})
// creation dynamique des numeros du tirage
numerosEtoile.forEach((etoile, index )=>{

    const divEtoile = document.createElement('div');
    divEtoile.classList.add("etoiles", "numeros");
    divEtoile.textContent = etoile;
    setTimeout(() => {
        divEtoile.style.visibility = 'visible';
    }, 2500 + 500* index);
    numerosTirage.appendChild(divEtoile);
})
});
