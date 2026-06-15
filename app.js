const tituloCancion = document.querySelector(".reproductor-musica h1")
const nombreArtiste = document.querySelector(".reproductor-musica p")

const progreso = document.getElementById("progreso")
const cancion = document.getElementById("cancion")

const iconoControl =document.getElementById("iconoControl")
const botonReproducirPausar = document.querySelector(".controles button.boton-reproducir-pausar");

const botonAtras = document.querySelector(".controles button.atras")
const botonAdelante = document.querySelector(".controles button.adelante")

const canciones = [
  {
    titulo:'Me Curare (Bachata Remix DJC)',
    nombre:'Justin Quiles',
    fuente:'music/Justin Quiles - Me Curare (Bachata Remix DJC).mp3'
  },
  {
    titulo:'Cuerpo Sensual',
    nombre:'Bolivar Peralta',
    fuente:'music/Cuerpo Sensual.mp3'
  },
  {
    titulo:'Atlantico',
    nombre:'Salsa',
    fuente:'music/Atlantico.mp3'
  },
]

let indiceCancionActual = 0;