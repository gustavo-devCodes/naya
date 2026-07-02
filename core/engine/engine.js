const Engine = {

    analisar(mensagem){

        mensagem = mensagem.toLowerCase();

        if(mensagem.includes("ansioso")){

            return "ansiedade";

        }

        if(mensagem.includes("triste")){

            return "tristeza";

        }

        if(mensagem.includes("enem")){

            return "estudos";

        }

        return "geral";

    }

};