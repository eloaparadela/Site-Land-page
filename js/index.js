const hamburguer = document.querySelector("#hamburguer");
const barra = document.querySelector("#barra");

let contador = 0;

hamburguer.onclick = aparecerBarra;

function aparecerBarra() {
    contador++
    if (contador % 2) {
        barra.style.display = "flex";
    }
    else {
        barra.style.display = "none";
    }
}

function none() {
    barra.style.display = "none";
}


// codigo dos comentarios 

(function () {
    'use strict';
    window.addEventListener('load', function () {

        var forms = document.getElementsByClassName('needs-validation');

        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false)
        });
    }, false);
})();

// validação dos comentarios

$(document).ready(function () {
    // Teste para o placeholder 
    $.support.placeholder = (function () {
        var i = document.createElement('input');
        return 'placeholder' in i;
    })();
    if ($.support.placeholder) {
        $('.form-label').each(function () {
            $(this).addClass('js-hide-label');
        });

        //  Codigo para add ou remover classes 
        $('.form-group').find('input, textarea').on('keyup blur focus', function (e) {

            // Cache 
            var $this = $(this),
                $parent = $this.parent().find("label");

            switch (e.type) {
                case 'keyup': {
                    $parent.toggleClass('js-hide-label', $this.val() == '');
                } break;
                case 'blur': {
                    if ($this.val() == '') {
                        $parent.addClass('js-hide-label');
                    } else {
                        $parent.removeClass('js-hide-label').addClass('js-unhighlight-label');
                    }
                } break;
                case 'focus': {
                    if ($this.val() !== '') {
                        $parent.removeClass('js-unhighlight-label');
                    }
                } break;
                default: break;
            }

        });
    }
});


// carousel das empresas 

$('.carousel-client').bxSlider({
    auto: true,
    slideWidth: 234,
    minSlides: 2,
    maxSlides: 5,
    controls: false
});


// codigo de movimento suave na pagina

var $doc = $('html, body');
$('.scrollsuave').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 900);
    return false;
});


