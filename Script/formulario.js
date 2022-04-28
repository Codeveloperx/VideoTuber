let boton = document.querySelector("#box_submit");


boton.addEventListener("click", () => {
    let nombre = document.getElementById('nombre').value;
    let publisher = document.querySelector("#publisher").value;
    let views = document.querySelector("#views").value;
    let date = document.querySelector("#date").value;
    let poster = document.querySelector("#poster").value;
    let categorias = document.querySelector("#select").value;
  
    let video_agg = {
        id:31,
        name: nombre,
        publisher: publisher,
        views: views,
        date: date,
        poster: poster,
        categorie: categorias
    };

    
    localStorage.setItem('nuevo_video', JSON.stringify(video_agg));


    document.getElementById('nombre').value = "";
    document.querySelector("#publisher").value = "";
    document.querySelector("#views").value = "";
    document.querySelector("#date").value = "";
    document.querySelector("#poster").value = "";
    document.querySelector("#select").value = "";
});
