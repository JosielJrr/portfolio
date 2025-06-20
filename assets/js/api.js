const obterDadosDoPerfil = async () => {
    const url = 'https://raw.githubusercontent.com/JosielJrr/portfolio/main/data/profile.json';
    const resposta = await fetch(url);
    return resposta.json();
};
