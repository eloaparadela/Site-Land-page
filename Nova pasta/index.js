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

(function() {
  'use strict';
  window.addEventListener('load', function() {

    var forms = document.getElementsByClassName('needs-validation');

    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false)
    });
  }, false);
})();


// $('.dinheiro').mask('#.##0,00', {reverse: true});





