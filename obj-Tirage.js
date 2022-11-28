class Tirage {
    constructor (num, type) {
        this.num = num;
        this.type = type;
        this.html = document.createElement("div");
        this.classNum = "numeros"
    }

    get getHtml() {
        this.html.classList.add(this.type, this.classNum)
        this.html.textContent = this.num;
        return this.html;
    }

    static tirageNum (nb, range) {

        let arrayNb = []
        while (arrayNb.length < nb) {
            let newNb = Math.ceil(Math.random() * range);
                if(arrayNb.indexOf(newNb) == -1) {
                    arrayNb.push(newNb);
                }
        }
        console.log(arrayNb);
        return arrayNb;
    }
    
};