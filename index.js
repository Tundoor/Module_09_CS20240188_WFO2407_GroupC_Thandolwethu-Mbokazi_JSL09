// Fetches background image from  Api

fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=galaxy')
    .then(res => res.json())
    .then(data => {
        document.getElementById('body').style.backgroundImage = `url(${data.urls.full})`
        document.getElementById('author').textContent = `By: ${data.user.name}`
    })