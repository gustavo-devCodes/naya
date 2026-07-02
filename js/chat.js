const botaoEnviar = document.getElementById("enviar");
const mensagem = document.getElementById("mensagem");
const chat = document.getElementById("chat");

const humor = localStorage.getItem("humor");

let mensagemInicial = "";

switch(humor){

    case "😀":
        mensagemInicial = "😊 Que bom ver você por aqui! O que aconteceu de bom hoje?";
        break;

    case "🙂":
        mensagemInicial = "🌿 Fico feliz que você esteja bem. Como posso ajudar hoje?";
        break;

    case "😐":
        mensagemInicial = "💚 Tudo bem não estar em um dia incrível. Como foi seu dia?";
        break;

    case "😔":
        mensagemInicial = "💙 Sinto muito que hoje esteja sendo difícil. Estou aqui para ouvir você.";
        break;

    case "😰":
        mensagemInicial = "🌬 Percebi que você está ansioso. Podemos conversar ou fazer um exercício de respiração.";
        break;

    default:
        mensagemInicial = "Olá! Como você está se sentindo hoje?";
}

chat.innerHTML = `
<div class="mensagem-ia">
    ${mensagemInicial}
</div>
`;

botaoEnviar.addEventListener("click", enviarMensagem);

mensagem.addEventListener("keydown", function(event){

    if(event.key === "Enter"){

        enviarMensagem();

    }

});

botaoEnviar.addEventListener("click", function () {

    if (mensagem.value === "") {
        return;
    }

    chat.innerHTML += `
        <div class="mensagem-usuario">
            ${mensagem.value}
        </div>

        <div class="mensagem-ia">
            ${responderAurora(mensagem.value)}
        </div>
    `;

    // Salva a mensagem no histórico
    Historico.salvar(
        "mensagem",
        mensagem.value
    );

    // Limpa o campo
    mensagem.value = "";

});

function responderNaya(texto){

    texto = texto.toLowerCase();

    if(texto.includes("ansioso") || texto.includes("ansiedade")){

        return "🌬 Vamos respirar juntos? Inspire por 4 segundos, segure por 4 e expire lentamente por 6 segundos.";

    }

    if(texto.includes("triste")){

        return "💙 Obrigado por confiar em mim. Quer me contar o que aconteceu?";

    }

    if(texto.includes("enem")){

        return "📚 Podemos organizar seus estudos em pequenas etapas. Você não precisa fazer tudo hoje.";

    }

    if(texto.includes("cansado")){

        return "😴 Descansar também faz parte do aprendizado. Como foi sua rotina hoje?";

    }

    return "🌿 Obrigado por compartilhar isso comigo. Estou aqui para conversar com você.";

}