
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


(async () => {
    const profileData = await fecthProfileData()
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
})()