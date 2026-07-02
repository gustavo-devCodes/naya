const frases = [

    "🌿 Você não precisa resolver tudo hoje.",

    "💚 Pequenos passos também são progresso.",

    "🌱 Seu valor não depende da sua produtividade.",

    "☀️ Um dia difícil não define quem você é.",

    "📚 Estudar é importante. Descansar também.",

    "✨ Respire. Você já enfrentou dias difíceis antes.",

    "🌸 Está tudo bem pedir ajuda.",

    "💙 Seja gentil com você hoje."

];

function fraseDoDia(){

    const indice = Math.floor(Math.random() * frases.length);

    return frases[indice];

}