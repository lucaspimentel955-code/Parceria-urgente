// 1. Selecionamos o botão pelo ID que criaste no HTML
const botaoAtacar = document.getElementById('botao-perigo');

// 2. Função principal que dispara tudo ao clicar
function iniciarAtaque() {
    // Adiciona a classe CSS ao 'body' para o ecrã começar a piscar em vermelho
    // Certifica-te que tens a classe .atencao-virus no teu style.css!
    document.body.classList.add('atencao-virus');

    // Primeira sequência de alertas (o susto inicial)
    alert("🚨 ERRO CRÍTICO: Malware detectado no seu navegador!");
    alert("Iniciando transferência de ficheiros para servidor remoto...");
    alert("Falha ao interromper processo. O sistema será formatado.");

    // Chama o loop que nunca termina
    caosInfinito();
}

// 3. Função de loop (Recursiva: ela chama-se a si mesma para sempre)
function caosInfinito() {
    alert("error ab9782i92638282h2ie7e62528253h72762829");
    alert("formatando dispositivo");
    alert("permissão negada. tentando novamente");
    
    // O segredo do loop infinito: a função chama-se a ela própria no final
    caosInfinito();
}

// 4. O "Ouvinte": diz ao botão para esperar pelo clique
// Quando o utilizador clicar, a função iniciarAtaque é executada
botaoAtacar.addEventListener('click', iniciarAtaque);
