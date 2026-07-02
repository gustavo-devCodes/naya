const texto = document.getElementById("textoRespiracao");

const etapas = [
    "🌬 Inspire por 4 segundos",
    "🫁 Segure por 4 segundos",
    "🌿 Expire lentamente por 6 segundos"
];

let etapa = 0;

setInterval(function(){

    texto.innerHTML = etapas[etapa];

    etapa++;

    if(etapa >= etapas.length){

        etapa = 0;

    }

},4000);