let balatro_lista = document.getElementById("balatro");
let res_4 = document.getElementById("res_4");
let pokemon = document.getElementById("pokemon");
let kingdom_hearts = document.getElementById("kingdom_hearts");

let toast = document.createElement("p");
let body = document.getElementById("cuerpo");

balatro_lista.addEventListener("click", async () =>{
    

    let musica_balatro = new Audio("musica/Balatro Main Theme.wav");
    await musica_balatro.play();

    body.appendChild(toast);

    toast.innerText = "parar musica";
    toast.className = "toast";

    musica_balatro.addEventListener("timeupdate", () =>{
        
        let progressbar = document.getElementById("progressbar");
        progressbar.value = musica_balatro.currentTime.toFixed(2);
        progressbar.max = musica_balatro.duration;
    });

    toast.addEventListener("click", () =>{

        musica_balatro.pause();
        musica_balatro.currentTime = 0;

        body.removeChild(toast);
    });
    
  
    
});


res_4.addEventListener("click", async() =>{

    let musica_res4 = new Audio("musica/Resident Evil 4 Mercenaries - Ada Wong.wav")

    await musica_res4.play();

    
    body.appendChild(toast);

    toast.innerText = "parar musica";
    toast.className = "toast";

    musica_res4.addEventListener("timeupdate", () =>{
        
        let progressbar = document.getElementById("progressbar");
        progressbar.value = musica_res4.currentTime.toFixed(2);
        progressbar.max = musica_res4.duration;

    });

    toast.addEventListener("click", () =>{

        musica_res4.pause();
        musica_res4.currentTime = 0;

        body.removeChild(toast);
    });
    

});

pokemon.addEventListener("click", async() =>{

    let musica_pokemon = new Audio("musica/Pokemon Black & White 2 - Wild Battle.wav")

    await musica_pokemon.play();

    
    body.appendChild(toast);

    toast.innerText = "parar musica";
    toast.className = "toast";

    musica_pokemon.addEventListener("timeupdate", () =>{
        
        let progressbar = document.getElementById("progressbar");
        progressbar.value = musica_pokemon.currentTime.toFixed(2);
        progressbar.max = musica_pokemon.duration;

    });

    toast.addEventListener("click", () =>{

        musica_pokemon.pause();
        musica_pokemon.currentTime = 0;

        body.removeChild(toast);
    });


});


kingdom_hearts.addEventListener("click", async () =>{

    let musica_KH = new Audio("musica/KH2 - Dearly Beloved.wav");

    await musica_KH.play();


    
    body.appendChild(toast);

    toast.innerText = "parar musica";
    toast.className = "toast";

    musica_KH.addEventListener("timeupdate", () =>{
        
        let progressbar = document.getElementById("progressbar");
        progressbar.value = musica_KH.currentTime.toFixed(2);
        progressbar.max = musica_KH.duration;

    });

    toast.addEventListener("click", () =>{

        musica_KH.pause();
        musica_KH.currentTime = 0;

        body.removeChild(toast);
    });

});