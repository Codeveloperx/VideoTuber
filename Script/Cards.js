import { cards } from "../data/data.js";
import { mostrarCards } from "../modules/mostrar.js";

const cards_video = document.querySelector(".cards");
let video_agg = JSON.parse(localStorage.getItem('nuevo_video'));
cards.push(video_agg);

mostrarCards(cards_video, cards);

document.addEventListener("click", ({ target }) => {
    if (target.classList.contains("categoria")) {
      const id_categoria = target.id;
      const categorias = cards.filter((status) => status.categorie === id_categoria);
      if(id_categoria ==='todos'){
          mostrarCards(cards_video, cards);
      }else{
        mostrarCards(cards_video, categorias)
      }
    }else if(target.classList.contains('cardPersonaje')){
        let idcard = target.id;
        let videocard = cards.find(item=> item.id == idcard);
        let indice = cards.indexOf(videocard);
        localStorage.setItem('indice',indice)
        localStorage.setItem('Video', JSON.stringify(videocard));
        window.location.href = '../pages/video_details.html'
    }
  });




//Evento que me permite capturar y filtrar por categorias
// ctg_musica.addEventListener('click', ()=>{
//     const musica = cards.filter((status)=>status.categorie === "musica");
//     cards_video.innerHTML = "";
//     musica.forEach((element)=>{
//         const {id, poster,name,publisher, views, date} = element;
//         cards_video.innerHTML += `
//         <div class="cards_info">
//         <img class='cardPersonaje' id=${id} src="${poster}">
//         <div class="box_card">
//         <h3>${name}</h3>
//         <span>${publisher}</span>
//         <p>${views} - ${date}</p>
//         </div>
//         </div>`
//     })
// })

// let saludo = document.getElementById("saludo");
// const cardsC = document.getElementById('cards')
// let nombre = localStorage.getItem("nombre");
// let masoSeleccionado = JSON.parse(localStorage.getItem('mazo'));
// let cartasSeleccionadas = masoSeleccionado ? masoSeleccionado : [];
// let contador = document.querySelector('a');

// saludo.textContent = `Hola ${nombre}, te damos la bienvenida a Clash Royale`

// mostrarCards(cardsC, cards);
// contador.innerHTML = `
//          <button>${cartasSeleccionadas.length}</button>
//          `

// document.addEventListener('dblclick', ({ target }) => {

//     if (target.classList.contains('cardPersonaje')) {
//         if (cartasSeleccionadas.length < 8) {
//             Swal.fire(
//                 'Felicidades!',
//                 'Carta agregada correctamente',
//                 'success'
//               )
//             let idCarta = target.id;
//             let carta = cards.find(item => item.id == idCarta);
//             let indice = cards.indexOf(carta);
//             cards.splice(indice, 1);

//             mostrarCards(cardsC, cards);
//             cartasSeleccionadas.push(carta);

//             localStorage.setItem('mazo', JSON.stringify(cartasSeleccionadas));
//             contador.innerHTML = `
//              <button>${cartasSeleccionadas.length}</button>
//              `
//         } else {
//             Swal.fire(
//                 'Oops!',
//                 'Ya no puedes agregar más cartas',
//                 'warning'
//               )
//         }
//     }
// });
