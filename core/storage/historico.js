const Historico = {

    salvar(tipo, conteudo){

        const historico = JSON.parse(localStorage.getItem("historico")) || [];

        historico.push({

            tipo,

            conteudo,

            data: new Date().toLocaleString()

        });

        localStorage.setItem(

            "historico",

            JSON.stringify(historico)

        );

    },

    listar(){

        return JSON.parse(localStorage.getItem("historico")) || [];

    }

};