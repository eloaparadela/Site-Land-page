const hamburguer = document.querySelector("#hamburguer");
const barra = document.querySelector("#barra");

let contador = 0;

hamburguer.onclick = aparecerBarra;

function aparecerBarra(){
    contador++
    if(contador % 2){
        barra.style.display = "flex";
    }
    else{
        barra.style.display = "none";
    }
}

function none(){
    barra.style.display = "none";
}


$(window).load(function() {
    $('.flexslider').flexslider({
      animation: "slide",
      animationLoop: false,
      itemWidth: 210,
      itemMargin: 5,
      minItems: 2,
      maxItems: 4
    });
  });