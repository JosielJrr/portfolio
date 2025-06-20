// Atualiza as informações básicas do perfil
const atualizarPerfil = (profileData) => {
    const fotoPerfil = document.getElementById('profile-photo')
    fotoPerfil.src = profileData.photo
    fotoPerfil.alt = profileData.name

    const nome = document.getElementById('profile-name');
    nome.innerText = profileData.name;

    const emprego = document.getElementById('profile-job')
    emprego.innerText = profileData.job

    const local = document.getElementById('profile-location')
    local.innerText = profileData.location

    const linkedIn = document.getElementById('profile-linkedin')
    linkedIn.href = profileData.linkedin

    const cv = document.getElementById('profile-resume')
    cv.href = profileData.resume

    const email = document.getElementById('profile-email');
    email.href = `mailto:${profileData.email}`;
    email.innerText = profileData.email;
}

// Atualiza a lista de tecnologias com logos
const atualizarHardSkills = (profileData) => {
    const hardSkills = document.getElementById('skills-hard')
    hardSkills.innerHTML = profileData.skills.hardSkills.map((skill) => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></img></li>`).join(' ')
}

// Atualiza a lista de soft skills (texto simples)
const atualizarSoftSkills = (profileData) => {
    const softSkills = document.getElementById('skills-soft')
    softSkills.innerHTML = profileData.skills.softSkills.map((skill) => `<li>${skill}</li>`).join('')
}

// Atualiza a lista de idiomas
const atualizarIdiomas = (profileData) => {
    const idiomas = document.getElementById('languages-list')
    idiomas.innerHTML = profileData.languages.map((language) => `<li>${language}</li>`).join('')
}

// Atualiza os cursos e formações
const atualizarCursos = (profileData) => {
    const cursos = document.getElementById('education-list');
    cursos.innerHTML = profileData.education.map((curso) => {
        const dataInicio = curso.period?.start ?? '--'; // Pega inicio se existir, senão '--'
        const dataFim = curso.period?.end ?? '--';  // Pega fim se existir, senão '--'

        const linkCertificado = curso.certificate ? `<a href="${curso.certificate}" target="_blank" class="certificate">Certificado - ${curso.training}</a>` : '';

        return `
        <li>
            <h3>${curso.training} - ${curso.institution}</h3>
            <p class="period">Início: ${dataInicio} Fim: ${dataFim}</p>
            ${linkCertificado}
        </li>`;
    }).join('');
}

// Atualiza a lista de projetos do portfólio
const atualizarPortfolio = (profileData) => {
    const projetos = document.getElementById('portfolio-list')
    projetos.innerHTML = profileData.portfolio.map((projeto) => {
        const githubClasse = projeto.github ? 'title github' : 'title'; // Adiciona classe com ícone GitHub 

        return `
        <li>
            <h3 class="${githubClasse}">${projeto.name}</h3>
            <a href="${projeto.url}" target="_blank">Ir para o Repositório</a>
        </li>`;
    }).join('')
}

// Atualiza a experiência profissional
const atualizarExperienciaProfissional = (profileData) => {
    const expProfissionais = document.getElementById('experience-list');
    expProfissionais.innerHTML = profileData.experience.map((experience) => {
        const dataInicio = experience.period?.start ?? '--'; // Pega início se existir, senão '--'
        const dataFim = experience.period?.end ?? '--';       // Pega fim se existir, senão '--'

        return `
        <li>
            <h3 class="title">${experience.name}</h3>
            <h4>${experience.institution}</h4>
            <p class="period">Início: ${dataInicio} Fim: ${dataFim}</p>
            <p>${experience.description}</p>
        </li>`;
    }).join('');
}

// Função auto-invocada (IIFE) para carregar os dados e atualizar o HTML
(async () => {
    const profileData = await obterDadosDoPerfil()
    atualizarPerfil(profileData)
    atualizarSoftSkills(profileData)
    atualizarHardSkills(profileData)
    atualizarIdiomas(profileData)
    atualizarCursos(profileData)
    atualizarPortfolio(profileData)
    atualizarExperienciaProfissional(profileData)
})()