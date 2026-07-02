document.getElementById("frase").textContent = fraseDoDia();
const emojis = document.querySelectorAll(".emoji");
const botao = document.getElementById("comecar");

let humorSelecionado = "";

emojis.forEach(function(emoji){

    emoji.addEventListener("click", function(){

        emojis.forEach(function(item){

            item.classList.remove("ativo");

        });

        this.classList.add("ativo");

        humorSelecionado = this.textContent;

    });

});

botao.addEventListener("click", function(){

    if(humorSelecionado === ""){

        alert("Escolha como você está se sentindo 😊");

        return;

    }

    localStorage.setItem("humor", humorSelecionado);

   window.location.href = "paginas/painel.html";

});
const botaoRespirar = document.getElementById("respirar");

botaoRespirar.addEventListener("click", function(){

    window.location.href = "paginas/respiracao.html";

});
const frasePainel = document.getElementById("frasePainel");

if(frasePainel){

    frasePainel.textContent = fraseDoDia();

}