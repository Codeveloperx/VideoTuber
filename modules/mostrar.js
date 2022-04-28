export function mostrarCards( contenedor, array){
    contenedor.innerHTML = ""
    array.forEach(function(card){
        const { poster, id, name, publisher, views, date} = card
        contenedor.innerHTML += 
        `<div class="cards_info">
        <img class='cardPersonaje' id=${id} src="${poster}">
        <span><img class="avatar" src="${poster}"></span>
        <div class="box_card">
        <h3>${name}</h3>
        <span>${publisher}</span>
        <p>${views} - ${date}</p>
        </div>
        </div>`
    })
}

export function mostrarVideo( contenedor, array){
    contenedor.innerHTML = ""
    array.forEach(function(card){
        const { poster, id, name, publisher, views, date,video} = card
        contenedor.innerHTML += 
        `<video src=${video} id=${id} controls></video>
            <div class="box">
            <span><img class="avatar" src="${poster}"></span>
                <h2>${name}</h2>
                <p>${views} - ${date}</p>
            </div>`
    })
}