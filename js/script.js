'use strict';

$(document).ready(function(){
    /* Script para o contador do 
    formulário */
    const spanMaximo = $("#maximo");
    const bCaracteres = $("#caracteres");
    const textMensagem = $("#mensagem");

    /* Determinando a qtd de caracteres */
    let quantidade = 300;

/* Ouvinte de evento para a mensagem */
textMensagem.on("input", function(){
    /* Captura em tempo real */
    let conteudo = textMensagem.val();

    /* Criando contagem regressiva */
    let contagem = quantidade-conteudo.length;

    /* Atualizar a exibição de caracteres */
    bCaracteres.text(contagem);

    /* Dando um feedback/mensagem
    de acordo com a contagem */
    if(contagem != 0){
        spanMaximo.css("color","black");
    } else {
        spanMaximo.css("color","red");
    }
});


    /* Plugin Slick */
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        arrows: false 
    });
    /* Plugin Mask */
    $("#telefone").mask("(00) 0000-0000");
});