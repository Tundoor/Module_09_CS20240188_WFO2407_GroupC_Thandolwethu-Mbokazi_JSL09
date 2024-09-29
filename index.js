// Fetches background image from  Api

fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=universe')
    .then(res => res.json())
    .then(data => {
        document.getElementById('body').style.backgroundImage = `url(${data.urls.full})`
        // Gets the author's name.
        document.getElementById('author').textContent = `By: ${data.user.name}`
    })