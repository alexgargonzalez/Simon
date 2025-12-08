# Proyecto Simon
Este es un proyecto en el que he desarrollado el clásico juego "Simon", que consiste en memorizar y repetir una secuencia de colores. El objetivo principal ha sido profundizar en el manejo de Arrays, Módulos de ES6 y la manipulación del DOM.

## 1. Funcionamiento del código:
El proyecto está estructurado en módulos para separar la lógica del juego de la interfaz visual:

Lógica (Simon.js):

Utilizo dos arrays principales: listaJuego (la secuencia aleatoria) y listaJugadores (los inputs del usuario).

El juego compara ambas listas en cada clic. Si coinciden, la ronda avanza; si no, el juego termina.

Interfaz (UI.js):

Se encarga de inicializar los elementos HTML y gestionar los eventos (clics).

Uso la librería Anime.js para las animaciones de iluminación de los botones, gestionando la asincronía con Promises y async/await para que la secuencia se reproduzca con el tiempo correcto.

## 2. Desafíos y características pendientes (Control por Voz):
Inicialmente, el proyecto iba a incluir una API de reconocimiento de voz para poder jugar dictando los colores.

El problema: Intenté implementar la API por mi cuenta, pero me encontré con dificultades técnicas que no logré resolver con mis conocimientos actuales.

Mi decisión: Aunque podría haber utilizado Inteligencia Artificial para generar el código y hacerlo funcionar, he preferido no hacerlo. Valoro más ser honesto con mi nivel de aprendizaje actual y dejar esa funcionalidad pendiente hasta que sea capaz de entenderla e implementarla por mí mismo, en lugar de copiar una solución que no comprendo.


Alejandro Garcia Gonzalez
