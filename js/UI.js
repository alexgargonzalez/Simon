export const UI = {
  verde: null,
  rojo: null,
  azul: null,
  amarillo: null,

  init(config) {
    UI.verde = document.getElementById(config.verde);
    UI.rojo = document.getElementById(config.rojo);
    UI.azul = document.getElementById(config.azul);
    UI.amarillo = document.getElementById(config.amarillo);
  },

  iluminar: (color) => {
    return new Promise(resolve => {
      color.classList.add("active");
      
      setTimeout(() => {
        color.classList.remove("active");
        resolve();
      }, 1000);
    }); 
  },

};
