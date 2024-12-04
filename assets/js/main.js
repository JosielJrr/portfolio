
function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const location = document.getElementById('profile.location')
    location.innerText = profileData.location

    const job = document.getElementById('profile.job')
    job.innerText = profileData.job

    const resume = document.getElementById('profile.resume')
    resume.innerText = profileData.resume

    const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.phone

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills')
    softSkills.innerHTML = profileData.skills.softSkills.map((skill) => `<li>${skill}</li>`).join(' ')
}

function updatehardSkills(profileData) {
    const hardSkills = document.getElementById('profile.skills.hardSkills')
    hardSkills.innerHTML = profileData.skills.hardSkills.map((skill) => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></img></li>`).join(' ')
}

function updateLanguages(profileData) {
    const languages = document.getElementById('profile.languages')
    languages.innerHTML = profileData.languages.map((language) => `<li>${language}</li>`).join(' ')
}

function updateTraining(profileData) {
    const training = document.getElementById('profile.education');
    training.innerHTML = profileData.education.map((education) => {

        const startDate = education.period && education.period.start ? education.period.start : '--';
        const endDate = education.period && education.period.end ? education.period.end : '--';

        const certificateLink = education.certificate ? `<a href="${education.certificate}" target="_blank" class="certificate">Certificado - ${education.training}</a>` : '';

        return `<li>
            <h3>${education.training} - ${education.institution}</h3>
            <p class="period">Início: ${startDate} Fim: ${endDate}</p>
            ${certificateLink} 
        </li>`;
    }).join(' ');
}

function updatePortfolio(profileData) {
    const portfolio = document.getElementById('profile.portfolio')
    portfolio.innerHTML = profileData.portfolio.map((project) => {
        const github = project.github ? `class="title github"` : '';

        return `
        <li>
            <h3 ${github} >${project.name}</h3>
            <a href="${project.url}" target="_blank">Ir para o Repositório</a>
        </li>`
    }).join(' ')
}

function updateProfessionalExperience(profileData){
    const professionalExperience = document.getElementById('profile.professionalExperience')
    professionalExperience.innerHTML = profileData.experience.map((experience) => {
    
        const startDate = experience.period && experience.period.start ? experience.period.start : '--';
        const endDate = experience.period && experience.period.end ? experience.period.end : '--';

        return `
        <li>
            <h3 class="title">${experience.name}</h3>
            <h4>${experience.institution}</h4>
            <p class="period">Início: ${startDate} Fim: ${endDate}</p>
            <p>${experience.description}</p>
        </li>`
    })
}


(async () => {
    const profileData = await fecthProfileData()
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updatehardSkills(profileData)
    updateLanguages(profileData)
    updateTraining(profileData)
    updatePortfolio(profileData)
    updateProfessionalExperience(profileData)
})()