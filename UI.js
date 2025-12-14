import { animate } from 'https://esm.sh/animejs';

export const UI = {
  verde: null,
  rojo: null,
  azul: null,
  amarillo: null,
  rondas: null,
  btn : [],

  init(config) {
    UI.verde = document.getElementById(config.verde);
    UI.rojo = document.getElementById(config.rojo);
    UI.azul = document.getElementById(config.azul);
    UI.amarillo = document.getElementById(config.amarillo);
    UI.rondas = document.getElementById(config.rondas);

    UI.btn = [UI.verde, UI.rojo, UI.azul, UI.amarillo];
  },


  //Le añado el evento a los botones
  añadirEventos: (simonGame) => {
    UI.btn.forEach(boton => {
      boton.addEventListener("click", () => {
        UI.registrarClick(boton, simonGame);
      });
    });
  },

  registrarClick : (color, simonGame) => {
<<<<<<< HEAD
    

    simonGame.comprobarSecuencia(color);
  
    
=======
    simonGame.listaJugadores.push(color)

    if (!simonGame.enJuego) {
      return;
    }

    const index = simonGame.listaJugadores.length - 1;

    if (simonGame.listaJugadores[index] !== simonGame.listaJuego[index]) {
     alert("Has perdido");
     simonGame.enJuego = false; 
     return;
    }

    if (simonGame.listaJugadores.length === simonGame.listaJuego.length) {
      simonGame.comprobarSecuenciaFinal();
    }    
>>>>>>> e050befee6cef2fef82f2bb0323b7f5218a432d9

  
    

    

  },

  bloquearBotones : () => {
    UI.btn.forEach((botones) => {
        botones.classList.add("bloq");
    });
  },

  desbloquearBotones : () => {
    UI.btn.forEach((botones) => {
        botones.classList.remove("bloq");
    });
  },

  iluminar: (color) => {
    return new Promise(resolve => {
      
      
      animate(color,
      {
        scale:1.1,
        opacity: 1
      })

      setTimeout(() => {
        animate(color,
      {
        scale:1,
        opacity: 0.8
      })
        resolve();
      }, 1000);
    }); 
  },

};
