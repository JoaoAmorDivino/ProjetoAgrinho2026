// =========================================================
// AGRINHO 2026 - SCRIPT DE INTERATIVIDADE
// =========================================================

document.addEventListener('DOMContentLoaded', () => {

    // 1. NAVEGAÇÃO INTERATIVA DO BOTÃO PRINCIPAL
    // Pega o botão "Descubra Como" pelo ID
    const btnSaibaMais = document.getElementById('btn-saiba-mais');

    if (btnSaibaMais) {
        btnSaibaMais.addEventListener('click', () => {
            // Pega a seção de destino
            const secaoDesafio = document.getElementById('desafio');

            // Faz a rolagem até a seção de forma fluida
            secaoDesafio.scrollIntoView({ behavior: 'smooth' });

            // Mensagem extra de incentivo
            alert("Bem-vindo ao futuro do campo! Vamos conhecer o desafio da sustentabilidade.");
        });
    }

    // 2. ROLAGEM SUAVE PARA OS LINKS DO MENU CABEÇALHO
    // Seleciona todos os links dentro da tag <nav>
    const linksMenu = document.querySelectorAll('nav ul.menu li a');

    linksMenu.forEach(link => {
        link.addEventListener('click', function (evento) {
            // Evita o comportamento padrão do link de pular direto
            evento.preventDefault();

            // Pega o ID da seção que o link aponta (ex: #praticas)
            const idDestino = this.getAttribute('href');
            const secaoDestino = document.querySelector(idDestino);

            // Rola a página até a seção
            secaoDestino.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // 3. EFEITO CONCRETISTA DE APARECIMENTO EM BLOCOS (SCROLL REVEAL)
    // Seleciona todos os cards de práticas sustentáveis
    const cards = document.querySelectorAll('.card');

    // Cria um "Observador" para ver quando os cards entram na tela
    const observadorDeCards = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            // Se o card apareceu na tela
            if (entrada.isIntersecting) {
                // Adiciona um estilo direto via JS para destacá-lo
                entrada.target.style.opacity = '1';
                entrada.target.style.transform = 'translateY(0)';
                // Para de observar o card depois que ele já apareceu
                observadorDeCards.unobserve(entrada.target);
            }
        });
    }, {
        threshold: 0.2 // O efeito dispara quando 20% do card estiver visível
    });

    // Prepara os cards escondendo-os inicialmente
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.4s ease-out, transform 0.4s ease-out';
        observadorDeCards.observe(card);
    });

    // 4. EASTER EGG EDUCATIVO (MENSAGEM NO CONSOLE PARA OS AVALIADORES)
    // Pressione F12 no navegador para ver essa mensagem!
    console.log("%c🌱 Agrinho 2026 - Paraná", "color: #008C45; font-size: 20px; font-weight: bold;");
    console.log("O Paraná é referência nacional no Sistema de Plantio Direto e práticas de baixo carbono. Juntos pelo agro sustentável!");
});