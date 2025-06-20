// Seleciona todos os botões que ativam o acordeon (elementos com classe 'trigger' dentro de 'acordeon')
const botoesAcordeon = document.querySelectorAll('.acordeon .trigger')

// Para cada botão, adiciona um evento de clique
botoesAcordeon.forEach((botao) => {
    botao.addEventListener('click', () => {
        // Pega o elemento pai do botão, que é o container do acordeon
        const acordeon = botao.parentElement

        // Verifica se o acordeon já está aberto (tem a classe 'open')
        const aberto = acordeon.classList.contains('open')

        if (aberto) {
            // Se estiver aberto, remove a classe para fechar o acordeon
            acordeon.classList.remove('open')
        } else {
            // Se estiver fechado, adiciona a classe para abrir o acordeon
            acordeon.classList.add('open')
        }
    })
})
