import { mostrarCards, mostrarVideo } from "../modules/mostrar.js";
import { cards } from "../data/data.js";


const contenedor = document.querySelector('.sugeridos');
const contenedorSelect = document.querySelector('.card_select');
let recibido = JSON.parse(localStorage.getItem('Video'));
let video_guardado = [];
let indice = localStorage.getItem('indice');

indice = Number(indice);
video_guardado.push(recibido);

console.log(cards.splice(indice, 1))

mostrarVideo(contenedorSelect, video_guardado);
let filtrado = cards.slice(1, 7)
mostrarCards(contenedor, filtrado);
console.log(filtrado);