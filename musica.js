let balatro_lista = document.getElementById("balatro");



balatro_lista.addEventListener("click", async () =>{
    

    let musica_balatro = new Audio("musica/Balatro Main Theme.wav");
    await musica_balatro.play();

    let body = document.getElementById("cuerpo");
    let toast = document.createElement("p");

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