import { UI } from "./UI.js";




export class Simon {

    constructor(){
        
    UI.init({
        verde: "verde",
        rojo: "rojo",
        azul: "azul",
        amarillo: "amarillo"
    });

    this.listaJugadores = [];
    this.listaJuego = [];

    this.btn = [UI.verde, UI.rojo, UI.azul, UI.amarillo];

      

    this.btn.forEach(botones => {
        botones.addEventListener("click", () => {this.registrarClick(botones)});
    });
    }


    iniciarJuego() {
        this.listaJuego = []
        this.listaJugadores = []
        this.genenarSecuencia();
        this.reproducirSecuencia();

    }

    genenarSecuencia() {
        let indiceAleatorio = Math.floor(Math.random() * this.btn.length);
        this.listaJuego.push(this.btn[indiceAleatorio]);
    }

    async reproducirSecuencia() {
        for (const elemento of this.listaJuego) {
            await UI.iluminar(elemento);
        }
    }

    registrarClick(color) {
        this.listaJugadores.push(color);
        

        if(this.listaJuego.length === this.listaJugadores.length){
            
            this.comprobarSecuenciaFinal();
            this.listaJugadores = [];
        }
        
        
    }

   

    continuarJuego(){
        this.genenarSecuencia();
        this.reproducirSecuencia();
    }

    comprobarSecuenciaFinal() {
    for (let index = 0; index < this.listaJuego.length; index++) {
        if(this.listaJuego[index] != this.listaJugadores[index]) {
            alert("Has perdido");
            return;
        }
    }
    this.continuarJuego(); 
}
}
    