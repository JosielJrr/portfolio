
function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const job = document.getElementById('profile.job')
    job.innerText = profileData.job

    const location = document.getElementById('profile.location')
    location.innerText = profileData.location

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

        return `<li>
            <h3>${education.training}</h3>
            <h4>${education.institution}</h4>
            <p class="period">Início: ${startDate} Fim: ${endDate}</p>
            <a href="${education.certificate}" target="_blank"
                class="certificate">Diploma - ${education.training}</a>
        </li>`;
    }).join(' ');
}




(async () => {
    const profileData = await fecthProfileData()
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updatehardSkills(profileData)
    updateLanguages(profileData)
    updateTraining(profileData)
})()