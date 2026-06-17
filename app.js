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

let indiceCancionActual = 1;

function actualizarInfoCancion() {
  tituloCancion.textContent= canciones[indiceCancionActual].titulo
  nombreArtiste.textContent= canciones[indiceCancionActual].nombre
  cancion.src = canciones[indiceCancionActual].fuente
  cancion.addEventListener('loadeddata', function(){})
};

botonReproducirPausar.addEventListener('click', reproducirPausar);

function reproducirPausar() {
  

  if (cancion.paused) {
    reproducirCancion()
  }else {
    pausarCancion()
  }
}

function reproducirCancion() {
  cancion.play()
  iconoControl.classList.add('bi-pause-fill')
  iconoControl.classList.remove('bi-play-fill')
}
function pausarCancion() {
  cancion.pause()
  iconoControl.classList.remove('bi-pause-fill')
  iconoControl.classList.add('bi-play-fill')
}

cancion.addEventListener('timeupdate', function(){
  if (!cancion.paused) {
    progreso.value = cancion.currentTime
  }
})

progreso.addEventListener('input',function(){
  cancion.currentTime = progreso.value
})

progreso.addEventListener('change',function(){
  reproducirCancion()
})

actualizarInfoCancion()