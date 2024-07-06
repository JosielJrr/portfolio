
async function fecthProfileData() {
    const url = 'https://raw.githubusercontent.com/JosielJrr/portfolio/main/data/profile.json';
    const fecthing = await fetch(url)
    return await fecthing.json()
}