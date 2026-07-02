const Escuta = {

    identificar(texto){

        texto = texto.toLowerCase();

        if(texto.includes("cansado")){

            return {

                emocao: "cansaço",

                pergunta:
                "💚 Quando você diz que está cansado, é mais um cansaço físico, mental ou emocional?"

            }

        }

        if(texto.includes("ansioso")){

            return {

                emocao:"ansiedade",

                pergunta:
                "🌿 O que está deixando você mais ansioso neste momento?"

            }

        }

        if(texto.includes("triste")){

            return{

                emocao:"tristeza",

                pergunta:
                "💙 Você gostaria de me contar o que aconteceu hoje?"

            }

        }

        return{

            emocao:"geral",

            pergunta:
            "Pode me contar um pouco mais?"

        }

    }

}