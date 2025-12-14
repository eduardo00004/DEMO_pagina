let balatro_lista = document.getElementById("balatro");



balatro_lista.addEventListener("click", ()=> {
    
    let musica_balatro = new Audio("musica/Balatro Main Theme.wav");
    musica_balatro.play();

    let body = document.getElementById("cuerpo");
    let toast = document.createElement("p");

    toast.innerText = "parar musica";
    toast.className = "toast";

    body.appendChild(toast);

    toast.addEventListener("click", () =>{

        musica_balatro.pause();
        musica_balatro.currentTime = 0;

        body.removeChild(toast);
    })
    
  
    
});